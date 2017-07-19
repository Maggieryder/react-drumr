export default class Mixer {
  constructor(ctx){
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
    this.wetMute;
    this.dryMute;
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
  toggleWetMute(){
    this.wetMute ? this.masterWet.connect(this.finalOutput) : this.masterWet.disconnect(this.finalOutput);
    this.wetMute = !this.wetMute;
  }
  toggleDryMute(){
    this.dryMute ? this.masterDry.connect(this.finalOutput) : this.masterDry.disconnect(this.finalOutput);
    this.dryMute = !this.dryMute;
  }
  // tracks
  addTrack(track){
    track.init(this.masterDry, this.reverb.gainNode(), this.delay.gainNode());
    this.tracks.push(track);
  }
  updateTrackVolume(index, value){
    this.tracks[index].updateVolume(value);
  }
  updateTrackPan(index,value){
    this.tracks[index].panX(value);
  }
  updateTrackReverb(index, value){
    this.tracks[index].updateSendGain(0,value);
  }
  updateTrackDelay(index, value){
    this.tracks[index].updateSendGain(1,value);
  }
  toggleTrackMute(index){
    this.tracks[index].toggleMute();
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
  getTracks(){
    return this.tracks;
  }
  removeTrackWithId(id){
    this.tracks.filter(t => t.id !== id)
  }
  removeTrackAtIndex(index){
    this.tracks[index].disconnect();
    this.tracks.splice(index,1);
  }
  clearTracks(){
    let i = this.tracks.length;
    while (i--){
      this.tracks[i].disconnect();
      this.tracks.pop();
    }
  }
}
