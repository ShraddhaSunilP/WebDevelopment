//We have added those class created in style.css And apply the h1 tag using jQuery.

// Manipulating the element with jQuery and Style with jQuery
$("h1").addClass("big-title margin-50"); 

// Manipulating the text with jQuery 
 $("button").text("Don't Click Me");

// Manipulating the Attributes with jQuery  
$("a").attr("href", "https://www.yahoo.com");

// Adding and removing elements with jQuery add the event
// listener and call callback function 
$("button").click(function(){
    $("h1").css("color","purple");
})

// Explanation : When we click on any button that time callback 
// function will call and apply the purple color on h1
$(document).keypress(function(event){
    $("h1").text(event.key);
});

// hide the element
$("button").on("click", function() {
    $("h1").hide();
});

// toggle the element
$("button").on("click", function() {
    $("h1").toggle();
})

// slideToggle the element
$("button").on("click", function() {
    $("h1").slideToggle();
})

// animate the element
$("button").on("click", function(){
    $("h1").animate({opacity:0.5})
});

// animate the element to change place
$("button").on("click", function(){
    $("h1").animate({margin:"20%"})
});

// sideup and slidedown
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({capacity:0.5});
})