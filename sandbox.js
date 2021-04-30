// Animate dropdown links
$("#myshowcase .mydropdownex a").mouseenter(function() {
    $(this).animate({fontSize: "1.25rem" , fontWeight:"700"} , 200);
});

$("#myshowcase .mydropdownex a").mouseleave(function() {
    $(this).animate({fontSize: "1.2rem" , fontWeight:"300"} , 200);
});

$("#myshowcase .mydropbtn").click(function(event) {
    $("#myshowcase .mydropdown").fadeToggle(400);
    event.preventDefault();
});

// $(function(){
//     if ($("#myshowcase .mydropdown").css({"display":""})) {
//         $(window).click(function() {
//             $("#myshowcase .mydropdown").fadeOut(400);
//         });
//     }
// });

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
$(".mypostimg img").mouseenter(function() {
    $(this).css({"filter":"brightness(0.3)"});
});

$(".mypostcaption").mouseleave(function() {
    $(".mypostimg img").css({"filter":"brightness(1)"});
});

//Setting the caption division height to the height of the picture
$(function(event){
    var h = $(".mypostimg img").height();
    $(".mypostcaption").height(h);
    event.preventDefault();
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
