$(function() {
    $("#searchField").keyup(function(e){
        var apiKey = 's27nnq3qj88bkz2xws6n4je6';
        var q = $("#searchField").val(); 
        
        console.log('get images is loading now!');
        
        $.ajax(
            {
                type:'GET',
                url:"https://api.gettyimages.com/v3/search/images/creative",
                data : { 
                    'phrase' : q                
                },
                dataType: "json",
                beforeSend: function (request)
                    {
                        request.setRequestHeader("Api-Key", apiKey);
                    }})
            .done(function(data){

                for(var i = 0;i<data.images.length;i++)
                {
                $("#output").append("<li><img src='" + data.images[i].display_sizes[0].uri + "'/></li>");
                }
            })
            .fail(function(data){
                console.log(JSON.stringify(data,2));
                $("#output").remove();
            });    

    })        
});