import Sample from './Sample'
import * as Types from '../actions/types'

export default class Track {
  constructor(ctx, id, store){
    this.context = ctx;
    this.id = id;
    this.store = store;
    this.store.subscribe(this.updateState.bind(this));

    this.buffer;
    this.sample;
    this.sourceNode;
    this.instrumentName;
    // this.sequencer = sequencer

    this.outputGain = ctx.createGain();
    this.sendGains = [];
    this.sendGains[0] = ctx.createGain();
    this.sendGains[1] = ctx.createGain();
    this.panner = ctx.createPanner();
    this.meter = ctx.createScriptProcessor(2048, 1, 1);

    this.panner.panningModel = 'equalpower';
    this.panner.distanceModel = 'linear';
    this.panner.rolloffFactor = 0;
    this.panner.coneOuterAngle = 0;
    this.panner.positionX.value = -1; // hack to force first time refresh
    /*this.panner.refDistance = 1;
    this.panner.maxDistance = 10000;
    this.panner.rolloffFactor = 0;
    this.panner.coneInnerAngle = 360;
    this.panner.coneOuterAngle = 0;
    this.panner.coneOuterGain = 0;*/
    this.output;
    this.reverbNode;
    this.delayNode;
    this.mute;
    this.solo;
    this.lastClipTime;
    // this.updateState();
  }

  updateState(){
    let { tracks, kits } = this.store.getState();
    let trackData = tracks[this.id];
    let { buffers } = kits;
    // console.log('buffers', buffers)
    // console.log('thisTrackData', tracks);
    let { bufferId,
      sequence,
      volume,
      pan,
      clip,
      mute,
      solo,
      reverbSend,
      delaySend } = trackData;
    // console.log('bufferId', bufferId);
    // console.log('Math.round(this.getPan()[0]*5)', Math.round(this.getPan()[0]*5), this.getPan()[1], pan);
    if (this.buffer !== buffers[bufferId]) this.assignSample(buffers[bufferId]);
    if (Math.round(this.getVolume()*10) !== volume ) this.updateVolume(volume/10);
    if (Math.round(this.getPan()[0]*5) !== pan ) this.updatePan(pan/5);
    if (Math.round(this.getSendGain(0)*10) !== reverbSend ) this.updateSendGain(0, reverbSend/10);
    if (Math.round(this.getSendGain(1)*10) !== delaySend ) this.updateSendGain(1, delaySend/10);
    // if (this.isMute !== mute ) this.toggleMute();
    // if (this.isSolo !== solo ) this.toggleSolo();
  }

  init(output, reverbNode, delayNode){
    let self = this;
    this.output = output;
    this.reverbNode = reverbNode;
    this.delayNode = delayNode;
    // connect it all up!
    this.connect();
    // default settings
    // this.panX(0);
    // this.updateVolume(.7);
    // this.updateSendGain(0,0);
    // this.updateSendGain(1,0);
    this.meter.onaudioprocess = function(e) { self.processAudio(e) };
    this.renderMeter();
  }

  processAudio(e) {
    // console.log('processAudio', e);
    let leftBuffer = e.inputBuffer.getChannelData(0);
    this.checkClipping(leftBuffer);
    /*
    var rightBuffer = e.inputBuffer.getChannelData(1);
    this.checkClipping(rightBuffer);
    */
  }
  checkClipping(buffer) {
    let isClipping = false;
    // Iterate through buffer to check if any of the |values| exceeds 1.
    for (var i = 0; i < buffer.length; i++) {
      var absValue = Math.abs(buffer[i]);
      if (absValue >= .33) {
        isClipping = true;
        break;
      }
    }
    //console.log('isClipping', isClipping);
    if (isClipping) {
      this.lastClipTime = new Date();
    }
  }
  renderMeter() {
    let self = this;
    let now = new Date()
    let didRecentlyClip = (now - this.lastClipTime) < 100;
    let track = {id: this.id, clip: didRecentlyClip }
    // this.store.dispatch({type:Types.CLIP_TRACK, track })
    // clipTrack({id:this.id,clip:didRecentlyClip})
    requestAnimationFrame(function() { self.renderMeter() });
  }
  getId(){
    return this.id;
  }
  isMute(){
    return this.mute;
  }
  isSolo(){
    return this.solo;
  }
  assignSample(buffer){
    // console.log('ASSIGN SAMPLE')
    this.buffer = buffer;
    this.sample = new Sample(this.context, buffer, this.panner, this.outputGain,this.sendGains[0],this.sendGains[1]);
  }
  triggerSample(time){
    this.sample.trigger(time);
  }
  assignInstrumentName(index, str){
    this.instrumentName = str;
  }
  toggleMute(){
    this.mute ? this.connect() : this.disconnect();
    this.mute = !this.mute;
  }
  toggleSolo(){
    this.solo = !this.solo;
  }
  auxSend(i){
    return this.sendGains[i];
  }
  updateSendGain(index, value){
    // console.log('Track '+this.id+' send ' + index, 'value '+value )
    this.sendGains[index].gain.value = value;
  }
  getSendGain(index){
    return this.sendGains[index].gain.value;
  }
  updateVolume(value){
    // console.log('Track '+this.id+' volume', value )
    this.outputGain.gain.value = value;
  }
  getVolume(){
    return this.outputGain.gain.value;
  }
  updatePan(value){
    console.log('Track '+this.id+' pan', value )
    let xpos = value,
    zpos = 1 - Math.abs(xpos);
    this.panner.setPosition(xpos, 0, zpos);
  }
  getPan(){
    return [this.panner.positionX.value, this.panner.positionZ.value]
  }
  // updateSequence(sequence){
  //   console.log('updateSequence', sequence)
  //   this.sequencer.updateSequence(this.id, sequence)
  // }
  connect(){
    // console.log('Track '+this.id+' connect')
    this.sendGains[0].connect(this.reverbNode);
    this.sendGains[1].connect(this.delayNode);
    this.outputGain.connect(this.meter);
    this.meter.connect(this.output);
    this.outputGain.connect(this.output);
  }
  disconnect(){
    // console.log('Track '+this.id+' disconnect')
    this.sendGains[0].disconnect(this.reverbNode);
    this.sendGains[1].disconnect(this.delayNode);
    this.outputGain.disconnect(this.meter);
    this.meter.disconnect(this.output);
    this.outputGain.disconnect(this.output);
  }
}
