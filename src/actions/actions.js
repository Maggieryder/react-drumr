import axios from 'axios'
//import { ... } from './types'
import {
  ASSIGN_KIT_OPTIONS,
  ASSIGN_KIT_ID,
  // Controller types
  UPDATE_TEMPO,
  UPDATE_SWING,
  UPDATE_BEAT_ID,
  UPDATE_BARS,
  UPDATE_RESOLTION,
  UPDATE_SIGNATURE,
  TOGGLE_BAR,
  TOGGLE_PLAY,
  // Tracks types
  ADD_TRACK,
  REMOVE_TRACK,
  MUTED_TRACKS,
  SOLOED_TRACKS,
  // Track types
  ASSIGN_NAME,
  ASSIGN_BUFFER,
  UPDATE_SEQUENCE,
  UPDATE_VOLUME,
  UPDATE_PAN,
  UPDATE_REVERB_SEND,
  UPDATE_DELAY_SEND,
  CLIP_TRACK,
  MUTE_TRACK,
  SOLO_TRACK,
  // Mixer types
  UPDATE_WETMIX,
  UPDATE_DRYMIX,
  UPDATE_MASTER_GAIN,
  MUTE_WETMIX,
  MUTE_DRYMIX,
  // Reverb types
  TOGGLE_REVERB,
  ASSIGN_REVERB_OPTIONS,
  ASSIGN_REVERB_ID,
  // Delay types
  TOGGLE_DELAY,
  UPDATE_DELAY_TIME,
  UPDATE_DELAY_FEEDBACK,
  UPDATE_DELAY_FREQUENCY,
  // Compressor types
  TOGGLE_COMPRESSOR,
  UPDATE_THRESHOLD,
  UPDATE_KNEE,
  UPDATE_RATIO,
  UPDATE_ATTACK,
  UPDATE_RELEASE
} from './types';

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

// Controller actions
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

export const updateResolution = (value) => {
  return {
    type: UPDATE_RESOLTION,
    value
  }
}
export const updateSignature = (value) => {
  return {
    type: UPDATE_SIGNATURE,
    value
  }
}

export const updateBeatId = (value) => {
  return {
    type: UPDATE_BEAT_ID,
    value
  }
}

export const updateBars = (value) => {
  return {
    type: UPDATE_BARS,
    value
  }
}

export const toggleBar = (id) => {
  return {
    type: TOGGLE_BAR,
    id
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
    track: { id, name, buffer }
  }
}

export const removeTrack = (id) => {
  return {
    type: REMOVE_TRACK,
    id// ES6 syntax - is same as id: id
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
    track: { id, name }
  }
}

export const assignTrackBuffer = ({ id, buffer }) => {
  return {
    type: ASSIGN_BUFFER,
    track: { id, buffer }
  }
}

export const updateTrackSequence = ({ id, sequence }) => {
  return {
    type: UPDATE_SEQUENCE,
    track: { id, sequence }
  }
}

export const updateTrackVolume = ({ id, volume }) => {
  return {
    type: UPDATE_VOLUME,
    track: { id, volume }
  }
}

export const updateTrackPan = ({ id, pan }) => {
  return {
    type: UPDATE_PAN,
    track: { id, pan }
  }
}

export const updateTrackReverbSend = ({ id, send }) => {
  return {
    type: UPDATE_REVERB_SEND,
    track: { id, send }
  }
}

export const updateTrackDelaySend = ({ id, send }) => {
  return {
    type: UPDATE_DELAY_SEND,
    track: { id, send }
  }
}

export const clipTrack = ({ id, clip }) => {
  return {
    type: CLIP_TRACK,
    track: { id, clip }
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
