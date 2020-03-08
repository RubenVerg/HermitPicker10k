import {hermits} from 'hermits.js';

$(document).ready(function() {
  let output = '';

  for (hID in hermits) {
    console.log(hermits[hID].name);
    output += '<div class="hermitblock ';
    for (tID in hermits[hID].traits) {
      output += hermits[hID].traits[tID] + ' ';
     }
    output += `"><div class="pfp">
    <img class="hermitpic" src="images/${hermits[hID].name}.png">
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