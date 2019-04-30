    $(function(){
        $('.box1').slideDown(function() {
            $('.box1').css({
                'background-color': '#0000FF',
                'width': '200px',
                'height': '100px'
            }).slideUp();
        });
    });

$(function(){
	$("button").click(function () {
  	$(".ex1").show("slow");
  	$('.ex2').fadeOut("slow");
  	$('.ex3').fadeIn("slow");
  	$('.ex4').fadeOut(1500);
	});
});

