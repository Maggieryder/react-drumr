export default class Tracks {
  constructor(){
    this.tracks = [];
  }
  addTrack(track){
    // console.log('@@@@@@@ addTrack',track)
    this.tracks.push(track);
    // console.log('@@@@@@@ tracks',this.tracks)
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
    console.log('clearTracks',this.tracks)
  }
}
