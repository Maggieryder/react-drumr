import Track from './Track'

export default class Mixer {
  constructor(ctx){
    this.ctx = ctx;
    ctx.listener.setOrientation(0, 0, -1, 0, 1, 0);
    this.destination = ctx.destination;
    // final output
    this.finalOutput = ctx.createGain();
    this.finalOutput.gain.value = .7;
    // Create master wet and dry.
    this.masterDry = ctx.createGain();
    this.masterDry.gain.value = .7;
    this.masterWet = ctx.createGain();
    this.masterWet.gain.value = .7;
    // Connect master dry and wet to finalOutput.
    this.masterDry.connect(this.finalOutput);
    this.masterWet.connect(this.finalOutput);
    // Connect to speakers
    this.finalOutput.connect(ctx.destination);
    // FX
    this.compressor;
    this.reverb;
    this.delay;
    // Tracks
    this.tracks = [];
    this.mutedTracks = [];
    // toggle
    this.wetMute = false;
    this.dryMute = false;
  }
  // store
  setStore( store ){
    this.store = store;
    this.store.subscribe(this.updateState.bind(this))
    this.updateState()
  }
  updateState(){
    let { mixer } = this.store.getState();
    let { wetMix, wetMute, dryMix, dryMute, masterGain } = mixer;
    if ( this.finalOutput.gain.value !== masterGain ) this.updateGlobalVolume( masterGain / 10 );
    if ( this.masterDry.gain.value !== dryMix ) this.updateDryVolume( dryMix / 10 );
    if ( this.masterWet.gain.value !== wetMix ) this.updateWetVolume( wetMix / 10 );
    if ( this.dryMute !== dryMute ) this.toggleDryMute(dryMute);
    if ( this.wetMute !== wetMute ) this.toggleWetMute(wetMute);
  }
  // FX
  addReverb(reverb){
    this.reverb = reverb;
    this.reverb.init(this.masterWet);
  }
  addDelay(delay){
    this.delay = delay;
    this.delay.init(this.masterWet);
  }
  addCompressor(compressor){
    this.compressor = compressor;
    this.compressor.init(this.finalOutput, this.destination);
  }

  // tracks
  setTracks(tracks){
    tracks.forEach((track) => {
      track.init(this.masterDry, this.reverb.gainNode(), this.delay.gainNode());
    })
    this.tracks = tracks;
    console.log('MIXER setTracks', this.tracks)
  }
  addTrack(track){
    track.init(this.masterDry, this.reverb.gainNode(), this.delay.gainNode());
    this.tracks.push(track);
  }
  toggleTrackMute(index){
    // this.tracks[index].toggleMute();
    console.log('toggleMute', index, this.tracks[index].getId())
    let track = { id: this.tracks[index].getId() }
    this.store.dispatch({type:Types.TOGGLE_MUTE, track })
  }
  toggleTrackSolo(index){
    let self = this,
        soloTracks = this.tracks.filter(t => t.solo)

    if (soloTracks.length<1){
      // make record of what tracks were muted before first solo triggered
      this.mutedTracks = this.tracks.filter(t => t.mute);
      // console.log('mutedTracks', this.mutedTracks);
    }

    this.tracks[index].toggleSolo();

    soloTracks = this.tracks.filter(t => t.solo)
    // console.log('soloTracks', soloTracks);

    // NO MORE SOLOS
    if (soloTracks.length<1){
      // toggle mute on all tracks
      this.tracks.forEach(t => {
        if (t.isMute()) self.toggleTrackMute(t.getId());
      });

      // reset previously muted tracks
      this.mutedTracks.forEach(t => {
        if (!t.isMute()) self.toggleTrackMute(t.getId());
      });
      // clear muted tracks array
      this.mutedTracks = [];
      // console.log('this.mutedTracks', this.mutedTracks);
      return;
    }
    // ONE OR MORE SOLO BUTTONS ACTIVE
    // else mute un-flagged tracks
    let unsoloed = this.tracks.filter(t => {
      return !t.isSolo();
    });
    // console.log('unsoloed', unsoloed);
    unsoloed.forEach(t => {
      if (!t.isMute()) self.toggleTrackMute(t.getId());
    });
    // and solo flagged tracks
    soloTracks.forEach(t => {
      if (t.isMute()) self.toggleTrackMute(t.getId());
    });
  }

  // global
  updateGlobalVolume(value){
    this.finalOutput.gain.value = value;
  }
  updateDryVolume(value){
    this.masterDry.gain.value = value;
  }
  updateWetVolume(value){
    this.masterWet.gain.value =  value;
  }
  toggleWetMute(wetMute){
    this.wetMute ? this.masterWet.connect(this.finalOutput) : this.masterWet.disconnect(this.finalOutput);
    this.wetMute = wetMute;
  }
  toggleDryMute(dryMute){
    this.dryMute ? this.masterDry.connect(this.finalOutput) : this.masterDry.disconnect(this.finalOutput);
    this.dryMute = dryMute;
  }
}
