// menu
$('.menu-burg , .navigation').click(function () {
	if ($('.navigation').hasClass('vis')) {
		$('.navigation').removeClass('vis')
	} else {
		$('.navigation').addClass('vis')
	}
});

//slider

$('.bs-2').click(function(event) {
	$('.bs-2').removeClass('button-block');
	$('.bs-1').removeClass('button-block');
	if ($('.slider-workPlace').hasClass('apple')) {
		$('.slider-workPlace').removeClass('apple')
		$('.slider-workPlace').addClass('dr-fruit')
		$('.title').text('Dr.fruit');
	} else if ($('.slider-workPlace').hasClass('dr-fruit')) {
		$('.slider-workPlace').removeClass('dr-fruit')
		$('.slider-workPlace').addClass('orange')
		$('.title').text('Orange');
	} else if ($('.slider-workPlace').hasClass('orange')) {
		$('.slider-workPlace').removeClass('orange')
		$('.slider-workPlace').addClass('peach')
		$('.title').text('Peach');
	} else if ($('.slider-workPlace').hasClass('peach')) {
		$('.slider-workPlace').removeClass('peach')
		$('.slider-workPlace').addClass('pinep')
		$('.title').text('Pinaple');
		$('.bs-2').addClass('button-block');
	} else {
		$('.bs-2').addClass('button-block');
	}
});

$('.bs-1').click(function(event) {
	$('.bs-2').removeClass('button-block');
	$('.bs-1').removeClass('button-block');
	if ($('.slider-workPlace').hasClass('pinep')) {
		$('.slider-workPlace').removeClass('pinep')
		$('.slider-workPlace').addClass('peach')
		$('.title').text('Peach');
	} else if ($('.slider-workPlace').hasClass('peach')) {
		$('.slider-workPlace').removeClass('peach')
		$('.slider-workPlace').addClass('orange')
		$('.title').text('Orange');
	} else if ($('.slider-workPlace').hasClass('orange')) {
		$('.slider-workPlace').removeClass('orange')
		$('.slider-workPlace').addClass('dr-fruit')
		$('.title').text('Dr.fruit');
	} else if ($('.slider-workPlace').hasClass('dr-fruit')) {
		$('.slider-workPlace').removeClass('dr-fruit')
		$('.slider-workPlace').addClass('apple')
		$('.title').text('Apple');
		$('.bs-1').addClass('button-block');
	} else {
		$('.bs-1').addClass('button-block');
	}
});

//slider munu

$('.app').click(function(event) {
	$('.bs-2').removeClass('button-block');
	$('.bs-1').addClass('button-block');
	$('.slider-workPlace').removeClass('peach , orange , dr-fruit , pinep')
	$('.slider-workPlace').addClass('apple')
	$('.title').text('Apple');
});

$('.pin').click(function(event) {
	$('.bs-2').addClass('button-block');
	$('.bs-1').removeClass('button-block');
	$('.slider-workPlace').removeClass('peach , orange , dr-fruit , apple')
	$('.slider-workPlace').addClass('pinep')
	$('.title').text('Pinaple');
});


$('.orn').click(function(event) {
	$('.bs-2').removeClass('button-block');
	$('.bs-1').removeClass('button-block');
	$('.slider-workPlace').removeClass('peach , apple , dr-fruit , pinep')
	$('.slider-workPlace').addClass('orange')
	$('.title').text('Orange');
});

$('.pea').click(function(event) {
	$('.bs-2').removeClass('button-block');
	$('.bs-1').removeClass('button-block');
	$('.slider-workPlace').removeClass('apple , orange , dr-fruit , pinep')
	$('.slider-workPlace').addClass('peach')
	$('.title').text('Peach');

});

$('.drf').click(function(event) {
	$('.bs-2').removeClass('button-block');
	$('.bs-1').removeClass('button-block');
	$('.slider-workPlace').removeClass('peach , apple , orange , pinep')
	$('.slider-workPlace').addClass('dr-fruit')
	$('.title').text('Dr.fruit');
});

//contacts

$('.part4').click(function(event) {
	$('.contact-block').addClass('contact-border')
	setTimeout(function(){
		$('.contact-block').removeClass('contact-border')
	}, 2000)
	
});

// section about

$('.about').hide(0);

$('.part2').click(function(event) {
	$('.about').show(0);
});

$('.button-hide').click(function(event) {
	$('.about').hide(500);
});

//forma

$('.button-sent , .form-out').click(function(event) {
	$('.forma-box').toggleClass('forma-visib')
	let product = $('.title').html()
	$('.name').text(product);
	$('.forma')[0].reset();
});


$('.button-form').click(function() {
	let name = $('.input.name').val();
	let phone = $('.input.phone').val();
	let amount = $('.input.amount').val();
	let email = $('.input.email').val();

	if (name == '' || phone == '' || amount == ''|| email == '') {
		alert('Fill all forms')
	} else{
		$('.forma-box').removeClass('forma-visib')
		// $('.alert-block').addClass('alert-visib')
		setTimeout(function(){
			$('.alert-block').addClass('alert-visib')
		}, 1000)
		setTimeout(function(){
			$('.alert-block').removeClass('alert-visib')
		}, 3000)
	}
});


