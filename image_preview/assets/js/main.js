$(Document).ready(function(){
     
    
      //instant avatar preview display
        $('#image_hidden').hide();
        
        $(document).on('change','#avatar',function(){
            $('#image_hidden').fadeIn();
            let reader = new FileReader();
            reader.onload = (e) => { 
                $('#image_preview_container').attr('src', e.target.result); 
            }
            reader.readAsDataURL(this.files[0]); 
        });
})
