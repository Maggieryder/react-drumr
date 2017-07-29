import * as Types from '../actions/types'

export default class AudioProcessor {
  constructor(ctx, id, store){
    this.store = store;
    this.id = id;
    this.input;
    this.output;
    this.processor = ctx.createScriptProcessor(2048, 1, 1);
    this.lastClipTime;
  }
  init( input, output ){
    let self = this;
    this.input = input;
    this.output = output;
    this.processor.onaudioprocess = (e) => { self.processAudio(e) };
    this.render();
  }
  processAudio(e) {
    // console.log('processAudio', e);
    let leftBuffer = e.inputBuffer.getChannelData(0);
    this.checkClipping(leftBuffer);
    /*
    var rightBuffer = e.inputBuffer.getChannelData(1);
    this.checkClipping(rightBuffer);
    */
  }
  checkClipping(buffer) {
    let isClipping = false;
    // Iterate through buffer to check if any of the |values| exceeds 1.
    for (var i = 0; i < buffer.length; i++) {
      var absValue = Math.abs(buffer[i]);
      if (absValue >= .33) {
        isClipping = true;
        break;
      }
    }
    //console.log('isClipping', isClipping);
    if (isClipping) {
      this.lastClipTime = new Date();
    }
  }
  render() {
    let now = new Date();
    let didRecentlyClip = (now - this.lastClipTime) < 100;
    let track = {id: this.id, clip: didRecentlyClip };
    this.store.dispatch({type:Types.CLIP_TRACK, track })
    // clipTrack({id:this.id,clip:didRecentlyClip})
    // requestAnimationFrame(() => { this.render() });
  }
  connect(){
    this.input.connect(this.processor);
    this.processor.connect(this.output);
  }
  disconnect(){
    this.input.disconnect(this.processor);
    this.processor.disconnect(this.output);
  }
}
