import axios from 'axios'
import * as Types from './types'

// Kit types
export const assignKitOptions = (options) => {
  return {
    type: Types.ASSIGN_KIT_OPTIONS,
    options// ES6 syntax - is same as options: options
  }
}

export const assignKitId = (id) => {
  //console.log('ASSIGN KIT ID!!', id)
  return {
    type: Types.ASSIGN_KIT_ID,
    id// ES6 syntax - is same as id: id
  }
}

// Controller actions
export const updateTempo = (value) => {
  //console.log('UPDATE TEMPO!!', value)
  return {
    type: Types.UPDATE_TEMPO,
    value // ES6 syntax - is same as tempo: tempo
  }
}

export const updateSwing = (value) => {
  //console.log('UPDATE SWING!!', value)
  return {
    type: Types.UPDATE_SWING,
    value // ES6 syntax - is same as swing: swing
  }
}

export const updateResolution = (value) => {
  return {
    type: Types.UPDATE_RESOLTION,
    value
  }
}
export const updateSignature = (value) => {
  return {
    type: Types.UPDATE_SIGNATURE,
    value
  }
}

export const updateBeatId = (value) => {
  return {
    type: Types.UPDATE_BEAT_ID,
    value
  }
}

export const updateBars = (value) => {
  return {
    type: Types.UPDATE_BARS,
    value
  }
}

export const toggleBar = (id) => {
  //console.log('TOGGLE BAR!! id =', id)
  return {
    type: Types.TOGGLE_BAR,
    id
  }
}

export const togglePlay = () => {
  //console.log('TOGGLE PLAY!!')
  return {
    type: Types.TOGGLE_PLAY
  }
}
// Tracks actions
export const addTrack = ({ id, name, buffer }) => {
  return {
    type: Types.ADD_TRACK,
    track: { id, name, buffer }
  }
}

export const removeTrack = (id) => {
  return {
    type: Types.REMOVE_TRACK,
    id// ES6 syntax - is same as id: id
  }
}

export const soloTracks = () => {
  return {
    type: Types.SOLO_TRACKS,
  }
}
// Track actions
export const assignTrackName = ({ id, name }) => {
  return {
    type: Types.ASSIGN_NAME,
    track: { id, name }
  }
}

export const assignTrackBuffer = ({ id, buffer }) => {
  return {
    type: Types.ASSIGN_BUFFER,
    track: { id, buffer }
  }
}

export const updateTrackSequence = ({ id, sequence }) => {
  console.log('UPDATE_SEQUENCE!!', { id, sequence } )
  return {
    type: Types.UPDATE_SEQUENCE,
    track: { id, sequence }
  }
}

export const updateTrackVolume = ({ id, volume }) => {
  console.log('UPDATE_VOLUME!!', { id, volume } )
  return {
    type: Types.UPDATE_VOLUME,
    track: { id, volume }
  }
}

export const updateTrackPan = ({ id, pan }) => {
  console.log('UPDATE_PAN!!', { id, pan } )
  return {
    type: Types.UPDATE_PAN,
    track: { id, pan }
  }
}

export const updateTrackReverbSend = ({ id, send }) => {
  console.log('UPDATE_REVERB_SEND!!', { id, send } )
  return {
    type: Types.UPDATE_REVERB_SEND,
    track: { id, send }
  }
}

export const updateTrackDelaySend = ({ id, send }) => {
  console.log('UPDATE_DELAY_SEND!!', { id, send } )
  return {
    type: Types.UPDATE_DELAY_SEND,
    track: { id, send }
  }
}

export const clipTrack = ({ id, clip }) => {
  console.log('CLIP_TRACK!!', id, clip )
  return {
    type: Types.CLIP_TRACK,
    track: { id, clip }
  }
}

export const muteTrack = (id) => {
  console.log('MUTE_TRACK!!', id)
  return {
    type: Types.MUTE_TRACK,
    id
  }
}

export const soloTrack = (id) => {
  console.log('SOLO_TRACK!!', id)
  return {
    type: Types.SOLO_TRACK,
    id
  }
}
// Mixer actions
export const updateWetMix = (value) => {
  //console.log('UPDATE_WETMIX!!', value)
  return {
    type: Types.UPDATE_WETMIX,
    value// ES6 syntax - is same as value: value
  }
}

export const updateDryMix = (value) => {
  //console.log('UPDATE_DRYMIX!!', value)
  return {
    type: Types.UPDATE_DRYMIX,
    value// ES6 syntax - is same as value: value
  }
}

export const updateMasterVolume = (value) => {
  //console.log('UPDATE_MASTER_GAIN!!', value)
  return {
    type: Types.UPDATE_MASTER_GAIN,
    value// ES6 syntax - is same as value: value
  }
}

export const muteWetMix = () => {
  //console.log('MUTE_WETMIX!!')
  return {
    type: Types.MUTE_WETMIX
  }
}

export const muteDryMix = () => {
  //console.log('MUTE_DRYMIX!!')
  return {
    type: Types.MUTE_DRYMIX
  }
}

// Delay actions
export const toggleDelay = () => {
  //console.log('TOGGLE_DELAY!!')
  return {
    type: Types.TOGGLE_DELAY
  }
}

export const updateDelayTime = (value) => {
  //console.log('UPDATE_DELAY_TIME!!', value)
  return {
    type: Types.UPDATE_DELAY_TIME,
    value// ES6 syntax - is same as value: value
  }
}

export const updateDelayFeedback = (value) =>{
  //console.log('UPDATE_DELAY_FEEDBACK!!', value)
  return {
    type: Types.UPDATE_DELAY_FEEDBACK,
    value// ES6 syntax - is same as value: value
  }
}

export const updateDelayFrequency = (value) => {
  //console.log('UPDATE_DELAY_FREQUENCY!!', value)
  return {
    type: Types.UPDATE_DELAY_FREQUENCY,
    value// ES6 syntax - is same as value: value
  }
}

// Reverb actions
export const toggleReverb = () => {
  //console.log('TOGGLE_REVERB!!')
  return {
    type: Types.TOGGLE_REVERB
  }
}

export const assignReverbOptions = (options) => {
  return {
    type: Types.ASSIGN_REVERB_OPTIONS,
    options// ES6 syntax - is same as options: options
  }
}

export const assignReverbId = (id) => {
  console.log('ASSIGN_REVERB_ID!!', id)
  return {
    type: Types.ASSIGN_REVERB_ID,
    id// ES6 syntax - is same as id: id
  }
}

// Compressor actions
export const toggleCompressor = () => {
  //console.log('TOGGLE_COMPRESSOR!!')
  return {
    type: Types.TOGGLE_COMPRESSOR
  }
}

export const updateThreshold = (value) => {
  //console.log('UPDATE_THRESHOLD!!', value)
  return {
    type: Types.UPDATE_THRESHOLD,
    value// ES6 syntax - is same as value: value
  }
}

export const updateKnee = (value) => {
  //console.log('UPDATE_KNEE!!', value)
  return {
    type: Types.UPDATE_KNEE,
    value// ES6 syntax - is same as value: value
  }
}

export const updateRatio = (value) => {
  //console.log('UPDATE_RATIO!!', value)
  return {
    type: Types.UPDATE_RATIO,
    value// ES6 syntax - is same as value: value
  }
}

export const updateAttack = (value) => {
  //console.log('UPDATE_ATTACK!!', value)
  return {
    type: Types.UPDATE_ATTACK,
    value// ES6 syntax - is same as value: value
  }
}

export const updateRelease = (value) => {
  //console.log('UPDATE_RELEASE!!', value)
  return {
    type: Types.UPDATE_RELEASE,
    value// ES6 syntax - is same as value: value
  }
}
// Visuals
export const toggleMixer = () => {
  //console.log('TOGGLE MIXER!!')
  return {
    type: Types.TOGGLE_MIXER
  }
}
