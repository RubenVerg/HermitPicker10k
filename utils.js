$(document).ready(function() {
  let output = '';

  for (hID in hermits) {
    console.log(hermits[hID].name);
    output += '<div class="hermitblock ';
    for (tID in hermits[hID].traits) {
      output += hermits[hID].traits[tID] + ' ';
     }
    output += `"><div class="pfp">
    <img class="hermitpic" src="images/${hermits[hID].name.toLowerCase()}.png">
    </div>
    <div class="playername">${hermits[hID].name}</div>
    <div class="channels"><a href="https://youtube.com/${hermits[hID].youtube}">Youtube</a> <a href="https://twitch.tv/${hermits[hID].twitch}">Twitch</a> <a href="https://twitter.com/${hermits[hID].twitter}">Twitter</a></div></div>`;
  }
  $('#hermitlist').append(output);
  $('.hermitblock').hide();

   // form selects
  $('.hermitselector').change(function() {
    var selectedTraits = [];
    $('.hermitselector:checked').each(function() {
      if ($(this).val() != 'np'){
        var newTrait = $(this).val();
        selectedTraits.push(newTrait);
      }
    })
    var traitString = selectedTraits.join('.');
    //console.log(traitString);
    $('.hermitblock').hide();
    if (traitString.length > 0) {
      $('#Placeholder').hide();
      $('.'+traitString).show();
    } else {
      $('#Placeholder').show();
    }
  })//end $(.hermitselector).change
});//end $(document).ready

const hermits = [{
  'name'   : 'BdoubleO100',
  'youtube': 'bdoubleo100',
  'twitch' : 'bdoubleo',
  'twitter': 'BdoubleO100',
  'traits' : ['builder', 'hyper', 'derpy', 'lore', 'heavyediting', 'bigchannel', 'male', 'US', 'regularreleases', 'mostlyminecraft', 'S1', 'S5', 'S6', 'S7', 'NHO', 'IDEA']
},
{
  'name'   : 'cubfan135',
  'youtube': 'cubfan135',
  'twitch' : 'cubfan135',
  'twitter': 'cubfan135',
  'traits' : ['builder', 'redstone', 'calm', 'whizkid', 'lore', 'lightediting', 'male', 'US', 'streamer', 'regularreleases', 'mostlyminecraft', 'S4', 'S5', 'S6', 'S7', 'Modded', 'Concorp']
},
{
  'name'   : 'Docm77',
  'youtube': 'docm77',
  'twitch' : 'docm77live',
  'twitter': 'docm77',
  'traits' : ['redstone', 'calm', 'whizkid', 'lore', 'lightediting', 'male', 'Europe', 'streamer', 'regularreleases', 'diversecontent', 'S3', 'S4', 'S5', 'S6', 'S7', 'NHO']
},
{
  'name'   : 'Etho',
  'youtube': 'ethoslab',
  'twitch' : 'ethotv',
  'twitter': 'etholp',
  'traits' : ['redstone', 'calm', 'whizkid', 'lightediting', 'bigchannel', 'male', 'US', 'S3', 'S4', 'S5', 'S7', 'Modded', 'NHO']
},
{
  'name'   : 'FalseSymmetry',
  'youtube': 'FalseSymmetry',
  'twitch' : 'FalseSymmetry',
  'twitter': 'falsesymmetry',
  'traits' : ['builder', 'calm', 'derpy', 'lore', 'lightediting', 'smallchannel', 'female', 'Europe', 'streamer', 'regularreleases', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7']
},
{
  'name'   : 'GoodTimesWithScar',
  'youtube': 'goodtimeswithscar',
  'twitch' : 'goodtimeswithscar',
  'twitter': 'GTWScar',
  'traits' : ['builder', 'calm', 'derpy', 'lore', 'heavyediting', 'alteregos', 'male', 'US', 'streamer', 'S4', 'S5', 'S6', 'S7', 'Concorp']
},
{
  'name'   : 'Grian',
  'youtube': 'Xelqua',
  'twitch' : 'grianmc',
  'twitter': 'GrianMC',
  'traits' : ['builder', 'hyper', 'derpy', 'lore', 'heavyediting', 'alteregos', 'bigchannel', 'male', 'Europe', 'regularreleases', 'S6', 'S7', 'Architech']
},
{
  'name'   : 'Hypnotizd',
  'youtube': 'hypnotizd',
  'twitch' : 'hypnotizd',
  'twitter': 'hypnotizd_',
  'traits' : ['builder', 'redstone', 'calm', 'lightediting', 'smallchannel', 'male',  'US', 'streamer', 'regularreleases', 'S1', 'S2', 'S3', 'S7', 'Modded']
},
{
  'name'   : 'iJevin',
  'youtube': 'ijevin',
  'twitch' : 'ijevin',
  'twitter': 'ijevin',
  'traits' : ['builder', 'redstone', 'hyper', 'lore', 'lightediting', 'male', 'US', 'streamer', 'regularreleases', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7']
},
{
  'name'   : 'impulseSV',
  'youtube': 'impulseSV',
  'twitch' : 'impulsesv',
  'twitter': 'impulseSV',
  'traits' : ['redstone', 'calm', 'lore', 'lightediting', 'smallchannel', 'male', 'US', 'streamer', 'regularreleases', 'S3', 'S4', 'S5', 'S6', 'S7']
},
{
  'name'   : 'iskall85',
  'youtube': 'Iskall85',
  'twitch' : 'iskall85',
  'twitter': 'iskall85',
  'traits' : ['builder', 'redstone', 'derpy', 'hyper', 'lore', 'lightediting', 'male', 'Europe', 'streamer', 'regularreleases', 'S4', 'S5', 'S6', 'S7', 'Modded', 'Architech']
},
{
  'name'   : 'Joe Hills',
  'youtube': 'joehillstsd',
  'twitch' : 'joehills',
  'twitter': 'joehills',
  'traits' : ['builder', 'calm', 'whizkid', 'lore', 'lightediting', 'smallchannel', 'male', 'US', 'streamer', 'regularreleases', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7']
},
{
  'name'   : 'Keralis',
  'youtube': 'keralis',
  'twitch' : 'keralis',
  'twitter': 'worldofkeralis',
  'traits' : ['builder', 'calm', 'derpy', 'lore', 'heavyediting', 'bigchannel', 'male', 'Europe', 'regularreleases', 'diversecontent', 'S1', 'S2', 'S3', 'S6', 'S7', 'Modded','IDEA']
},
{
  'name'   : 'Mumbo Jumbo',
  'youtube': 'ThatMumboJumbo',
  'twitch' : 'thatmumbojumbo',
  'twitter': 'ThatMumboJumbo',
  'traits' : ['redstone', 'calm', 'derpy', 'lore', 'heavyediting', 'bigchannel', 'male', 'Europe', 'regularreleases', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'Architech']
},
{
  'name'   : 'Rendog',
  'youtube': 'rendog',
  'twitch' : 'rendogtv',
  'twitter': 'renthedog',
  'traits' : ['builder', 'hyper', 'derpy', 'lore', 'heavyediting', 'smallchannel', 'alteregos', 'male', 'Europe', 'streamer', 'regularreleases', 'S4', 'S5', 'S6', 'S7', 'Modded']
},
{
  'name'   : 'Stressmonster101',
  'youtube': 'stressmonster101',
  'twitch' : 'stressmonster',
  'twitter': 'stressmonsterin',
  'traits' : ['builder', 'hyper', 'lore', 'lightediting', 'smallchannel', 'female', 'Europe', 'streamer', 'regularreleases', 'S5', 'S6', 'S7']
},
{
  'name'   : 'Tango Tek',
  'youtube': 'TangoTekLP',
  'twitch' : 'tangotek',
  'twitter': 'TangoTekLP',
  'traits' : ['redstone', 'hyper', 'derpy', 'heavyediting', 'male', 'US', 'streamer', 'regularreleases', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7']
},
{
  'name'   : 'Tinfoil Chef',
  'youtube': 'selif1',
  'twitch' : 'tinfoilchef',
  'twitter': 'tinfoilchef',
  'traits' : ['builder', 'calm', 'lightediting', 'smallchannel', 'male', 'US', 'regularreleases', 'diversecontent', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'Modded']
},
{
  'name'   : 'VintageBeef',
  'youtube': 'vintagebeef',
  'twitch' : 'vintagebeef',
  'twitter': 'vintagebeeflp',
  'traits' : ['builder', 'calm', 'lightediting', 'bigchannel', 'male', 'US', 'regularreleases', 'diversecontent', 'S4', 'S5', 'S7', 'Modded', 'NHO']
},
{
  'name'   : 'xbCrafted',
  'youtube': 'xbxaxcx',
  'twitch' : 'xbcrafted',
  'twitter': 'xBCrafted',
  'traits' : ['builder', 'calm', 'derpy', 'lightediting', 'smallchannel', 'male', 'US', 'streamer', 'regularreleases', 'diversecontent', 'S2', 'S3', 'S5', 'S7', 'Modded']
},
{
  'name'   : 'Xisuma',
  'youtube': 'xisumavoid',
  'twitch' : 'xisuma',
  'twitter': 'xisumavoid',
  'traits' : ['builder', 'redstone', 'calm', 'derpy', 'lightediting', 'alteregos', 'bigchannel', 'male', 'Europe', 'streamer', 'regularreleases', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'Modded', 'IDEA']
},
{
  'name'   : 'Zedaph',
  'youtube': 'zedaphplays',
  'twitch' : 'ZedaphPlays',
  'twitter': 'ZedaphPlays',
  'traits' : ['builder', 'redstone', 'hyper', 'derpy', 'heavyediting', 'alteregos', 'smallchannel', 'male', 'Europe', 'streamer', 'S5', 'S6', 'S7']
},
{
  'name'   : 'ZombieCleo',
  'youtube': 'zombiecleo',
  'twitch' : 'zombiecleo',
  'twitter': 'zombiecleo',
  'traits' : ['builder', 'hyper', 'whizkid', 'lore', 'heavyediting', 'smallchannel', 'female', 'Europe', 'regularreleases', 'diversecontent', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7']
}];