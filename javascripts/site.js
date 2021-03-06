$(document).ready(function() {

	// CSS3 rounded corners / shadows
	$("div#header li.active a").css({ '-moz-border-radius': '6px', '-webkit-border-radius': '6px', 'border-radius': '6px' });
	$("div.sidebar_box").css({ '-moz-border-radius': '8px', '-webkit-border-radius': '8px', 'border-radius': '8px' });
	$("div#price_table table").css({ '-moz-border-radius': '8px', '-webkit-border-radius': '8px', 'border-radius': '8px' });
	$("span.highlight_dark, span.highlight_light").css({ '-moz-border-radius': '2px', '-webkit-border-radius': '2px', 'border-radius': '2px' });
	$("div#about .team ul li a").css({ '-moz-border-radius': '8px', '-webkit-border-radius': '8px', 'border-radius': '8px' });
	$("form .text_field").css({ '-moz-border-radius': '8px', '-webkit-border-radius': '8px', 'border-radius': '8px' });
	$("a.button span").css({ 'text-shadow': '#000 0px -0px 2px' });
	$("div#page .section_title h3").css({ 'text-shadow': '#3e2828 0px 0px 2px' });

	// Button Hover
	if($.browser.msie && $.browser.version == "7.0") {
		$(".button").css("padding-top", "0px");
	} else {
		jQuery('.button').hover(
			function() { jQuery(this).stop().animate({opacity:0.8},400); },
			function() { jQuery(this).stop().animate({opacity:1},400); }
		);
	}
});