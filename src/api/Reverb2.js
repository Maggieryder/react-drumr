export default class Reverb {
  constructor(ctx){
    this.ctx = ctx;
    this.convolver = ctx.createConvolver();
    this.convolverGain = ctx.createGain();
    this.mixNode;
    //this.isOn = false;
  }
  init(mixNode){
    //console.log('REVERB INIT beatsecs');
    this.mixNode = mixNode;
    this.convolverGain.gain.value = 0;
    this.convolver.loop = true;
    this.convolver.normalize = true;
  }
  loadImpulse(url){
    let self = this;
    this.convolverGain.gain.value = 0;
    const request = new XMLHttpRequest();
    //header('Access-Control-Allow-Origin: *');
    request.open('get', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
      self.ctx.decodeAudioData(request.response, function(buffer) {
        //console.log('LOAD IMPULSE', buffer);
        self.convolver.buffer = buffer;
        self.convolverGain.gain.value = .7;
        // do the connexions
        //self.connect();
      });
    };
    request.send();
  }
  convolverNode(){
    return this.convolver;
  }
  gainNode(){
    return this.convolverGain;
  }
  connect(){
    this.convolverGain.connect(this.convolver);
    this.convolver.connect(this.mixNode);
  }
  disconnect(){
    this.convolverGain.disconnect(this.convolver);
    this.convolver.disconnect(this.mixNode);
  }
  /*
  Reverb.prototype.isConnected = function(){
    return this.isOn;
  }*/
  toggleReverb(on){
    //console.log('toggleReverb', e.target);
    //e.target.classList.toggle('on');
    //this.isOn = !this.isOn;
    on ? this.connect() : this.disconnect();
  }
}
