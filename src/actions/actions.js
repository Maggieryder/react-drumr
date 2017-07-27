import axios from 'axios'
import * as Types from './types'

export const loadData = (url, callback) => {
  return function(dispatch) {
    dispatch(loadDataStart())
    return axios.get(url).then(response => {
      //dispatch(loadDataSuccess(response.data))
      dispatch(callback(response.data))
    }).catch(error => {
      //throw(error);
      dispatch(loadDataFail(error))
    });
  };
}

export const loadDataStart = () => {
  //console.log('LOAD_DATA_START')
  return {type: Types.LOAD_DATA_START};
}

export const loadDataFail = error => {
  //console.log('LOAD_DATA_FAIL', error)
  return {type: Types.LOAD_DATA_FAIL, error};
}

export const loadDataSuccess = data => {
  //console.log('LOAD_DATA_SUCCESS', data.data )
  return {type: Types.LOAD_DATA_SUCCESS, data };
}

// Kit types
export const assignKitData = data => {
  return {
    type: Types.ASSIGN_KIT_DATA,
    data
  }
}

export const assignKitId = id => {
  return {
    type: Types.ASSIGN_KIT_ID,
    id
  }
}

export const assignBuffers = buffers => {
  return {
    type: Types.ASSIGN_BUFFERS,
    buffers
  }
}

// Controller actions
export const updateTempo = value => {
  return {
    type: Types.UPDATE_TEMPO,
    value
  }
}

export const updateSwing = value => {
  return {
    type: Types.UPDATE_SWING,
    value
  }
}

export const updateResolution = value => {
  return {
    type: Types.UPDATE_RESOLTION,
    value
  }
}
export const updateSignature = value => {
  return {
    type: Types.UPDATE_SIGNATURE,
    value
  }
}

export const updateStepId = value => {
  return {
    type: Types.UPDATE_STEP_ID,
    value
  }
}

export const updateBars = value => {
  return {
    type: Types.UPDATE_BARS,
    value
  }
}

export const updateBarId = value => {
  // console.log('TOGGLE BAR!! id =', id)
  return {
    type: Types.UPDATE_BAR_ID,
    value
  }
}

export const togglePlay = () => {
  return {
    type: Types.TOGGLE_PLAY
  }
}

// Tracks actions
export const addTrack = track => {
  return {
    type: Types.ADD_TRACK,
    track
  }
}

export const removeTrack = id => {
  return {
    type: Types.REMOVE_TRACK,
    id
  }
}

// Track actions
export const assignBufferId = ({ id, value }) => {
  return {
    type: Types.ASSIGN_BUFFER_ID,
    track: { id, value }
  }
}

export const assignTrackBuffer = ({ id, buffer }) => {
  return {
    type: Types.ASSIGN_BUFFER,
    track: { id, buffer }
  }
}

export const updateTrackSequence = ({ id, barId, seqId }) => {
  return {
    type: Types.UPDATE_SEQUENCE,
    track: { id, barId, seqId }
  }
}

export const updateTrackVolume = ({ id, value }) => {
  return {
    type: Types.UPDATE_VOLUME,
    track: { id, value }
  }
}

export const updateTrackPan = ({ id, value }) => {
  return {
    type: Types.UPDATE_PAN,
    track: { id, value }
  }
}

export const updateTrackReverbSend = ({ id, value }) => {
  return {
    type: Types.UPDATE_REVERB_SEND,
    track: { id, value }
  }
}

export const updateTrackDelaySend = ({ id, value }) => {
  return {
    type: Types.UPDATE_DELAY_SEND,
    track: { id, value }
  }
}

export const clipTrack = ({ id, clip }) => {
  return {
    type: Types.CLIP_TRACK,
    track: { id, clip }
  }
}

export const muteTrack = id => {
  return {
    type: Types.MUTE_TRACK,
    id
  }
}

export const soloTrack = id => {
  return {
    type: Types.SOLO_TRACK,
    id
  }
}

// Mixer actions
export const updateWetMix = value => {
  return {
    type: Types.UPDATE_WETMIX,
    value
  }
}

export const updateDryMix = value => {
  return {
    type: Types.UPDATE_DRYMIX,
    value
  }
}

export const updateMasterVolume = value => {
  return {
    type: Types.UPDATE_MASTER_GAIN,
    value
  }
}

export const muteWetMix = () => {
  return {
    type: Types.MUTE_WETMIX
  }
}

export const muteDryMix = () => {
  return {
    type: Types.MUTE_DRYMIX
  }
}

// Delay actions
export const toggleDelay = () => {
  return {
    type: Types.TOGGLE_DELAY
  }
}

export const updateDelayTime = value => {
  return {
    type: Types.UPDATE_DELAY_TIME,
    value
  }
}

export const updateDelayFeedback = value => {
  return {
    type: Types.UPDATE_DELAY_FEEDBACK,
    value
  }
}

export const updateDelayFrequency = value => {
  return {
    type: Types.UPDATE_DELAY_FREQUENCY,
    value
  }
}

// Reverb actions
export const toggleReverb = () => {
  return {
    type: Types.TOGGLE_REVERB
  }
}

export const assignReverbData = options => {
  return {
    type: Types.ASSIGN_REVERB_DATA,
    options
  }
}

export const assignReverbId = id => {
  return {
    type: Types.ASSIGN_REVERB_ID,
    id
  }
}

// Compressor actions
export const toggleCompressor = () => {
  return {
    type: Types.TOGGLE_COMPRESSOR
  }
}

export const updateThreshold = value => {
  return {
    type: Types.UPDATE_THRESHOLD,
    value
  }
}

export const updateKnee = value => {
  return {
    type: Types.UPDATE_KNEE,
    value
  }
}

export const updateRatio = value => {
  return {
    type: Types.UPDATE_RATIO,
    value
  }
}

export const updateAttack = value => {
  return {
    type: Types.UPDATE_ATTACK,
    value
  }
}

export const updateRelease = value => {
  return {
    type: Types.UPDATE_RELEASE,
    value
  }
}

// Visuals
export const toggleMixer = () => {
  //console.log('TOGGLE MIXER!!')
  return {
    type: Types.TOGGLE_MIXER
  }
}
