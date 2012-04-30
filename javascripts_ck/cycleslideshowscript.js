$(document).ready(function() {
													 
$('#gallery_home').cycle({
	fx: 'scrollLeft',
	timeout: 8000,
	speed: 500,
	delay: -2000,
	pager: '#pager',
	next: '#next',
	prev: '#prev'
});

$('#playControl').toggle(
		function() {
			$('#gallery_home').cycle('pause');
			$(this).text('#');
		},
		function() {
			$('#gallery_home').cycle('resume');
			$(this).text('||');
		});

}); // end ready()
