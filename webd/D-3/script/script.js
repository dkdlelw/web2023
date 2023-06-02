//이미지 슬라이드
$(function(){
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").last().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginTop: -400 * currentIndex + "px" }, 600)
    
        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginTop: 0}, 0);
                currentIndex = 0;
            }, 700)
        }
    }, 3000);



    //메뉴
    window.onload = function(){
        let navList = document.querySelector(".nav > ul");

        navList.addEventListener("mouseover", function(){
            navList.querySelectorAll(".submenu").forEach(sub => {
                sub.style.display = "block";
            });
            document.getElementById("main").classList.add("on");
        });
        navList.addEventListener("mouseout", function(){
            navList.querySelectorAll(".submenu").forEach(sub => {
                sub.style.display = "none";
            });
            document.getElementById("main").classList.remove("on");
        });
    }
})
