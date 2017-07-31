// import * as Types from '../actions/types'
import Sample from './Sample'
import Panner from './Panner'
import AudioProcessor from './AudioProcessor'

export default class Track {
  constructor(ctx, id, store){
    this.context = ctx;
    this.id = id;
    this.store = store;
    this.store.subscribe(this.updateState.bind(this));

    this.outputGain = ctx.createGain();
    this.sendGains = [];
    this.sendGains[0] = ctx.createGain();
    this.sendGains[1] = ctx.createGain();
    this.panner = new Panner(ctx, id, store);
    this.meter = new AudioProcessor(ctx, id, store);

    this.output;
    this.reverbNode;
    this.delayNode;
    this.sourceNode;
    this.sample;
    this.buffer;
    this.sequence = [];
    this.mute = false;
    this.solo = false;;
  }

  updateState(){
    let { tracks, kits, controller } = this.store.getState();
    let trackData = tracks[this.id];
    let { buffers } = kits;
    // console.log('buffers', buffers)
    // console.log('thisTrackData', tracks);
    if (trackData){
      let { bufferId,
        // sequence,
        volume,
        mute,
        solo,
        reverbSend,
        delaySend } = trackData;
      // console.log('bufferId', bufferId);
      if (this.buffer !== buffers[bufferId]) this.assignSample(buffers[bufferId]);
      // if (this.sequence !== sequence) this.updateSequence(sequence);
      if (Math.round(this.getVolume()*10) !== volume ) this.updateVolume(volume/10);
      if (Math.round(this.getSendGain(0)*10) !== reverbSend ) this.updateSendGain(0, reverbSend/10);
      if (Math.round(this.getSendGain(1)*10) !== delaySend ) this.updateSendGain(1, delaySend/10);
      if (this.mute !== mute ) this.toggleMute(mute);
      if (this.isSolo !== solo ) this.toggleSolo(solo);
    }
  }

  init(output, reverbNode, delayNode){
    let self = this;
    this.output = output;
    this.reverbNode = reverbNode;
    this.delayNode = delayNode;
    // connect it all up!
    this.meter.init(this.outputGain, this.output);
    this.connect();
  }
  getId(){
    return this.id;
  }
  // updateSequence(sequence){
  //   this.sequence = sequence;
  // }
  assignSample(buffer){
    this.buffer = buffer;
    this.sample = new Sample(this.context, buffer, this.panner.node(), this.outputGain,this.sendGains[0],this.sendGains[1]);
  }
  triggerSample(time){
    this.sample.trigger(time);
  }
  toggleMute(mute){
    mute ? this.disconnect() : this.connect();
    this.mute = mute;
  }
  isMute(){
    return this.mute;
  }
  toggleSolo(solo){
    this.solo = solo;
  }
  isSolo(){
    return this.solo;
  }
  updateVolume(value){
    // console.log('Track '+this.id+' volume', value )
    this.outputGain.gain.value = value;
  }
  getVolume(){
    return this.outputGain.gain.value;
  }
  updateSendGain(index, value){
    // console.log('Track '+this.id+' send ' + index, 'value '+value )
    this.sendGains[index].gain.value = value;
  }
  getSendGain(index){
    return this.sendGains[index].gain.value;
  }
  connect(){
    this.sendGains[0].connect(this.reverbNode);
    this.sendGains[1].connect(this.delayNode);
    this.meter.connect();
    this.outputGain.connect(this.output);
  }
  disconnect(){
    // console.log('Track '+this.id+' disconnect')
    this.sendGains[0].disconnect(this.reverbNode);
    this.sendGains[1].disconnect(this.delayNode);
    this.meter.disconnect();
    this.outputGain.disconnect(this.output);
  }
}
