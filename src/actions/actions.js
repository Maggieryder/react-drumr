import axios from 'axios'
import { ... } from './types'
//import { * } from './types';

// Kit types
export const assignKitOptions = (options) => {
  return {
    type: ASSIGN_KIT_OPTIONS,
    options// ES6 syntax - is same as options: options
  }
}

export const assignKitId = (id) => {
  return {
    type: ASSIGN_KIT_ID,
    id// ES6 syntax - is same as id: id
  }
}

// Sequencer actions
export const updateTempo = (value) => {
  return {
    type: UPDATE_TEMPO,
    value // ES6 syntax - is same as tempo: tempo
  }
}

export const updateSwing = (value) => {
  return {
    type: UPDATE_SWING,
    value // ES6 syntax - is same as swing: swing
  }
}

export const togglePlay = () => {
  return {
    type: TOGGLE_PLAY
  }
}
// Tracks actions
export const addTrack = ({ id, name, buffer }) => {
  return {
    type: ADD_TRACK,
    { id, name, buffer } // ES6 syntax
  }
}

export const removeTrack = (index) => {
  return {
    type: REMOVE_TRACK,
    index// ES6 syntax - is same as id: id
  }
}

export const soloTracks = () => {
  return {
    type: SOLO_TRACKS,
  }
}
// Track actions
export const assignTrackName = ({ id, name }) => {
  return {
    type: ASSIGN_NAME,
    { id, name } // ES6 syntax
  }
}

export const assignTrackBuffer = ({ id, buffer }) => {
  return {
    type: ASSIGN_BUFFER,
    { id, buffer }
  }
}

export const updateTrackSequence = ({ id, sequence }) => {
  return {
    type: UPDATE_SEQUENCE,
    { id, sequence }
  }
}

export const updateTrackVolume = ({ id, volume }) => {
  return {
    type: UPDATE_VOLUME,
    { id, volume }
  }
}

export const updateTrackPan = ({ id, pan }) => {
  return {
    type: UPDATE_PAN,
    { id, pan }
  }
}

export const updateTrackReverbSend = ({ id, send }) => {
  return {
    type: UPDATE_REVERB_SEND,
    { id, send }
  }
}

export const updateTrackDelaySend = ({ id, send }) => {
  return {
    type: UPDATE_DELAY_SEND,
    { id, send }
  }
}

export const muteTrack = (id) => {
  return {
    type: MUTE_TRACK,
    id
  }
}

export const soloTrack = (id) => {
  return {
    type: SOLO_TRACK,
    id
  }
}
// Mixer actions
export const updateWetMix = (value) => {
  return {
    type: UPDATE_WETMIX,
    value// ES6 syntax - is same as value: value
  }
}

export const updateDryMix = (value) => {
  return {
    type: UPDATE_DRYMIX,
    value// ES6 syntax - is same as value: value
  }
}

export const updateMasterVolume = (value) => {
  return {
    type: UPDATE_MASTER_GAIN,
    value// ES6 syntax - is same as value: value
  }
}

export const muteWetMix = () => {
  return {
    type: MUTE_WETMIX
  }
}

export const muteDryMix = () => {
  return {
    type: MUTE_DRYMIX
  }
}

// Delay actions
export const toggleDelay = () => {
  return {
    type: TOGGLE_DELAY
  }
}

export const updateDelayTime = (value) => {
  return {
    type: UPDATE_DELAY_TIME,
    value// ES6 syntax - is same as value: value
  }
}

export const updateDelayFeedback = (value) =>{
  return {
    type: UPDATE_DELAY_FEEDBACK,
    value// ES6 syntax - is same as value: value
  }
}

export const updateDelayFrequency = (value) => {
  return {
    type: UPDATE_DELAY_FREQUENCY,
    value// ES6 syntax - is same as value: value
  }
}

// Reverb actions
export const toggleReverb = () => {
  return {
    type: TOGGLE_REVERB
  }
}

export const assignReverbOptions = (options) => {
  return {
    type: ASSIGN_REVERB_OPTIONS,
    options// ES6 syntax - is same as options: options
  }
}

export const assignReverbId = (id) => {
  return {
    type: ASSIGN_REVERB_ID,
    id// ES6 syntax - is same as id: id
  }
}

// Compressor actions
export const toggleCompressor = () => {
  return {
    type: TOGGLE_COMPRESSOR
  }
}

export const updateThreshold = (value) => {
  return {
    type: UPDATE_THRESHOLD,
    value// ES6 syntax - is same as value: value
  }
}

export const updateKnee = (value) => {
  return {
    type: UPDATE_KNEE,
    value// ES6 syntax - is same as value: value
  }
}

export const updateRatio = (value) => {
  return {
    type: UPDATE_RATIO,
    value// ES6 syntax - is same as value: value
  }
}

export const updateAttack = (value) => {
  return {
    type: UPDATE_ATTACK,
    value// ES6 syntax - is same as value: value
  }
}

export const updateRelease = (value) => {
  return {
    type: UPDATE_RELEASE,
    value// ES6 syntax - is same as value: value
  }
}
