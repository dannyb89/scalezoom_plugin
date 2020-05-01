// sdfsdfsd test test2dfsfsdf
//You need an anonymous function to wrap around your function to avoid conflict
(function($){

	//Extend jQuery prototype to chain from jQuery method
 	$.fn.extend({ 
 		
 		//chained method
 		scalezoom: function(settings) {

 			//Set method defaults
         var defaults = {
             viewportHeight: 200,
             viewportWidth: "full"
         }

         var settings  = $.extend(defaults, settings);

			//find matched element
	 		return this.each(function() {
			
				var theImg = $(this);

				$('.vp-img').css("min-height", settings.viewportHeight);

				$( window ).resize(function() {

					theImg.css("top", valignImg(theImg.height(), settings.viewportHeight));

				});
			
	 		});

	 		//function to vertically center image
	 		function valignImg(img_h, vp_h){

	 			var pullTop = 0;
				pullTop = ((img_h - vp_h) / 2) * -1;

				return pullTop;
			}

	   }

	});
			
})(jQuery);
