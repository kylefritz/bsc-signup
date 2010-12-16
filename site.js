$(function(){
	var $f=$('form');


	var $e=$('input[name=email]')
	var $s=$('input[type=submit]');
	var emailregex=/\w+@\w+\.\w+/;
	var enabled='enabled';

	var validate=function(){
		if(emailregex.test($e.val()))
		{
			$s.addClass(enabled);
		}else{
			$s.removeClass(enabled);
		}
	};

	$e.keydown(validate).change(validate);

	$f.submit(function(e){
		e.preventDefault();
		validate();
		if(!$s.hasClass(enabled))
		{
			alert('Enter your email, please.');
			return;
		}
		var $prev=$f.hide().prev().hide();
		$('h1').animate({fontSize:'200pt'});
		$.post(
			$f.attr('action'),
			$f.serialize(),
			function(){
				$('h1').animate({fontSize:'80pt'},function(){
					$prev.html('we got you covered.').fadeIn('fast');
				});
			});
	});
});
