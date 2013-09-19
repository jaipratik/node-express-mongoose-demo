
/*  Geo complete For New View  */

   



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

/*
  $('#tags').tagsInput({
    'height':'60px',
    'width':'380px'
  });
*/


/*  Page specific changes */ 

var goclicked = function  () {
  var a = $('#location').val().replace(/ /g,'');   
        $('#location').val(a);  
  var loc = $("#location").val();
  var loc2  = "/tags/"+loc;
  $('.classgo').attr("href", loc2);
  $('.classgo')[0].click();
}


/* upon clicking the go button   */
$('.classgo').on('click', function () {
var a = $('#location').val().replace(/ /g,'');   console.log('a =',a)
              $('#location').val(a);    
  var loc = $("#location").val();
  var loc2  = "/tags/"+loc;
$('.classgo').attr("href", loc2)
});

/* upon clicking Enter inside the location Textbox  */
$('#location').keypress(function  (e) {
  if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
        goclicked();
      return false;
    }
})





/*  Rooms specific changes */ 

var room_GoClicked = function  () {
  var $location = $('#roomlocation');
                                      console.log(' $location =', $location); 

  var a = $location.val().replace(/ /g,'');   
        $location.val(a);  
  var loc = $location.val();
  var loc2  = "/rooms-in/"+loc;
  $('.roomgo').attr("href", loc2);
  $('.roomgo')[0].click();
}

/* upon clicking the go button   */
$('.roomgo').on('click', function () {
  var $location = $('#roomlocation');
  var a = $location.val().replace(/ /g,'');  
              $location.val(a);    
  var loc = $location.val();
  var loc2  = "/rooms-in/"+loc;
$('.roomgo').attr("href", loc2)
});

/* upon clicking Enter inside the location Textbox  */
$('#roomlocation').keypress(function  (e) {
  if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
        room_GoClicked();
      return false;
    }
})



/*  In New View */ 

$('#tags').focusout(function  () {
  var $location = $('#tags');
  var a = $location.val().replace(/ /g,'');     //  $('#tags').val().replace(/ /g,'');
              $location.val(a);    

  console.log( 'value of #tags', a);
});


$('#tags').keypress(function  (e) {
  if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
       
      var $location = $('#tags');
      var a = $location.val().replace(/ /g,'');     //  $('#tags').val().replace(/ /g,'');
              $location.val(a);  
       $('.save-btn')[0].click();       


      return false;
    }
})


/*  

in create post/ room  when you click on Save Changes blue button
   */

  $(".save-btn").on('click', function () {
  var $location = $('#tags');
  var a = $location.val().replace(/ /g,'');     //  $('#tags').val().replace(/ /g,'');
              $location.val(a);    

  // console.log( 'value of #tags', a);
});






     $("#tags").geocomplete()
        .bind("geocode:result", function(event, result){
        })
        .bind("geocode:error", function(event, status){
        })
        .bind("geocode:multiple", function(event, results){
        });
        $("#find").click(function(){
        });
        $('#find').on('click', function  () {
        var a = $('#geocomplete').val().replace(/ /g,'');   console.log('a =',a)
        $('#geocomplete').val(a);
        $("#examples a").click(function(){
        $("#geocomplete").val($(this).text()).trigger("geocode");
        return false;
        });
        });











});   /*  End document Ready   */ 






















