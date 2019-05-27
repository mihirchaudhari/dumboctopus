main();

function main() {
	loadStuff();
	parallax();
}

function loadStuff() {
	$("#top-nav").load("/docs/pages/top_nav.html")
}

function nextSlide(obj, amount) {
	var slides = $(obj).parent().children(".slide");
	var numOfSlides = slides.length;
	var visibleIndex = 0;

	indexSearcher:
	for (var i = 0; i < numOfSlides; i++) {
		if ($(slides[i]).hasClass("visible")) {
			$(slides[i]).addClass("hidden");
			$(slides[i]).removeClass("visible");
			visibleIndex = i;
			break indexSearcher;
		}
	}

	if (amount == -1 && visibleIndex == 0) {
		visibleIndex = numOfSlides - 1;
	} else if (amount == 1 && visibleIndex == numOfSlides - 1) {
		visibleIndex = 0
	} else {
		visibleIndex += amount;
	}

	$(slides[visibleIndex]).removeClass("hidden");
	$(slides[visibleIndex]).addClass("visible");
}

function parallax() {
	$(window).scroll(function(){
		if($(window).width() > 540) {
			var scrollTop = $(window).scrollTop();
			for (var i = 0; i < $(".parallax").length; i++) {
				$(document.getElementsByClassName("parallax")[i]).css("height", "calc(" + $(document.getElementsByClassName("parallax")[i]).attr("autoheight") + " - " + scrollTop + "px)")
			}
		}
	});
}
