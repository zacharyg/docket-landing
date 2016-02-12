$(document).ready(function() {
    ( function( $, window, document, undefined )
    {
        'use strict';
                 console.log('function running!');

        var form        = '.newsletter',
            className   = 'newsletter--active',
            email       = 'input[type="email"]';
     
        $( form ).each( function()
        {
                        console.log('each form!');

            var $form   = $( this ),
                $email  = $form.find( email ),
                val     = '';
            console.log($email);
            $email.on( 'keyup.addClassWhenEmail', function()
            {
                val = $email.val();
                console.log('keyup!');
                $form.toggleClass( className, val != '' && /^([\w-\.]+@([\w-]+\.)+[\w-]{2,12})?$/.test( val ) );
            });
        });
    })( jQuery, window, document );
});
