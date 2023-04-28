  //위에서 아래로
  const sliderWrap = document.querySelector("#slider__wrap");
  const sliderImg = sliderWrap.querySelector(".slider__img");     //보여지는 영역
  const sliderInner = sliderWrap.querySelector(".slider__inner"); //움직이는 영역
  const slider = sliderWrap.querySelectorAll(".slider");          //개별 이미지

  let currentIndex = 0;               
  let sliderCount = slider.length;    
  let sliderInterval = 1000;          

 
  sliderImg.style.transition = "all 0.6s"

  setInterval(() => {
      currentIndex = (currentIndex + 1) % sliderCount;    

      sliderImg.style.transform = "translateY("+ 450 * currentIndex + "px)";
  }, sliderInterval);