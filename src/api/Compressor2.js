export default class Compressor {
  constructor(ctx){
    this.compressor = ctx.createDynamicsCompressor();
    this.source;
    this.destination;
  }
  init(source, destination){
    //console.log('COMPRESSOR INIT');
    this.source = source;
    this.destination = destination;
    // set to defaults
    this.updateThreshold(-24);
    this.updateKnee(30);
    this.updateRatio(12);
    // readonly attribute: this.updateReduction(-20.0);
    this.updateAttack(0.003);
    this.updateRelease(.25);
    console.log('this.compressor.reduction',this.compressor.reduction)
    //this.connect();
  }
  updateThreshold(val){
    //console.log('updateThreshold', val);
    this.compressor.threshold.value = val;
  }
  updateKnee(val){
    //console.log('updateKnee', val);
    this.compressor.knee.value = val;
  }
  updateRatio(val){
    //console.log('updateRatio', val);
    this.compressor.ratio.value = val;
  }
  updateReduction(val){
    //console.log('updateReduction', val);
    //if (typeof this.compressor.reduction === 'float') {
      this.compressor.reduction = val;
    //} else {
      //this.compressor.reduction.value = val;
    //}
  }
  updateAttack(val){
    //console.log('updateAttack', val);
    this.compressor.attack.value = val;
  }
  updateRelease(val){
    //console.log('updateRelease', val);
    this.compressor.release.value = val;
  }
  connect(){
    this.source.disconnect(this.destination);
    this.source.connect(this.compressor);
    this.compressor.connect(this.destination);
  }
  disconnect(){
    this.source.disconnect(this.compressor);
    this.compressor.disconnect(this.destination);
    this.source.connect(this.destination);
  }
  toggleCompressor(on){
    //console.log('compressed',on);
    on ? this.connect() : this.disconnect();
  }
  compressorNode(){
    return this.compressor;
  }
}
