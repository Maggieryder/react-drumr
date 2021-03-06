const BASE_PATH = 'assets/audio/'

export default class Reverb {
  constructor(ctx){
    this.ctx = ctx;
    this.convolver = ctx.createConvolver();
    this.convolverGain = ctx.createGain();
    this.active = false;
    this.reverbId = -1;
    this.output;
    this.store;
  }
  setStore( store ){
    this.store = store;
    this.store.subscribe(this.updateState.bind(this))
    this.updateState()
  }
  updateState(){
    let { reverb } = this.store.getState();
    let { active, reverbData, reverbId } = reverb;
    if ( this.active !== active ) this.toggleActive(active);
    if ( this.reverbId !== reverbId ) {
      if ( reverbData.length < 1 ) return;
      this.reverbId = reverbId;
      let url = BASE_PATH + reverbData[reverbId].smpl;
      this.loadImpulse(url);
    }
  }
  init(output){
    this.output = output;
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
        // console.log('IMPULSE LOADED', buffer);
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
    this.convolver.connect(this.output);
  }
  disconnect(){
    this.convolverGain.disconnect(this.convolver);
    this.convolver.disconnect(this.output);
  }
  toggleActive(active){
    this.active ? this.disconnect() : this.connect();
    this.active = active;
  }
}
