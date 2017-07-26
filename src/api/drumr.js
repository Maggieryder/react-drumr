import Tracks from './Tracks'
import Track from './Track'
import Mixer from './Mixer'
import Sequencer from './Sequencer'
import Reverb from './Reverb'
import Delay from './Delay'
import Compressor from './Compressor'
import Visualizer from './Visualizer'

import { initAudioCtx } from './context'

import * as Types from '../actions/types'

const CTX = initAudioCtx();
const SEQUENCER = new Sequencer(CTX);
const DELAY = new Delay(CTX);
const REVERB = new Reverb(CTX);
const MIXER = new Mixer(CTX);
const TRACKS = new Tracks();
const COMPRESSOR = new Compressor(CTX);
const VISUALIZER = new Visualizer(CTX);

export default class Drumr {

  constructor(store){

    this.store = store;
    SEQUENCER.init(store);
    MIXER.addDelay(DELAY);
    MIXER.addReverb(REVERB);
    MIXER.addCompressor(COMPRESSOR);
    DELAY.setStore(store);
    REVERB.setStore(store)
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
    // console.log('drumr ADD TRACK id '+id)
    let track = new Track(CTX, id, this.store);
    TRACKS.addTrack(track)
    MIXER.addTrack(track)
    SEQUENCER.addTrack(track)
  }
  removeTrackWithId(id){
    console.log('drumr REMOVE TRACK id '+id)
    TRACKS.removeTrackWithId(id)
    MIXER.removeTrackWithId(id)
    SEQUENCER.removeTrackWithId(id)
  }
  assignSample(id, buffer){
    //console.log('BUFFER for track ' + id +' is', buffer )
    // console.log('TRACKS.tracks.filter(t => t.id===id )', TRACKS.tracks[id] )
    let t = TRACKS.tracks[id]
    t.assignSample(buffer);
  }
  // SEQUENCER FUNCTIONS
  onNoteTap(id){
    // console.log('drumr.onNoteTap id', id)
    // console.log('SEQUENCER.running()', SEQUENCER.running())
    if (!SEQUENCER.running()){
      TRACKS.tracks[id].triggerSample(CTX.currentTime);
    }
  }

  addTrackSequence(id, sequence){
    //console.log('drumr.initSequence', id, sequence)
    SEQUENCER.addTrackSequence(id, sequence)
  }
  // togglePlay(){
  //   this.store.dispatch({type:Types.TOGGLE_PLAY })
  //   SEQUENCER.togglePlay();
  // }
  updateSequence(id, sequence){
    SEQUENCER.updateSequence(id, sequence);
  }
  // updateSwing(value){
  //   // this.store.dispatch({type:Types.UPDATE_SWING, value: value })
  // 	SEQUENCER.updateParams({swing:value/100});
  // }
  // updateTempo(value){
  //   // this.store.dispatch({type:Types.UPDATE_TEMPO, value: value })
  //   SEQUENCER.updateParams({tempo:value});
  //   DELAY.updateDelayTime(SEQUENCER.secondsPerBeat()*.5);
  // }
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
  // toggleReverb(){
  //   REVERB.toggleReverb();
  // }
  updateReverbPreset(value){
    REVERB.loadImpulse(value);
  }

  // DELAY FUNCTIONS
  // toggleDelay(){
  //   DELAY.toggleDelay();
  // }
  // updateDelayTime(value){
  //   console.log('updateDelayTime', value )
  //   DELAY.updateDelayTime(SEQUENCER.secondsPerBeat()*value);
  // }
  // updateFeedbackGain(value){
  //   console.log('updateFeedbackGain', value )
  //   DELAY.updateFeedbackGain(value/100);
  // }
  // updateFrequency(value){
  //   console.log('updateFrequency', value )
  //   DELAY.updateFrequency(value);
  // }
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
  updateDelaySend(index, value){
    MIXER.updateTrackDelay(index, value);
  }
  updateReverbSend(index, value){
    MIXER.updateTrackReverb(index, value);
  }

}
