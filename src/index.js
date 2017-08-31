
import './style.scss';

$(function getImages () {
  var debouncer; // spara undan timern
  var timeout = 200;

    $("#searchField").keyup(function(e){

      clearTimeout(debouncer);

      debouncer = setTimeout(function() {

      if ($("#searchField").val().length > 2)
      {
              var apiKey = 's27nnq3qj88bkz2xws6n4je6';
              var q = $("#searchField").val(); 
                    
                $.ajax(
                    {
                        type:'GET',
                        url:"https://api.gettyimages.com/v3/search/images?sort_order=best",
                        data : { 
                            'phrase' : q              
                        },
                        beforeSend: function (request)
                            {
                              request.setRequestHeader("Api-Key", apiKey);
                            }
                    })
                    .done(function(data){
                        if (q === null){
                          return false;
                          console.log('Empty field!');                  
                        }else{
                          for(var i = 0;i<=5;i++)
                            {
                              $("#output").append("<article><div><img src='" + data.images[i].display_sizes[0].uri + "'/></div><div><h4>" + data.images[i].title + "</h4></div></article>");
                              console.log('Loading images!'); 
                            }
                        }
                    })
                    .fail(function(data){
                        console.log(JSON.stringify(data,2));                
                    });   
      }else{
        console.log('Empty field!'); 
        //$("#output").remove();
      }

    }, timeout);
  })  
});
