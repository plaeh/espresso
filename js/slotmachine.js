$(document).ready(function() {


var IMAGE_HEIGHT = 150;
var DURATION = 10000; 
var ITEM_COUNT = 3; 
var RANDOM = Math.floor(Math.random()*3);
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
    goToPosition('machine', 300)
    goToPosition('filter', 300)
    goToPosition('material', 300)
    var random_result_text = results[Math.floor(Math.random() * results.length)]
    _.after(alert(random_result_text));

})


function goToPosition(slot_type, position) {
    var slot = $('.slot#' + slot_type)
    var offset = position * IMAGE_HEIGHT


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

var random_result_text = results[Math.floor(Math.random() * results.length)]
_.after(alert(random_result_text));


})
