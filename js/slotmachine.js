$(document).ready(function() {


var IMAGE_HEIGHT = 150;
var DURATION = 1000; 
var ITEM_COUNT = 3; 
var RANDOM = Math.floor(Math.random()*3);
var $s1= $('machine')
var $s2 = $('filter')
var $s3 = $('material')
var $play = $('.play')

function goToPosition(slot_type, position) {
    var slot = $('.slot#' + slot_type)
    var offset = position * IMAGE_HEIGHT

    slot.animate({ 
        'background-position-y': offset + 'px' 
    },
    {
        easing: 'easeOut',
        duration: DURATION,
        complete: function(){
            alert('Enjoy!');
        }
    })
}

})
