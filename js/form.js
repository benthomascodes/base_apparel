var $form = $('.subscribe');
var $error = $('.form-error');

function validateEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

$form.on('keyup', 'input', function (e) {
    var $this = $(this),
        $input = $this.val();

    if ($input.length > 0) {
        $form.find('label').addClass('active');

        if (validateEmail($input)) {
            $form.find('button').addClass('active');
            console.log(e);

            if (e.which === 13) {
                $form.find('button').click();
                $this.blur();
            }

            $error.removeClass('active');

        } else {
            $form.find('button').removeClass('active');
            $error.addClass('active');
        }

        $(this).addClass('active');

    } else {
        $form.find('label').removeClass('active');
        $form.find('button').removeClass('active');
        $error.removeClass('active');
        $(this).removeClass('active');
    }
});

$form.on('click', 'button.active', function (e) {
    e.preventDefault;

    var $expand = $('.input-group-append');
    var $this = $(this);

    $expand.addClass('active');
    $this.html('<span>Sent</span>');

    setTimeout(() => {
        $form.find('input').val('').removeClass('active');
        $form.find('label').removeClass('active');
        $this.removeClass('active');
        $expand.removeClass('active');
        $form.find('span').fadeOut(300);
    }, 2000);
});