// Animate dropdown links
$("#myshowcase .mydropdownex a").mouseenter(function() {
    $(this).animate({fontSize: "1.25rem" , fontWeight:"700"} , 200);
});

$("#myshowcase .mydropdownex a").mouseleave(function() {
    $(this).animate({fontSize: "1.2rem" , fontWeight:"300"} , 200);
});

//Dropdown slider in mobile
$(".mydropbtn").click(function(event){
    $(".mydropdown").fadeToggle(400);
    event.preventDefault();
});

$( window ).resize(function() {
    $(".mydropdown").hide(1);
    $("#mysortmenu").hide(1);
});

// Search bar options
$(".mysearch input").keyup(function(){
    $("#myclearbtn i").css({"display":"inline"});
    if ($(".mysearch input").val() == ""){
        $("#myclearbtn i").css({"display":"none"});
    }
});

$("#myclearbtn").click(function() {
    $(".mysearch input").val("");
    $("#myclearbtn i").css({"display":"none"});
});

// Loader
$("#myshowcase").ready(function(){
    $("#myloader").fadeOut(500);
});

// Navbar hide
$(window).scroll(function(event) {
    if($(window).scrollTop()>10){
        $(".navbar").css({"backgroundColor":"rgba(0 , 0 , 0 , 0.9)"});
    }else{
        $(".navbar").css({"backgroundColor":"rgba(0 , 0 , 0 , 0.1)"});
    }
});

//Post image hover effect
$(".mypost").mouseenter(function(){
    $(function(event){
        var h = $(".mypostimg img").height();
        $(".mypostcaption").height(h);
        event.preventDefault();
    });
});

$(".mypostimg img").mouseenter(function() {
    $(this).css({"filter":"brightness(0.3)"});
    $(".mypostcaption div").fadeIn(1);
});

$(".mypostcaption").mouseleave(function() {
    $(".mypostimg img").css({"filter":"brightness(1)"});
});


//Sort button functions
$(function(event){
    var l = $(".sortby").width();
    l += 18.5 ;
    $("#mysortmenu").css({"left":l});
    event.preventDefault();
});

$("#mysorter").click(function(event){
    $("#mysortmenu").slideToggle(200);
    event.preventDefault();
});