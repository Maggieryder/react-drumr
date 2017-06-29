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
    /*
    // separate reverb & delay :::
    this.reverbMix = this.context.createGain();
    this.reverbMix.gain.value = 0;
    this.reverb.connect(this.reverbMix);
    this.reverbMix.connect(this.masterWet);
    this.delayMix = this.context.createGain();
    this.delayMix.gain.value = 0;
    this.delay.connect(this.delayMix);
    this.delayMix.connect(this.masterWet);
    */
  }
  addFX(reverb, delay){
    this.reverb = reverb;
    this.reverb.init(this.masterWet);
    this.delay = delay;
    this.delay.init(this.masterWet);
  }
  addCompressor(compressor){
    this.compressor = compressor;
    this.compressor.init(this.finalOutput, this.destination);
  }
  updateGlobalVolume(val){
    this.finalOutput.gain.value = val;
  }
  updateTrackPan(index,val){
    this.tracks[index].panX(val);
  }
  updateTrackReverb(trackIndex, val){
    this.tracks[trackIndex].updateSendGain(0,val);
  }
  updateTrackDelay(trackIndex, val){
    this.tracks[trackIndex].updateSendGain(1,val);
  }
  updateDryVolume(val){
    this.masterDry.gain.value = val;
  }
  updateWetVolume(val){
    this.masterWet.gain.value =  val;
  }
  toggleWetMute(mute){
    //console.log('toggleWetMute', e.target);
    //e.target.classList.toggle('on');
    //this.wetMute = !this.wetMute;
    mute ? this.masterWet.disconnect(this.finalOutput) : this.masterWet.connect(this.finalOutput);
  }
  toggleDryMute(mute){
    //console.log('toggleDryMute', e.target);
    //e.target.classList.toggle('on');
    //this.dryMute = !this.dryMute;
    mute ? this.masterDry.disconnect(this.finalOutput) : this.masterDry.connect(this.finalOutput);
  }
  toggleTrackMute(index){
    //console.log('toggleTrackMute', index);
    //this.muteBtns[index].classList.toggle('on');
    this.tracks[index].toggleMute();
  }
  toggleTrackSolo(index){
    let self = this;
    if (this.soloTracks.length<1){
      //make record of what tracks were muted before first solo triggered
      this.mutedTracks = this.tracks.filter(function(track) {
        return track.isMute();
      });
      console.log('this.mutedTracks', this.mutedTracks);
    }

    this.soloBtns[index].classList.toggle('on');
    this.tracks[index].toggleSolo();

    this.soloTracks = this.tracks.filter(function(track) {
      return track.isSolo();
    });
    console.log('this.soloTracks', this.soloTracks);

    // NO MORE SOLOS
    if (this.soloTracks.length<1){
      // toggle mute on all tracks
      this.tracks.forEach(function(track){
        if (track.isMute()) self.toggleTrackMute(track.getId());
      });
      // reset previously muted tracks
      this.mutedTracks.forEach(function(track){
        if (!track.isMute()) self.toggleTrackMute(track.getId());
      });
      // clear muted tracks array
      this.mutedTracks = [];
      console.log('this.mutedTracks', this.mutedTracks);
      return;
    }
    // ONE OR MORE SOLO BUTTONS ACTIVE
    // else mute un-flagged tracks
    let unsoloed = this.tracks.filter(function(track) {
      return !track.isSolo();
    });
    console.log('unsoloed', unsoloed);
    unsoloed.forEach(function(track){
      if (!track.isMute()) self.toggleTrackMute(track.getId());
    });
    // and solo flagged tracks
    this.soloTracks.forEach(function(track){
      if (track.isMute()) self.toggleTrackMute(track.getId());
    });
  }
  soloOn(){
    return this.soloTracks.length>0;
  }

  /*
  updateReverbVolume(val){
    this.reverbMix.gain.value = val;
  }
  updateDelayVolume(val){
    this.delayMix.gain.value = val;
  }
  */
  getTracks(){
    return this.tracks;
  }
  addTrack(track){
    track.init(this.masterDry, this.reverb.gainNode(), this.delay.delayNode());
    this.tracks.push(track);
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
  updateTrackVolume(index, val){
    this.tracks[index].updateVolume(val);
  }
}
