$('#contact-form').submit(function(e){
    var name = $('.val')


    if (!name.value ){
        alertify.error('Please check your entries');
        
    }else{
        $.ajax({
            url: 'https://formspree.io/parker9892@gmail.com',
            method:'POST',
            data: $(this).serialize(),
            dataType: 'json'
           
        });
        

        
        $(this).get(0).reset()
        alertify.success('message sent')
    }
})


