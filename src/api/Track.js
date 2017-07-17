import Sample from './Sample'
// import Sequencer from './Sequencer'

export default class Track {
  constructor(ctx, id){
    this.context = ctx;
    this.id = id;
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
  }
  init(output, reverbNode, delayNode){
    let self = this;
    this.output = output;
    this.reverbNode = reverbNode;
    this.delayNode = delayNode;
    // connect it all up!
    this.connect();
    // default settings
    this.panX(0);
    this.updateVolume(.7);
    this.updateSendGain(0,0);
    this.updateSendGain(1,0);
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
    // clipTrack({id:this.id,clip:didRecentlyClip})
    // requestAnimationFrame(function() { self.renderMeter() });
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
    // muteTrack(this.id)
    // console.log('Track '+this.id+' mute', this.mute )
  }
  toggleSolo(){
    this.solo = !this.solo;
    // soloTrack(this.id)
  }
  auxSend(i){
    return this.sendGains[i];
  }
  updateSendGain(index, value){
    // console.log('Track '+this.id+' send ' + index, 'value '+value )
    this.sendGains[index].gain.value = value;
  }
  updateVolume(value){
    // console.log('Track '+this.id+' volume', value )
    this.outputGain.gain.value = value;
  }
  panX(value){
    // console.log('Track '+this.id+' pan', value )
    let xpos = value,
    zpos = 1 - Math.abs(xpos);
    this.panner.setPosition(xpos, 0, zpos);
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

// assignId(id){
//   this.id = id;
// }
