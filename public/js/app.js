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



$('.classgo').on('click', function () {
  var loc = $("#location").val();
  var loc2  = "/tags/"+loc;

  console.log('loc2 =', loc2);

  console.log('loc=', loc);

  
$('.classgo').attr("href", loc2)

});


});
