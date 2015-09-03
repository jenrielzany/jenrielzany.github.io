$(document).ready(function(){
	scrollEasing()
});

	function scrollEasing(){

		 $('a[href*="#"]').on('click', function(){
		 	var id = this.hash;
		 	 $('html, body').animate(
                { scrollTop: $(id).offset().top },
                500
            );
		 });

	}
	