export default class Delay {
  constructor(ctx){
    this.delay = ctx.createDelay();
    this.feedback = ctx.createGain();
    this.filter = ctx.createBiquadFilter();
    this.mixNode;
  }
  init(mixNode){
    console.log('DELAY INIT beatsecs', this.delay.delayTime.value);
    this.mixNode = mixNode;
    // this is the magic formula
    this.updateDelayTime(.25);
    this.updateFeedbackGain(.5);
    this.updateFrequency(1000);
  }
  delayNode(){
    return this.delay;
  }
  updateDelayTime(val){
    console.log('updateDelayTime', val);
    this.delay.delayTime.value = val;
  }
  updateFeedbackGain(val){
    console.log('updateFeedbackGain', val);
    this.feedback.gain.value = val;
  }
  updateFrequency(val){
    console.log('updateFrequency', val);
    this.filter.frequency.value = val;
  }
  connect(){
    this.delay.connect(this.feedback);
    this.feedback.connect(this.filter);
    this.filter.connect(this.delay);
    this.delay.connect(this.mixNode);
  }
  disconnect(){
    this.delay.disconnect(this.feedback);
    this.feedback.disconnect(this.filter);
    this.filter.disconnect(this.delay);
    this.delay.disconnect(this.mixNode);
  }
  toggleDelay(on){
    console.log('toggleDelay', on);
    on ? this.connect() : this.disconnect();
  }
}
