

export default class Track {
  constructor(ctx, id, store){
    this.store = store;
    this.store.subscribe(this.updateState.bind(this));
    this.id = id;
    this.panner = ctx.createPanner();
    this.panner.panningModel = 'equalpower';
    this.panner.distanceModel = 'linear';
    this.panner.rolloffFactor = 0;
    this.panner.coneOuterAngle = 0;
    this.panner.positionX.value = -6; // hack to force first time refresh
    /*this.panner.refDistance = 1;
    this.panner.maxDistance = 10000;
    this.panner.rolloffFactor = 0;
    this.panner.coneInnerAngle = 360;
    this.panner.coneOuterAngle = 0;
    this.panner.coneOuterGain = 0;*/
  }
  updateState(){
    let { tracks } = this.store.getState();
    let trackData = tracks[this.id];
    if (trackData){
      if (Math.round(this.getPan()*5) !== trackData.pan ) this.updatePan(trackData.pan/5);
    }
  }
  updatePan(value){
    // console.log('Track '+this.id+' pan', value )
    let xpos = value,
    zpos = 1 - Math.abs(xpos);
    this.panner.setPosition(xpos, 0, zpos);
  }
  getPan(){
    return this.panner.positionX.value;
  }
  node(){
    return this.panner;
  }
}
