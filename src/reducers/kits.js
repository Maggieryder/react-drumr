import { ASSIGN_KIT_ID,
        ASSIGN_KIT_OPTIONS } from '../actions'

const INITIAL_STATE = {
  kitOptions: [
    {
      label:'Feelin Kit',
      path:'triton/FeelinKit/',
      voices: [
          {'name':'kick', 'smple':'FK_BD_08.wav'},
          {'name':'snare', 'smple':'FK_SNR_03.wav'},
          {'name':'hihat', 'smple':'FK_HH_05.wav'},
          {'name':'open hihat', 'smple':'FK_CYM_03.wav'}
      ]
    },
    {
      label:'Wild Soul Kit',
      path:'triton/WildSoulKit/',
      voices: [
        {'name':'kick', 'smple':'WSK_BD_03.wav'},
        {'name':'snare', 'smple':'WSK_SNR_08.wav'},
        {'name':'tambourine', 'smple':'WSK_HH_03.wav'},
        {'name':'open hihat', 'smple':'WSK_HH_12.wav'}
      ]
    }
  ],
  kitId: 0
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ASSIGN_KIT_OPTIONS:
      console.log('action received', action)
      return {...state, kitOptions: action.options}
    case ASSIGN_KIT_ID:
      console.log('action received', action)
      return {...state, kitId: action.id}
    default:
      return state
  }
}
