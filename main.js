let header=document.querySelector("header");window.addEventListener("scroll",()=>{header.classList.toggle("shadow",0<window.scrollY)});let menu=document.querySelector("#menu-icon"),navbar=document.querySelector(".navbar");menu.onclick=()=>{menu.classList.toggle("bx-x"),navbar.classList.toggle("active")},window.onscroll=()=>{menu.classList.remove("bx-x"),navbar.classList.remove("active")};var swiper=new Swiper(".home",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),swiper=new Swiper(".coming-container",{spaceBetween:20,loop:!0,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{0:{slidesPerView:2},568:{slidesPerView:3},768:{slidesPerView:4},968:{slidesPerView:5}}});