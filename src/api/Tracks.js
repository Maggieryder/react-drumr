export default class Tracks {
  constructor(ctx, reverbNode, delayNode, masterDryNode){
    this.ctx = ctx;
    this.tracks = [];
    this.reverbNode = reverbNode;
    this.delayNode = delayNode;
    this.masterDryNode = masterDryNode;
  }
  addTrack(track){
    track.init(this.masterDryNode, this.reverbNode, this.delayNode);
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
