import Tracks from './Tracks'
import Track from './Track'
import Mixer from './Mixer'
import Sequencer from './Sequencer'
import Reverb from './Reverb'
import Delay from './Delay'
import Compressor from './Compressor'
import Visualizer from './Visualizer'

import { initAudioCtx } from './context'

const CTX = initAudioCtx();
const SEQUENCER = new Sequencer(CTX);
const DELAY = new Delay(CTX);
const REVERB = new Reverb(CTX);
const MIXER = new Mixer(CTX);
const TRACKS = new Tracks();
const COMPRESSOR = new Compressor(CTX);
const VISUALIZER = new Visualizer(CTX);

export default class Drumr {

  constructor(){
    //const CTX = initAudioCtx();
    SEQUENCER.init();
    MIXER.addDelay(DELAY);
    MIXER.addReverb(REVERB);
    MIXER.addCompressor(COMPRESSOR);
  }

  loadBuffers(kit, callback){
    //console.log('LOAD BUFFERS', kit);
    let buffers = [],
    path = kit.path,
    voices = kit.voices;
    let samplesToLoad = voices.length -1;
    for (let i = 0;i<voices.length;i++){
      //buffers.push({name: voices[i].name})
      this.loadSample('/assets/audio/'+ path + voices[i].smple, function(buffer){
        // console.log('#######',buffer);
        buffers[i] = buffer;
        //console.log('samplesToLoad', samplesToLoad);
        samplesToLoad === 0 ? callback(buffers) : samplesToLoad --;
      });
    }
  }

  loadSample(url, callback) {
    const request = new XMLHttpRequest();
    //header('Access-Control-Allow-Origin: *');
    request.open('get', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
      CTX.decodeAudioData(request.response, function(buffer) {
        callback(buffer);
      },
      function(e){ alert("Error with decoding audio data", e ); });
    };
    request.send();
  }

  addTrack(id){
    console.log('drumr ADD TRACK id '+id)
    let track = new Track(CTX, id);
    TRACKS.addTrack(track)
    MIXER.addTrack(track)
    SEQUENCER.addTrack(track)
  }
  removeTrackWithId(id){
    console.log('drumr REMOVE TRACK id '+id)
    let track = new Track(CTX, id, SEQUENCER);
    TRACKS.removeTrackWithId(id)
    MIXER.removeTrackWithId(id)
    SEQUENCER.removeTrackWithId(id)
  }
  assignSample(id, buffer){
    //console.log('BUFFER for track ' + id +' is', buffer )
    console.log('TRACKS.tracks.filter(t => t.id===id )', TRACKS.tracks )
    let t = TRACKS.tracks[id]
    t.assignSample(buffer);
  }
  // SEQUENCER FUNCTIONS
  onNoteTap(id){
    console.log('drumr.onNoteTap id', id)
    console.log('SEQUENCER.running()', SEQUENCER.running())
    if (!SEQUENCER.running()){
      TRACKS.tracks[id].triggerSample(CTX.currentTime);
    }
    // SEQUENCER.updateSequence(obj.id, obj.barId, obj.seqId);
    //TRACKS.tracks[obj.id].updateSequence(obj.barId, obj.seqId);
    //SEQUENCER.updateParams({sequence});
    //sequenceNote(id,step);
  }

  // sequenceNote(index, step){
  //   sequences[index].steps[step] = sequences[index].steps[step]===0 ? 1 : 0;
  //   SEQUENCER.updateParams({sequences});
  //   console.log(index, 'sequence', sequences[index].steps);
  // }
  addTrackSequence(id, sequence){
    //console.log('drumr.initSequence', id, sequence)
    SEQUENCER.addTrackSequence(id, sequence)
    // TRACKS.track[id].updateSequence(sequence);


    // MIXER.addFX(REVERB,DELAY);
    // MIXER.addCompressor(COMPRESSOR);
    // assignTracks(buffers);
    // loadBuffers(LIB.kits[0], assignTracks);
  }
  togglePlay(){
    SEQUENCER.togglePlay();
  }
  updateSequence(id, sequence){
    SEQUENCER.updateSequence(id, sequence);
  }
  updateSwingFactor(value){
  	SEQUENCER.updateParams({swingFactor:value});
  }
  updateTempo(value){
    SEQUENCER.updateParams({tempo:value});
    DELAY.updateDelayTime(SEQUENCER.secondsPerBeat()*.5);
  }
  // MIXER FUNCTIONS
  updateGlobalVolume(value){
    MIXER.updateGlobalVolume(value);
  }
  updateDryVolume(value){
    MIXER.updateDryVolume(value);
  }
  updateWetVolume(value){
    MIXER.updateWetVolume(value);
  }
  toggleWetMute(){
    MIXER.toggleWetMute();
  }
  toggleDryMute(){
    MIXER.toggleDryMute();
  }
  // REVERB FUNCTIONS
  toggleReverb(){
    REVERB.toggleReverb(e);
  }
  updateReverbPreset(value){
    REVERB.loadImpulse(value);
  }
  updateReverbSend(index, value){
    MIXER.updateTrackReverb(index, value);
  }

  // DELAY FUNCTIONS
  toggleDelay(){
    DELAY.toggleDelay();
  }
  updateDelaySend(index, value){
    MIXER.updateTrackDelay(index, value);
  }
  updateDelayTime(value){
    DELAY.updateDelayTime(SEQUENCER.secondsPerBeat()*value);
  }
  updateFeedbackGain(value){
    DELAY.updateFeedbackGain(val/100);
  }
  updateFrequency(value){
    DELAY.updateFrequency(value);
  }
  // COMPRESSOR FUNCTIONS
  toggleCompressor(){
    COMPRESSOR.toggleCompressor();
  }
  updateThreshold(value){
    COMPRESSOR.updateThreshold(value);
  }
  updateKnee(value){
    COMPRESSOR.updateKnee(value);
  }
  updateRatio(value){
    COMPRESSOR.updateRatio(value);
  }
  updateAttack(value){
    COMPRESSOR.updateAttack(value);
  }
  updateRelease(value){
    COMPRESSOR.updateRelease(value);
  }

  // TRACK FUNCTIONS
  toggleTrackMute(id){
    MIXER.toggleTrackMute(id);
  }
  toggleTrackSolo(id){
    MIXER.toggleTrackSolo(id);
  }
  updateTrackVolume(index, value){
    MIXER.updateTrackVolume(index, value);
  }
  updateTrackPan(index, value){
    MIXER.updateTrackPan(index, value);
  }
  updateKit(){
    // TODO load drum samples dynamically
  }

}
