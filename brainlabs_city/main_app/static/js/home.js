$( document ).ready(function() {
    console.log( "ready!" );


    $( "#CheckAnswer" ).click(function() {
        /*headers: {
            'X-CSRFTOKEN': $('[name="csrfmiddlewaretoken"]').val()
        },*/
        if ($("#CapitalInput").val() == ""){
            $("#Answer").text("Please Enter A Capital") 
        }
        else {
            var token = document.getElementsByName("csrfToken").value;
            console.log(token)
             
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
                    console.log(response['result'])
                    $('#Answer').text(response['result'])

                }
            });
        }
      });


});