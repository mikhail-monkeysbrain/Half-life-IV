$(function(){

	//движение руки
	$(document).mousemove(function(e){
	    var Y = e.pageY;
		rotate = Y/10;
		$('#arm').css('transform', 'rotate('+rotate+'deg)')
	});    

	//движение вперед
	var count = 1;
	$( "body" ).keydown(function(forward) {
	  if ( forward.which == 68 ){
	   forward.preventDefault();
	  }
	  count++;
	  $('svg').css('left', count*5);
	  headPos = $('#head').offsetLeft()
	  console.log(headPos);
	});
	 
	//падение мишений
	var 
		t 		= 0;
		min 	= 10;
		max 	= 100;
		animMin	= 90;
		animMax	= 150;
	$('.target').each(function(){
		t++;
		rand 		= min + Math.floor(Math.random() * (max + 1 - min));
		animRand 	= animMin + Math.floor(Math.random() * (animMax + 1 - animMin));
		$(this).addClass('target-'+t);
		$(this).css({
			'right'		: t*70,
			'top'		: rand,
		});
		$(this).animate({
			'top'		: animRand+'vh',
		}, rand*200,);
	});

	//попадание в мишень
	$('.target').click(function(){
		$(this).addClass('shooted');
	});


})