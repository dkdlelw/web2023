$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown();
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp();
});

document.querySelectorAll("nav > ul >li").forEach(li => {
    li.addEventListener("mouseover",() => {

    });
});