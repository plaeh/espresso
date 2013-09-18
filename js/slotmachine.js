$(document).ready(function() {


var IMAGE_HEIGHT = 150
var DURATION = 2000
var ITEM_COUNT = 3
var $play = $('#play')
var $message = $('#outcome .message')

var results = [
    "Enjoy",
    "Taste your time",
    "Drink up!",
    "Yum!",
    "Apples!",
    "Tasty!",
    "Tasty Time!"
]

var images = [
    '/img/coffee.jpg',
    '/img/espresso.jpg',
    '/img/tea.jpg'
]

$play.click(function() {
    var spin_value = Math.floor(Math.random()*ITEM_COUNT)
    var display_results = _.after(ITEM_COUNT, function() {
        var random_result_text = results[Math.floor(Math.random() * results.length)]
        var correct_image = images[spin_value]

        $message.html(
            '<img src="' + correct_image + '">' + 
            '<h5>' + random_result_text + '</h5>'
        )
    })

    goToPosition('machine', spin_value, display_results)
    goToPosition('filter', spin_value, display_results)
    goToPosition('material', spin_value, display_results)
})

function goToPosition(slot_type, position, callback) {
    var slot = $('.slot#' + slot_type)
    var offset = ( 10 * ITEM_COUNT + position ) * IMAGE_HEIGHT

    slot.css({ 'background-position-y': '0px' })

    slot.animate({ 'background-position-y': offset + 'px' }, DURATION, callback)
}


})