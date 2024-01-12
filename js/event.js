window.addEventListener("load", function(){
    // 이벤트 데이터
    let eventDeta = {
        item_cont:16,
        item_1:{link:"#",pic:"event_1.jpg"},
        item_2:{link:"#",pic:"event_2.jpg"},
        item_3:{link:"#",pic:"event_3.jpg"},
        item_4:{link:"#",pic:"event_4.png"},
        item_5:{link:"#",pic:"event_5.jpg"},
        item_6:{link:"#",pic:"event_6.png"},
        item_7:{link:"#",pic:"event_7.jpg"},
        item_8:{link:"#",pic:"event_8.png"},
        item_9:{link:"#",pic:"event_9.jpg"},
        item_10:{link:"#",pic:"event_10.jpg"},
        item_11:{link:"#",pic:"event_11.jpg"},
        item_12:{link:"#",pic:"event_12.jpg"},
        item_13:{link:"#",pic:"event_13.jpg"},
        item_14:{link:"#",pic:"event_14.png"},
        item_15:{link:"#",pic:"event_15.jpg"},
        item_16:{link:"#",pic:"event_16.jpg"},
    }

    let swEventHtml = ``;
    for(let i = 0; i < eventDeta.item_cont; i++){
        let obj = eventDeta[`item_${i+1}`];
        let temp = `
        <li class="swiper-slide">
            <a href="${obj.link}">
                <img src="img/${obj.pic}" alt="">
            </a>
        </li>
        `
        swEventHtml += temp;
    }
    let swEventWrapper = document.querySelector(".sw-event .swiper-wrapper");
    swEventWrapper.innerHTML = swEventHtml;

    let swEventSwiper = new Swiper(".sw-event", {
        // slidesPerView: 2,
        // spaceBetween: 25,
        navigation: {
            nextEl: ".event .sw-next",
            prevEl: ".event .sw-prev",
        },
        slidesPerView: 3,
        spaceBetween: 27,        
        // loop 기본값은 false
        breakpoints: {
            // 화면사이즈가 1280 이상 일때 작동
            1280:{
                slidesPerView: 4,
                spaceBetween: 25,
            }
        }
    });
})