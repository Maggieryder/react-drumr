export default class Sample {
  constructor(ctx, buffer, panner, output, reverb, delay){
    this.context = ctx;
    this.buffer = buffer;
    this.panner = panner;
    this.reverb = reverb;
    this.delay = delay;
    this.output = output;
  }
  init(){
    this.source = this.context.createBufferSource();
    this.source.buffer = this.buffer;
    this.source.connect(this.panner);
    this.panner.connect(this.reverb);
    this.panner.connect(this.delay);
    this.panner.connect(this.output);
  }

  trigger(time){
    // console.log('GOT TRIGGER!!', time)
    this.init();
    this.source.start(time);
  }
}
