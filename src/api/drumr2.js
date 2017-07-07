import Sample from './Sample2'
import Track from './Track2'
import Mixer from './Mixer2'
import Sequencer from './Sequencer2'
import Reverb from './Reverb2'
import Delay from './Delay2'
import Compressor from './Compressor2'
import Visualizer from './Visualizer'

import { initAudioCtx } from './context'

const CTX = initAudioCtx();

export default class Drumr {

  constructor(){
    //const CTX = initAudioCtx();
    const SEQUENCER = new Sequencer(CTX);
    const DELAY = new Delay(CTX);
    const REVERB = new Reverb(CTX);
    const MIXER = new Mixer(CTX);
    const COMPRESSOR = new Compressor(CTX);
    const VISUALIZER = new Visualizer(CTX);
  }

  init({sequences}){
    SEQUENCER.updateParams(sequences);
    SEQUENCER.init();
    MIXER.addFX(REVERB,DELAY);
    MIXER.addCompressor(COMPRESSOR);
    //assignTracks(buffers);
    loadBuffers(LIB.kits[0], assignTracks);
  }

  loadBuffers(kit, callback){
    console.log('KITS', kit);
    let buffers = [],
    path = kit.path,
    voices = kit.voices;
    let samplesToLoad = voices.length -1;
    for (let i = 0;i<voices.length;i++){
      buffers[i] = {name:voices[i].name,buffer:{}};
      this.loadSample(CTX, '/assets/audio/'+ path + voices[i].smple, function(buffer){
        //console.log(buffer);
        buffers[i].buffer = buffer;
        //console.log('samplesToLoad', samplesToLoad);
        samplesToLoad === 0 ? callback(buffers) : samplesToLoad --;
      });
    }
  }
  loadSample(context, url, callback) {
    const request = new XMLHttpRequest();
    //header('Access-Control-Allow-Origin: *');
    request.open('get', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
      context.decodeAudioData(request.response, function(buffer) {
        callback(buffer);
      },
      function(e){ alert("Error with decoding audio data", e ); });
    };
    request.send();
  }

  assignTracks(buffers){
    console.log('KIT BUFFERS LOADED');
    // MIXER.clearTracks();
    // SEQUENCER.clearTracks();
    // for (let i= 0; i<buffers.length;i++){
    //   let track = new Track(CTX);
    //   track.assignId(i);
    //   track.assignSample(buffers[i].buffer);
    //   track.assignInstrumentName(i, buffers[i].name);
    //   MIXER.addTrack(track);
    //   SEQUENCER.addTrack(track);
    // }
  }

  // SEQUENCER FUNCTIONS
  onNoteTap(id){
    if (!SEQUENCER.running())
      MIXER.tracks[id].triggerSample(CTX.currentTime);
    //sequenceNote(id,step);
  }
  updateSequences(sequences){
    SEQUENCER.updateParams(sequences);
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
  // REVERB FUNCTIONS
  toggleReverb(){
    REVERB.toggleReverb(e);
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
  toggleCompressor(){
    COMPRESSOR.toggleCompressor();
  }
  // TRACK FUNCTIONS
  onMute(e){
    e.preventDefault();
    let $target = $(this).parent().parent().parent();
    switch ($target.attr('id')){
      case 'wetmix':
      MIXER.toggleWetMute(e);
      break;
      case 'drymix':
      MIXER.toggleDryMute(e);
      break;
      default:
      MIXER.toggleTrackMute($target.index());
      break;
    }
  }
  onSolo(index){
    MIXER.toggleTrackSolo(index);
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
