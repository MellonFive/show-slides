const input = document.querySelector(".input");
const swiperWrapper = document.querySelector(".swiper-wrapper");

let swiper = new Swiper('.swiper', { 
    loop: true,
    autoplay: { delay: 3000 },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", clickable: true },
});

input.addEventListener("change", (event) => {
    const files = event.target.files;

    if (files.length > 0) {
        swiperWrapper.innerHTML = ""; 

        Array.from(files).forEach((file, index) => {
            const reader = new FileReader();

            reader.onload = (e) => {
               
                const slide = document.createElement("div");
                slide.classList.add("swiper-slide");

                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = `Imagem ${index + 1}`;
                slide.appendChild(img);
                swiperWrapper.appendChild(slide);
              
                swiper.update();
            };

            reader.readAsDataURL(file);
        });
  
        setTimeout(() => {
            swiper.destroy(); 
            swiper = new Swiper('.swiper', { 
                loop: true,
                autoplay: { delay: 3000 },
                navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                pagination: { el: ".swiper-pagination", clickable: true },
            });
        }, 100);
    }
});

