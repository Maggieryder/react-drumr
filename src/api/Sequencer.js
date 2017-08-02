import * as Types from '../actions/types'

const kMaxSwing = .08;

export default class Sequencer {
  constructor(ctx){
    this.context = ctx;
    this.isPlaying = false;
    this.barIndex = 0;
    this.stepIndex = 0;
    this.nextNoteTime = 0.0;
    this.lookahead = 25.0;
    this.scheduleAhead = 0.1;
    this.timeWorker;
    this.sequences = [];
    this.tracks = [];
    this.store;
  }
  nextNote(){
    let { controller } = this.store.getState();
    let { swing, resolution, numBars, barId, stepId } = controller;
    let swingFactor = kMaxSwing * swing/100;
    if (this.stepIndex % 2) {
      this.nextNoteTime += (0.25 - swingFactor) * this.secondsPerBeat();
    } else {
      this.nextNoteTime += (0.25 + swingFactor) * this.secondsPerBeat();
    }
    if (this.stepIndex === (resolution -1)){
      // console.log('nextNote', this.barIndex, this.stepIndex)
      this.barIndex = this.barIndex === (numBars - 1) ? 0 : ++this.barIndex;
      this.store.dispatch({type:Types.UPDATE_BAR_ID, value: this.barIndex })
      this.stepIndex = 0;
    } else {
      this.stepIndex++;
    }
  }
  scheduleNote(step, time){
    let { controller } = this.store.getState();
    let { resolution, barId } = controller;
    // console.log(step)
    for (let i=0;i<this.sequences.length; i++){
      let bars = this.sequences[i].sequence
      for (let j=0;j<bars.length;j++){
        if (j===barId && bars[j][step]===1){
          this.tracks[i].triggerSample(time);
        }
      }
    }
    this.store.dispatch({type:Types.UPDATE_STEP_ID, value: (barId*resolution) + step})
  }

  startScheduler(){
    // console.log('startScheduler')
    while (this.nextNoteTime < this.context.currentTime + this.scheduleAhead){
      this.scheduleNote(this.stepIndex, this.nextNoteTime);
      this.nextNote();
    }
  }

  updateState(){
    // this.store = store;
    let { controller, sequences } = this.store.getState();
    // console.log('updateState', sequences);
    // let { tempo, swing, numBars, barId, stepId, resolution, signature, isPlaying } = controller;
    if ( this.sequences !== sequences.byHash ) {
      this.sequences = sequences.byHash;
      console.log('########### this.sequences !== sequences.byHash', sequences.byHash);
    }

    // if (this.tempo !== tempo) this.updateParams({'tempo':tempo})
    // if (this.swing !== swing/100) this.updateParams({'swing':swing/100})
    // if (this.isPlaying !== isPlaying) this.updateParams({'isPlaying':isPlaying})
    if (this.isPlaying !== controller.isPlaying) this.togglePlay(controller.isPlaying)
    // if (this.numBars !== numBars) this.updateParams({'numBars':numBars})
    // if (this.barIndex !== barId) this.updateParams({'barIndex':barId})
    // if (this.stepIndex !== stepId) this.updateParams({'stepIndex':stepId})
    // if (this.noteResolution !== resolution) this.updateParams({'noteResolution':resolution})
    // if (this.timeSignature !== signature) this.updateParams({'timeSignature':signature})
  }

  init(store){
    this.store = store;
    this.store.subscribe(this.updateState.bind(this))
    this.updateState()
    let self = this;
    this.timeWorker = new Worker('./time-worker.js');
    this.timeWorker.onmessage = function(e) {
      if (e.data === 'tick') {
        // console.log('tick!');
        self.startScheduler();
      } else {
        console.log('message: ' + e.data);
        self.timeWorker.postMessage({'interval':self.lookahead});
      }
    }
  }
  // tracks
  setTracks(tracks){
    tracks.forEach((track) => {
      this.addTrackSequence(track.id);
    })
    this.tracks = tracks;
    // console.log('SEQ setTracks', this.tracks )
  }
  addTrack(track){
    this.tracks.push(track);
    this.addTrackSequence(track.id);
  }
  addTrackSequence(id){
    let { controller } = this.store.getState();
    let bars = []
    for (let i = 0; i < controller.numBars; i++){
      bars.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    }
    // this.sequences.push({id, sequence});
    let track = {id:id, sequence: bars};
    // this.store.dispatch({type:Types.CLEAR_SEQUENCES });
    this.store.dispatch({type:Types.ADD_SEQUENCE, track });
  }
  removeTrackSequenceWithId(id){
    // console.log('SEQUENCER removeTrackSequence', id)
    // this.sequences = this.sequences.filter(s => !s.id == id)
    this.store.dispatch({type:Types.CLEAR_SEQUENCE, id });
    // console.log(this.sequences)
  }
  updateSequence(id, sequence){
    // console.log('SEQUENCER updateSequence', id, sequence)
    this.sequences[id].sequence = sequence;
    console.log('>>>>>>SEQUENCER this.sequences[id]', this.sequences[id].sequence)
    // let t = this.sequences.filter(s => s.id == id);
    // console.log(t[0])
    // return t[0].sequence.map((arr, b) => b === barId
    //                   ?
    //                   arr.map((value, i) => i === seqId
    //                     ? value === 0 ? 1 : 0
    //                     : value)
    //                   : arr );
    // console.log(this.sequences)
  }
  clearSequences(){
    console.log('SEQUENCER clearSequences')
    this.sequences = [];
  }
  updateParams(obj){
    for (let prop in obj){
      console.log( prop + ' :: ' + obj[prop]);
      this[prop]= obj[prop];
    }
  }
  secondsPerBeat(str){
    let { controller } = this.store.getState();
    return 60.0 / controller.tempo;
  }
  togglePlay(isPlaying){
    this.isPlaying = isPlaying;
    if (this.isPlaying) {
        this.barIndex = 0;
        this.store.dispatch({type:Types.UPDATE_BAR_ID, value: 0 })
        this.stepIndex = 0;
        this.nextNoteTime = this.context.currentTime;
        this.timeWorker.postMessage('start');
        return 'stop';
    } else {
        this.timeWorker.postMessage('stop');
        return 'play';
    }
  }
  running(){
    return this.isPlaying;
  }
}
