$(document).ready(function () {

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
    'width':'280px'
  });


var goclick = function  () {
  var loc = $("#location").val();
  var loc2  = "/tags/"+loc;
  $('.classgo').attr("href", loc2);
  $('.classgo')[0].click();
}



$('.classgo').on('click', function () {
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
