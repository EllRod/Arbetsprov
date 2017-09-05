
import './style.scss';

$(function getImages () {
  var debouncer; // spara undan timern
  var timeout = 200;
  
  function inputBoxChange() {
          
    $("input.box").change(function() {
          var $self = $(this),
          $parent = $self.parent().parent();

           if ($self.prop("checked")) {
              $parent.addClass("checked").appendTo(".result-container");
              } else {
              $parent.remove();
           }

          inputBoxChange();      
    });  
  }
  
  $("#searchField").keyup(function(e) {

    clearTimeout(debouncer);

    debouncer = setTimeout(function() {

    if ($("#searchField").val().length > 2) {
      var apiKey = 's27nnq3qj88bkz2xws6n4je6';
      var q = $("#searchField").val();

        $.ajax({
          type: 'GET',
          url: "https://api.gettyimages.com/v3/search/images?sort_order=best",
          data: {
          'phrase': q
          },
          beforeSend: function(request) {
          request.setRequestHeader("Api-Key", apiKey);
          }
        })
        .done(function(data) {
          if (q === null) {
          return false;
          console.log('Empty field!');

          }
          for (var i = 0; i <= 4; i++) {
            $("#output").append("<article><div class='container-items'><img src='" + data.images[i].display_sizes[0].uri + "'/></div><div class='container-items'><h4>" + data.images[i].title + "</h4></div><div class='items'><input class='box' type='checkbox' /></div></article>");

            console.log('Loading images!');


          }
          
          inputBoxChange();

        })
        .fail(function(data) {
          console.log(JSON.stringify(data, 2));

        });

      } else {
        if ($('article:not(.checked)').length > 0) {

          setTimeout(function() {
            $('article:not(.checked)').remove();

          }, timeout);

        }		  
        console.log('Empty field!');
        
      }
    }, timeout);
  })
});