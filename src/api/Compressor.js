export default class Compressor {
  constructor(ctx){
    this.compressor = ctx.createDynamicsCompressor();
    this.source;
    this.output;
    this.active;
  }
  init(source, output, defaults = {
      threshold: -24,
      knee: 30,
      ratio: 12,
      attack: 0.003,
      release: .25,
    }){
    //console.log('COMPRESSOR INIT');
    this.source = source;
    this.output = output;
    // set to defaults
    this.updateThreshold(defaults.threshold);
    this.updateKnee(defaults.knee);
    this.updateRatio(defaults.ratio);
    // readonly attribute: this.updateReduction(-20.0);
    this.updateAttack(defaults.attack);
    this.updateRelease(defaults.release);
    //this.connect();
  }
  updateThreshold(value){
    this.compressor.threshold.value = value;
  }
  updateKnee(value){
    this.compressor.knee.value = value;
  }
  updateRatio(value){
    this.compressor.ratio.value = value;
  }
  updateReduction(value){
    //if (typeof this.compressor.reduction === 'float') {
      // this.compressor.reduction = value;
    //} else {
      //this.compressor.reduction.value = value;
    //}
  }
  updateAttack(value){
    this.compressor.attack.value = value;
  }
  updateRelease(value){
    this.compressor.release.value = value;
  }
  connect(){
    this.source.disconnect(this.output);
    this.source.connect(this.compressor);
    this.compressor.connect(this.output);
  }
  disconnect(){
    this.source.disconnect(this.compressor);
    this.compressor.disconnect(this.output);
    this.source.connect(this.output);
  }
  toggleCompressor(on){
    this.active ? this.disconnect() : this.connect();
    this.active = !this.active;
  }
  compressorNode(){
    return this.compressor;
  }
}
