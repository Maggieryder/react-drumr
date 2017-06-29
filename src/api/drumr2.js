import Sample from './Sample2'
import Track from './Track2'
import Mixer from './Mixer2'
import Sequencer from './Sequencer2'
import Reverb from './Reverb2'
import Delay from './Delay2'
import Compressor from './Compressor2'
import Visualizer from './Visualizer'


const CTX =

class Drumr {
  constructor(){

  }
  initAudioCtx(){
    try {
      // Fix up for prefixing
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      const context = new AudioContext();
      console.log('Web Audio API is WORKING!!!')
      //console.log(context.sampleRate); // → 44100
      //console.log(context.destination.channelCount); // → 2
      //console.log(context.currentTime); // → 1182.5980952380953
      return context;
    }
    catch(e) {
      alert('Web Audio API is not supported in this browser');
    }
  }

}
