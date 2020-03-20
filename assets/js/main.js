function myFunction(x){
    x.classList.toggle("change");
};

$(document).ready(function(){
    $("hamburger").click(function(){
    $("bar3").addClass("active");
    });
});