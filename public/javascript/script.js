function attachEventHandlers() {
	$('.play').on('click', handleImageClick);
	$('.cardimg').on('click', handleImageClick);
}

/*function handleImageClick(event) {
	const target = $(event.target);
	const card =  $(event.target).closest('card');
	const cardimg = $(event.target).closest('card').find('cardimg');
	const images = $('.card .cardimg');
	const info = $('.info-pane');
	const preview = $('.preview-image');

	if (card.hasClass('selected')) {
		//images.removeClass('not-selected');
		card.removeClass('selected');
		info.fadeOut(200);
	}
	else {
		images.removeClass('selected');
		//images.addClass('not-selected');

		card.addClass('selected');
		//target.removeClass('not-selected');

		info.fadeIn(200);
		preview.css('background-image', cardimg.css('background-image'));
	}
}

$('document').ready(function() {

	attachEventHandlers();

});*/
var hello = null;

function handleImageClick(event) {
	const target = $(event.target);
	const images = hello;
	hello = target;
	const info = $('.info-pane');
	const preview = $('.preview-image');

	if (target.hasClass('selected')) {
		//images.removeClass('not-selected');
		target.removeClass('selected');
		info.fadeOut(200);
	}
	else {
		images.removeClass('selected');
		//images.addClass('not-selected');

		target.addClass('selected');
		//target.removeClass('not-selected');

		info.fadeIn(200);
		preview.css('background-image', target.css('background-image'));
	}
}

$('document').ready(function() {

	attachEventHandlers();

});