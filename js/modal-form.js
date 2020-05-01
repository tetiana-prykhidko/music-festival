// $(document).on("click", "#registration", function() {
// 	$(".modal-wrapper").show();
// });

$(document).on("click", ".close-modal", function() {
	$(".modal-wrapper").removeClass("open");
});

$(document).on("click", "#registration", function() {
	$(".modal-wrapper").toggleClass("open")
})