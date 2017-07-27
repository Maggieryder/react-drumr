export default class Compressor {
  constructor(ctx){
    this.compressor = ctx.createDynamicsCompressor();
    this.active = false;
    this.source;
    this.output;
    this.store;
  }
  setStore( store ){
    this.store = store;
    this.store.subscribe(this.updateState.bind(this))
    this.updateState()
  }
  updateState(){
    let { compressor } = this.store.getState();
    let { active, threshold, knee, ratio, attack, release } = compressor;
    if ( this.compressor.threshold.value !== threshold ) this.updateThreshold( threshold );
    if ( this.compressor.knee.value !== knee ) this.updateKnee( knee );
    if ( this.compressor.ratio.value !== ratio ) this.updateRatio( ratio );
    if ( this.compressor.attack.value !== attack ) this.updateAttack( attack );
    if ( this.compressor.release.value !== release ) this.updateRelease( release );
    if ( this.active !== active ) this.toggleActive(active);
  }
  init( source, output ){
    this.source = source;
    this.output = output;
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
  toggleActive(active){
    this.active ? this.disconnect() : this.connect();
    this.active = active;
  }
  compressorNode(){
    return this.compressor;
  }
}
