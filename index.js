$(document).ready(function() {
	$("img").click(function() {
		showGallery($(this)[0].src);
	});

	$(".close").click(function() {
		$(".gallery").removeClass("show");
	});
});

function showGallery(value) {
	$(".gallery").addClass("show");
	$(".gallery-inner img").attr("src", value);
}