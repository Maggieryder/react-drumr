export * from './types';
export * from './actions';
/*
// Sequencer actions
export const UPDATE_TEMPO = 'UPDATE_TEMPO'

export function updateTempo(tempo) {
  return {
    type: UPDATE_TEMPO,
    tempo // ES6 syntax - is same as tempo: tempo
  }
}

export const UPDATE_SWING = 'UPDATE_SWING'

export function updateSwing(swing) {
  return {
    type: UPDATE_SWING,
    swing // ES6 syntax - is same as swing: swing
  }
}

export const TOGGLE_PLAY = 'TOGGLE_PLAY'

export function togglePlay() {
  return {
    type: TOGGLE_PLAY
  }
}

//tracks actions
export const ADD_TRACK = 'ADD_TRACK'

export function addTrack(track) {
  return {
    type: ADD_TRACK,
    track // ES6 syntax - is same as track: track
  }
}

export const REMOVE_TRACK = 'REMOVE_TRACK'

export function removeTrack(id) {
  return {
    type: REMOVE_TRACK,
    id// ES6 syntax - is same as id: id
  }
}

export const SOLO_TRACKS = 'SOLO_TRACKS'

export function soloTracks() {
  return {
    type: SOLO_TRACKS,
  }
}

// Track actions
export const ASSIGN_ID = 'ASSIGN_ID'

export function assignTrackId(id) {
  return {
    type: ASSIGN_ID,
    id// ES6 syntax - is same as id: id
  }
}

export const ASSIGN_NAME = 'ASSIGN_NAME'

export function assignTrackName(name) {
  return {
    type: ASSIGN_NAME,
    name// ES6 syntax - is same as name: name
  }
}

export const ASSIGN_BUFFER = 'ASSIGN_BUFFER'

export function assignTrackBuffer(buffer) {
  return {
    type: ASSIGN_BUFFER,
    buffer// ES6 syntax - is same as buffer: buffer
  }
}

export const UPDATE_SEQUENCE = 'UPDATE_SEQUENCE'

export function updateTrackSequence(sequence) {
  return {
    type: UPDATE_SEQUENCE,
    sequence// ES6 syntax - is same as sequence: sequence
  }
}

export const UPDATE_VOLUME = 'UPDATE_VOLUME'

export function updateTrackVolume(volume) {
  return {
    type: UPDATE_VOLUME,
    volume// ES6 syntax - is same as volume: volume
  }
}

export const UPDATE_PAN = 'UPDATE_PAN'

export function updateTrackPan(pan) {
  return {
    type: UPDATE_PAN,
    pan// ES6 syntax - is same as pan: pan
  }
}

export const UPDATE_REVERB_SEND = 'UPDATE_REVERB_SEND'

export function updateTrackReverbSend(send) {
  return {
    type: UPDATE_REVERB_SEND,
    send// ES6 syntax - is same as send: send
  }
}

export const UPDATE_DELAY_SEND = 'UPDATE_DELAY_SEND'

export function updateTrackDelaySend(send) {
  return {
    type: UPDATE_DELAY_SEND,
    send// ES6 syntax - is same as send: send
  }
}

export const MUTE_TRACK = 'MUTE_TRACK'

export function muteTrack() {
  return {
    type: MUTE_TRACK
  }
}

export const SOLO_TRACK = 'SOLO_TRACK'

export function soloTrack() {
  return {
    type: SOLO_TRACK
  }
}

// mixer actions
export const UPDATE_WETMIX = 'UPDATE_WETMIX'

export function updateWetMix(value) {
  return {
    type: UPDATE_WETMIX,
    value// ES6 syntax - is same as value: value
  }
}

export const UPDATE_DRYMIX = 'UPDATE_DRYMIX'

export function updateDryMix(value) {
  return {
    type: UPDATE_DRYMIX,
    value// ES6 syntax - is same as value: value
  }
}

export const UPDATE_MASTER_GAIN = 'UPDATE_MASTER_GAIN'

export function updateMasterVolume(value) {
  return {
    type: UPDATE_MASTER_GAIN,
    value// ES6 syntax - is same as value: value
  }
}

export const MUTE_WETMIX = 'MUTE_WETMIX'

export function muteWetMix() {
  return {
    type: MUTE_WETMIX
  }
}

export const MUTE_DRYMIX = 'MUTE_DRYMIX'

export function muteDryMix() {
  return {
    type: MUTE_DRYMIX
  }
}

// delay actions
export const TOGGLE_DELAY = 'TOGGLE_DELAY'

export function toggleDelay() {
  return {
    type: TOGGLE_DELAY
  }
}

export const UPDATE_DELAY_TIME = 'UPDATE_DELAY_TIME'

export function updateDelayTime(value) {
  return {
    type: UPDATE_DELAY_TIME,
    value// ES6 syntax - is same as value: value
  }
}

export const UPDATE_DELAY_FEEDBACK = 'UPDATE_DELAY_FEEDBACK'

export function updateDelayFeedback(value) {
  return {
    type: UPDATE_DELAY_FEEDBACK,
    value// ES6 syntax - is same as value: value
  }
}

export const UPDATE_DELAY_FREQUENCY = 'UPDATE_DELAY_FREQUENCY'

export function updateDelayFrequency(value) {
  return {
    type: UPDATE_DELAY_FREQUENCY,
    value// ES6 syntax - is same as value: value
  }
}

// reverb actions
export const TOGGLE_REVERB = 'TOGGLE_REVERB'

export function toggleReverb() {
  return {
    type: TOGGLE_REVERB
  }
}

export const ASSIGN_BUFFER_OPTIONS = 'ASSIGN_BUFFER_OPTIONS'

export function assignBufferOptions(options) {
  return {
    type: ASSIGN_BUFFER_OPTIONS,
    options// ES6 syntax - is same as options: options
  }
}

export const ASSIGN_BUFFER_ID = 'ASSIGN_BUFFER_ID'

export function assignBufferId(id) {
  return {
    type: ASSIGN_BUFFER_ID,
    id// ES6 syntax - is same as id: id
  }
}

//compressor actions
export const TOGGLE_COMPRESSOR = 'TOGGLE_COMPRESSOR'

export function toggleCompressor() {
  return {
    type: TOGGLE_COMPRESSOR
  }
}

export const UPDATE_THRESHOLD = 'UPDATE_THRESHOLD'

export function updateThreshold(value) {
  return {
    type: UPDATE_THRESHOLD,
    value// ES6 syntax - is same as value: value
  }
}

export const UPDATE_KNEE = 'UPDATE_KNEE'

export function updateKnee(value) {
  return {
    type: UPDATE_KNEE,
    value// ES6 syntax - is same as value: value
  }
}

export const UPDATE_RATIO = 'UPDATE_RATIO'

export function updateRatio(value) {
  return {
    type: UPDATE_RATIO,
    value// ES6 syntax - is same as value: value
  }
}

export const UPDATE_ATTACK = 'UPDATE_ATTACK'

export function updateAttack(value) {
  return {
    type: UPDATE_ATTACK,
    value// ES6 syntax - is same as value: value
  }
}

export const UPDATE_RELEASE = 'UPDATE_RELEASE'

export function updateRelease(value) {
  return {
    type: UPDATE_RELEASE,
    value// ES6 syntax - is same as value: value
  }
}
*/
