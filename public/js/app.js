$(document).ready(function ($) {

  // confirmations
  $('.confirm').submit(function (e) {
    e.preventDefault();
    var self = this;
    var msg = 'Are you sure?';
    bootbox.confirm(msg, 'cancel', 'Yes! I am sure', function (action) {
      if (action) {
        $(self).unbind('submit');
        $(self).trigger('submit');
      }
    });
  });

  $('#tags').tagsInput({
    'height':'60px',
    'width':'380px'
  });


var goclick = function  () {
  var a = $('#location').val().replace(/ /g,'');   
        $('#location').val(a);  

  var loc = $("#location").val();
  var loc2  = "/tags/"+loc;
  $('.classgo').attr("href", loc2);
  $('.classgo')[0].click();
}



$('.classgo').on('click', function () {

var a = $('#location').val().replace(/ /g,'');   console.log('a =',a)
              $('#location').val(a);    

  var loc = $("#location").val();
  var loc2  = "/tags/"+loc;
$('.classgo').attr("href", loc2)
});


$('#location').keypress(function  (e) {
  if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      goclick();
      return false;
    }
})

});
