$('#contact-form').submit(function(e){
    var name = $('.group-two')


    if (!name.value ){
        alertify.error('Please check your entries');
        
    }else{
        $.ajax({
            url: 'https://formspree.io/parker9892@gmail.com',
            method:'POST',
            data: $(this).serialize(),
            dataType: 'json'
        });

        e.preventDefault()
        $(this).get(0).reset()
        alertify.success('message sent')
    }
})









