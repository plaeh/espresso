$(document).ready(function() {


var IMAGE_HEIGHT = 150
var DURATION = 2000
var ITEM_COUNT = 3
var $play = $('#play')
var $message = $('#outcome .message')

var results = [
    "Enjoy",
    "Coffee Time!",
    "Drink up!",
    "Yum!",
    "Coffee~",
    "Tea",
    "Espresso!",
    "Tasty!",
    "Tea Time!"
]

$play.click(function() {
    var spin_value = Math.floor(Math.random()*ITEM_COUNT);

    var display_results = _.after(ITEM_COUNT, function() {
        var random_result_text = results[Math.floor(Math.random() * results.length)]
        $message.text(random_result_text)
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

