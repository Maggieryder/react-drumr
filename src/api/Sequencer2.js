export default class Sequencer {
  constructor(ctx){
    this.context = ctx;
    this.isPlaying = false;
    this.stepIndex = 0;
    this.nextNoteTime = 0.0;
    this.lookahead = 25.0;
    this.scheduleAhead = 0.1;
    this.timeWorker;

    this.sequences = [];
    this.tracks = [];
    this.tempo = 120; // options.tempo ||
    this.noteResolution = 16; //options.noteResolution ||
    this.swingFactor = 0;
    //this.updateParams(options);
  }
  nextNote(){
    let kMaxSwing = .08;
    //let secondsPerBeat = 60.0 / this.tempo; // length of beat
// this.nextNoteTime += this.secondsPerBeat() * .25; // without swing
    if (this.stepIndex % 2) {
      this.nextNoteTime += (0.25 - kMaxSwing * this.swingFactor) * this.secondsPerBeat();
    } else {
      this.nextNoteTime += (0.25 + kMaxSwing * this.swingFactor) * this.secondsPerBeat();
    }
    this.stepIndex = this.stepIndex === (this.noteResolution -1) ? 0 : ++this.stepIndex;
  }
  scheduleNote(step, time){
    let bars = document.querySelectorAll('.bar');

  // 	console.log(step)
    for (let i=0;i<this.sequences.length; i++){
      let noteClear = bars[i].querySelectorAll('.now')[0];
      //console.log('scheduleNote',noteClear);
      if (noteClear) noteClear.classList.toggle('now');
      let notes = bars[i].querySelectorAll('.note'),
      note = notes[step];
      if (this.sequences[i].steps[step]===1){
        this.tracks[i].triggerSample(time);
        note.classList.toggle('now');
        //console.log('scheduleNote',bars[i], notes);
      }
    }
  }

  startScheduler(){
    while (this.nextNoteTime < this.context.currentTime + this.scheduleAhead){
      this.scheduleNote(this.stepIndex, this.nextNoteTime);
      this.nextNote();
    }
  }
  init(){
    let self = this;
    this.timeWorker = new Worker('src/js/time-worker.js');
    this.timeWorker.onmessage = function(e) {
      if (e.data === 'tick') {
        console.log('tick!');
        self.startScheduler();
      } else {
        console.log('message: ' + e.data);
        self.timeWorker.postMessage({'interval':self.lookahead});
      }
    }
  }
  addTrack(track){
    this.tracks.push(track);
  }
  clearTracks(){
    /*let i = this.tracks.length;
    while (i--){
      this.tracks[i].pop();
    }*/
    this.tracks = [];
  }
  // e.g. use sequencer.updateParams({sequences});
  updateParams(obj){
    for (let prop in obj){
      //console.log( prop + ' :: ' + obj[prop]);
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
