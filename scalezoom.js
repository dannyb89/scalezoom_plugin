//You need an anonymous function to wrap around your function to avoid conflict
(function($){

	//Extend jQuery prototype to chain from jQuery method
 	$.fn.extend({ 
 		
 		//chained method
 		scalezoom: function(options) {

 			//Set method defaults
         var defaults = {
             viewportHeight: 200,
             viewportWidth: "full"
         }

         var options  = $.extend(defaults, options);

			//find matched element
	 		return this.each(function() {
			
				var op = options;
				var theImg = $(this);

				$( window ).resize(function() {
				  

				});
			
	 		});
	   }

	});
			
})(jQuery);
