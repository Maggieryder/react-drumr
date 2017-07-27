export default class Delay {
  constructor(ctx){
    this.delay = ctx.createDelay();
    this.feedback = ctx.createGain();
    this.filter = ctx.createBiquadFilter();
    this.active = false;
    this.store;
    this.output;
  }
  setStore( store ){
    this.store = store;
    this.store.subscribe(this.updateState.bind(this))
    this.updateState()
  }
  updateState(){
    let { delay, controller } = this.store.getState();
    let { time, feedback, frequency, active } = delay;
    let { tempo } = controller;
    if ( this.delay.delayTime.value !== 60.0 / tempo * time ) this.updateDelayTime( 60.0 / tempo * time )
    if ( this.feedback.gain.value !== feedback ) this.updateFeedbackGain( feedback )
    if ( this.filter.frequency.value !== frequency ) this.updateFrequency( frequency )
    if ( this.active !== active ) this.toggleActive(active)
  }
  init( output ){
    this.output = output;
  }
  gainNode(){
    return this.delay;
  }
  updateDelayTime(value){
    this.delay.delayTime.value = value;
  }
  updateFeedbackGain(value){
    this.feedback.gain.value = value;
  }
  updateFrequency(value){
    this.filter.frequency.value = value;
  }
  connect(){
    this.delay.connect(this.feedback);
    this.feedback.connect(this.filter);
    this.filter.connect(this.delay);
    this.delay.connect(this.output);
  }
  disconnect(){
    this.delay.disconnect(this.feedback);
    this.feedback.disconnect(this.filter);
    this.filter.disconnect(this.delay);
    this.delay.disconnect(this.output);
  }
  toggleActive(active){
    this.active ? this.disconnect() : this.connect();
    this.active = active
  }
}
