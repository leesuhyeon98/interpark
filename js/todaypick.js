window.addEventListener("load", function(){
    var swiper = new Swiper(".sw-todaypick", {
        // slidesPerView: 2,
        // spaceBetween: 25,
        navigation: {
            nextEl: ".todaypick .sw-next",
            prevEl: ".todaypick .sw-prev",
        },
        loop:true,
        pagination: {
        el: ".sw-topick-pg",
        clickable:true,
      },
        // loop 기본값은 false
        breakpoints: {
            // 화면사이즈가 760 이상 일때 작동
            320:{
                slidesPerView: 1,
                spaceBetween: 25,
            },
            760: {
                slidesPerView: 2,
                spaceBetween: 25,
            }
        }
    });
})



