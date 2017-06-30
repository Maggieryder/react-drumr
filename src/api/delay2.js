export default class Delay {
  constructor(ctx){
    this.delay = ctx.createDelay();
    this.feedback = ctx.createGain();
    this.filter = ctx.createBiquadFilter();
    this.output;
  }
  init(output, defaults = {
      time: .25,
      feedback: .5,
      frequency: 1000
    }){
    console.log('DELAY INIT beatsecs', this.delay.delayTime.value);
    this.output = output;
    // this is the magic formula
    this.updateDelayTime(defaults.time);
    this.updateFeedbackGain(defaults.feedback);
    this.updateFrequency(defaults.frequency);
  }
  delayNode(){
    return this.delay;
  }
  updateDelayTime(value){
    this.delay.delayTime.value = value;
  }
  updateFeedbackGain(value){
    this.feedback.gain.value = value;
  }
  updateFrequency(val){
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
  toggleDelay(on){
    on ? this.connect() : this.disconnect();
  }
}
