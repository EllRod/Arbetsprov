$(function() {
    console.log('get images is loading now!');
    
    function getImages () {
        var apiKey = 'j878g39yx378pa77djthzzpn';
        

        $.ajax(
            {
                type:'GET',
                url:"https://api.gettyimages.com/v3/search/images/creative?phrase=dogs",
                beforeSend: function (request)
                    {
                        request.setRequestHeader("Api-Key", apiKey);
                    }})
            .done(function(data){
                console.log("Success with data")
                for(var i = 0;i<data.images.length;i++)
                {
                $("#output").append("<img src='" + data.images[i].display_sizes[0].uri + "'/>");
                }
            })
            .fail(function(data){
                alert(JSON.stringify(data,2))
            });    
    }

});