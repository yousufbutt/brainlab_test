$( document ).ready(function() {
    


    $( "#CheckAnswer" ).click(function() {
        if ($("#CapitalInput").val() == ""){
            $("#Answer").text("Please Enter A Capital") 
        }
        else {
            
            $.ajax({
                url: "/home/check_answer/",
                method: "GET",
                datatype: "json",
                data:
                {  
                    guess: $("#CapitalInput").val(),
                    position: $("#CountryContainer").attr("position")
                },
                success: function(response){
                    $('#Answer').text(response['result'])

                }
            });
        }
      });


});
