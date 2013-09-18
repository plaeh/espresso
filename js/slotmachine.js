$(document).ready(function() {


var IMAGE_HEIGHT = 150;
var DURATION = 10000; 
var ITEM_COUNT = 3; 
var $play = $('#play')

var results = new Array();
    results[0] = "Enjoy";
    results[1] = "Coffee Time!";
    results[2] = "Drink up!";
    results[3] = "Yum!";
    results[4] = "Coffee~";
    results[5] = "Tea";
    results[6] = "Espresso!";
    results[7] = "Tasty!";
    results[8] = "Tea Time!";



$play.click(function(){
    var spin_value = Math.floor(Math.random()*ITEM_COUNT)

    goToPosition('machine', spin_value)
    goToPosition('filter', spin_value)
    goToPosition('material', spin_value)
})


function goToPosition(slot_type, position) {
    var slot = $('.slot#' + slot_type)
    var offset = ( ITEM_COUNT + position ) * IMAGE_HEIGHT


    slot.css({ 
        'background-position-y': '0px'
     })


    slot.animate({ 
        'background-position-y': offset + 'px' 
    },
    {
        complete: function(){
            var random_result_text = results[Math.floor(Math.random() * results.length)]
            alert(random_result_text);
        }
    })
}

})
