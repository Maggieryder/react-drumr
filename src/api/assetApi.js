let jsonToLoad = 2;
//
// class AssetApi {
//   static getAllAssets(url) {
//     return fetch(url).then(response => {
//       return response.json();
//     }).catch(error => {
//       return error;
//     });
//   }
// }

class AssetAPi {
  static getAllAssets(url) {
    $.getJSON(url, function(json) {
      return json;
    });
  }
}
export default AssetApi;


//
// $.getJSON("json/kits.json", function(json) {
//   setOptions('kits', json);
//   initLib('kits', json);
//   jsonToLoad--;
//   if (jsonToLoad === 0) initDrumr();
// });
//
// $.getJSON("json/verbs.json", function(json) {
//   setOptions('verbs', json);
//   initLib('verbs', json);
//   jsonToLoad--;
//   if (jsonToLoad === 0) initDrumr();
// });
