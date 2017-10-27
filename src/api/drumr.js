import Tracks from './Tracks'
import Track from './Track'
import Mixer from './Mixer'
import Sequencer from './Sequencer'
import Reverb from './Reverb'
import Delay from './Delay'
import Compressor from './Compressor'
import Visualizer from './Visualizer'

import { initAudioCtx } from './AudioContext'

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
    this.store.subscribe(this.updateState.bind(this))
    SEQUENCER.init(store);
    MIXER.setStore(store);
    MIXER.addDelay(DELAY);
    MIXER.addReverb(REVERB);
    MIXER.addCompressor(COMPRESSOR);
    DELAY.setStore(store);
    REVERB.setStore(store);
    COMPRESSOR.setStore(store);
  }

  updateState(){
    let { tracks } = this.store.getState();
    if ( tracks && tracks.length !== TRACKS.getTracks().length ) this.updateTracks(tracks);
  }

  updateTracks(tracks){
    console.log('updateTracks')
    // TRACKS.clearTracks();
    tracks.forEach((track) => {
      let t = new Track(CTX, track.id, this.store);
      TRACKS.addTrack(t);
      // MIXER.addTrack(t)
      // SEQUENCER.addTrack(t);
    })
    MIXER.setTracks(TRACKS.getTracks())
    SEQUENCER.setTracks(TRACKS.getTracks())
    console.log('TRACKS.getTracks()', TRACKS.getTracks())
  }
  // SEQUENCER FUNCTIONS
  onStepTap(id){
    console.log('drumr.onStepTap id', id)
    let { controller } = this.store.getState();
    // console.log('SEQUENCER.running()', SEQUENCER.running())
    if (!controller.isPlaying){
      TRACKS.tracks[id].triggerSample(CTX.currentTime);
    }
  }
  // addTrackSequence(id, sequence){
  //   console.log('drumr.initSequence', id, sequence)
  //   SEQUENCER.addTrackSequence(id, sequence)
  // }
  // updateSequence(id, sequence){
  //   console.log('drumr.updateSequence', id, sequence)
  //   SEQUENCER.updateSequence(id, sequence);
  // }

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
}
