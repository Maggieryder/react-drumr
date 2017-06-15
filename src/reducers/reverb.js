import { ASSIGN_REVERB_ID,
        ASSIGN_REVERB_OPTIONS,
        TOGGLE_REVERB } from '../actions'

const INITIAL_STATE = {
  reverbOptions: [
    {
      label:'Block Inside',
      smpl:'IMreverbs/BlockInside.wav'
    },

    {
      label:'Cement Blocks 1',
      smpl:'IMreverbs/CementBlocks-1.wav'
    },
    {
      label:'Cement Blocks 2',
      smpl:'IMreverbs/CementBlocks-2.wav'
    },
    {
      label:'Chateau de Logne Outside',
      smpl:'IMreverbs/Chateau-de-Logne-Outside.wav'
    },
    {
      label:'Conic Long Echo Hall',
      smpl:'IMreverbs/ConicLongEchoHall.wav'
    },
    {
      label:'Large Long Echo Hall',
      smpl:'IMreverbs/LargeLongEchoHall.wav'
    },
    {
      label:'Large Wide Echo Hall',
      smpl:'IMreverbs/LargeWideEchoHall.wav'
    },
    {
      label:'Greek 7 Echo Hall',
      smpl:'IMreverbs/Greek-7-EchoHall.wav'
    },
    {
      label:'Bottle Hall',
      smpl:'IMreverbs/BottleHall.wav'
    },
    {
      label:'Large Bottle Hall',
      smpl:'IMreverbs/LargeBottleHall.wav'
    },
    {
      label:'Scala Milan Opera Hall',
      smpl:'IMreverbs/ScalaMilanOperaHall.wav'
    },
    {
      label:'Deep Space',
      smpl:'IMreverbs/DeepSpace.wav'
    },
    {
      label:'On a Star',
      smpl:'IMreverbs/On-a-Star.wav'
    },
    {
      label:'Derlon Sanctuary',
      smpl:'IMreverbs/DerlonSanctuary.wav'
    },
    {
      label:'Direct Cabinet N1',
      'smpl':'IMreverbs/DirectCabinetN1.wav'
    },
    {
      label:'Direct Cabinet N2',
      smpl:'IMreverbs/DirectCabinetN2.wav'
    },
    {
      label:'Direct Cabinet N3',
      smpl:'IMreverbs/DirectCabinetN3.wav'
    },
    {
      label:'Direct Cabinet N4',
      smpl:'IMreverbs/DirectCabinetN4.wav'
    },
    {
      label:'Five Columns',
      smpl:'IMreverbs/FiveColumns.wav'
    },
    {
      label:'Five Columns Long',
      smpl:'IMreverbs/FiveColumnsLong.wav'
    },
    {
      label:'French 18th Century Salon',
      smpl:'IMreverbs/French18thCenturySalon.wav'
    },
    {
      label:'Going Home',
      smpl:'IMreverbs/GoingHome.wav'
    },
    {
      label:'Highly Damped Large Room',
      smpl:'IMreverbs/HighlyDampedLargeRoom.wav'
    },
    {
      label:'Small Drum Room',
      smpl:'IMreverbs/SmallDrumRoom.wav'
    },
    {
      label:'Nice Drum Room',
      smpl:'IMreverbs/NiceDrumRoom.wav'
    },
    {
      label:'RubyRoom',
      smpl:'IMreverbs/RubyRoom.wav'
    },
    {
      label:'Trig Room',
      smpl:'IMreverbs/TrigRoom.wav'
    },
    {
      label:'Vocal Duo',
      smpl:'IMreverbs/VocalDuo.wav'
    },
    {
      label:'Masonic Lodge',
      smpl:'IMreverbs/MasonicLodge.wav'
    },
    {
      label:'Musik vereinsaal',
      smpl:'IMreverbs/Musikvereinsaal.wav'
    },
    {
      label:'Parking Garage',
      smpl:'IMreverbs/ParkingGarage.wav'
    },
    {
      label:'Rays',
      smpl:'IMreverbs/Rays.wav'
    },
    {
      label:'Right Glass Triangle',
      smpl:'IMreverbs/RightGlassTriangle.wav'
    },
    {
      label:'Small Prehistoric Cave',
      smpl:'IMreverbs/SmallPrehistoricCave.wav'
    },
    {
      label:'St Nicolaes Church',
      smpl:'IMreverbs/StNicolaesChurch.wav'
    },
    {
      label:'The Silo',
      smpl:'IMreverbs/TheSilo.wav'
    },
    {
      label:'TheSilo Revised',
      smpl:'IMreverbs/TheSilo-Revised.wav'
    }
  ],
  reverbId: 0,
  active: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ASSIGN_REVERB_OPTIONS:
      console.log('action received', action)
      return {...state, reverbOptions: action.options}
    case ASSIGN_REVERB_ID:
      console.log('action received', action)
      return {...state, reverbId: action.id}
    case TOGGLE_REVERB:
      console.log('action received for TOGGLE REVERB', !state.active)
      return {...state, active: !state.active }
    default:
      return state
  }
}
