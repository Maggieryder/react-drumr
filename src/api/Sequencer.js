import * as Types from '../actions/types'

export default class Sequencer {
  constructor(ctx){
    this.context = ctx;
    this.isPlaying = false;
    this.numBars = 2;
    this.barIndex = 0;
    this.stepIndex = 0;
    this.nextNoteTime = 0.0;
    this.lookahead = 25.0;
    this.scheduleAhead = 0.1;
    this.timeWorker;
    this.sequences = [];
    this.tracks = [];
    this.tempo = 96;
    this.noteResolution = 16;
    this.swingFactor = 0;
    this.store;
    //this.updateParams(options);
  }
  nextNote(){
    let kMaxSwing = .08;
    if (this.stepIndex % 2) {
      this.nextNoteTime += (0.25 - kMaxSwing * this.swingFactor) * this.secondsPerBeat();
    } else {
      this.nextNoteTime += (0.25 + kMaxSwing * this.swingFactor) * this.secondsPerBeat();
    }
    if (this.stepIndex === (this.noteResolution -1)){
      // console.log('nextNote', this.barIndex, this.stepIndex)
      this.barIndex = this.barIndex === (this.numBars - 1) ? 0 : ++this.barIndex;
      this.store.dispatch({type:Types.TOGGLE_BAR, id: this.barIndex })
      this.stepIndex = 0;
    } else {
      this.stepIndex++;
    }
  }
  scheduleNote(step, time){
    // console.log(step)
    for (let i=0;i<this.sequences.length; i++){
      let bars = this.sequences[i].sequence
      for (let j=0;j<bars.length;j++){
        if (j===this.barIndex && bars[j][step]===1){
          this.tracks[i].triggerSample(time);
        }
      }
    }
    this.store.dispatch({type:Types.UPDATE_STEP_ID, value: (this.barIndex*this.noteResolution)+ step})
  }

  startScheduler(){
    // console.log('startScheduler')
    while (this.nextNoteTime < this.context.currentTime + this.scheduleAhead){
      this.scheduleNote(this.stepIndex, this.nextNoteTime);
      this.nextNote();
    }
  }
  init(store){
    this.store = store;
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
  addTrack(track){
    this.tracks.push(track);
    // console.log('SEQ TRACKS',this.tracks)
  }
  removeTrackWithId(id){
    this.tracks = this.tracks.filter(t => t.id !== id)
    // console.log('SEQ TRACKS',this.tracks)
    this.removeTrackSequenceWithId(id);
  }
  addTrackSequence(id, sequence){
    // console.log('SEQUENCER addTrackSequence', id, sequence)
    this.sequences.push({id, sequence});
    // console.log(this.sequences)
  }
  removeTrackSequenceWithId(id){
    // console.log('SEQUENCER removeTrackSequence', id)
    this.sequences = this.sequences.filter(s => !s.id == id)
    // console.log(this.sequences)
  }
  updateSequence(id, sequence){
    // console.log('SEQUENCER updateSequence', id, sequence)
    // console.log('SEQUENCER this.sequences[id]', this.sequences)
    this.sequences[id].sequence = sequence;
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
    return 60.0 / this.tempo;
  }
  togglePlay(){
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) { // start playing
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
