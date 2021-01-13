$(document).ready(function(){
    $('.card').mousemove(function(event){
        $('#Xaxis').text(event.pageX);
        $('#Yaxis').text(event.pageY);
        });

        
});
