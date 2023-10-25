// open and close promotion sidebar
const promotionSideBarElement = document.querySelector('.promotion-sidebar')
const promotionSidebarOpenButtonElement = document.querySelector('.promotion-sidebar-open-button')
const promotionSideBarCloseButtonElement = document.querySelector('.promotion-sidebar-close-button')
const swiperWrapper = document.querySelector('.swiper-wrapper');
const productList = document.querySelector('.product-list');
let url = './styles/db.json'
promotionSidebarOpenButtonElement.onclick = () => {
    promotionSideBarElement.classList.add('promotion-sidebar-open')
}

promotionSideBarCloseButtonElement.onclick = () => {
    promotionSideBarElement.classList.remove('promotion-sidebar-open')
}

const fetchData = async () => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data && data.carousel) {
        data.carousel.forEach((element) => {
           
            const template = `
          
          <div class="swiper-slide"  >
  
              <div class="swiper-text">
              
              <h2>${element.title}</h2>
              <p>${element.decoration}</p>
              </div>
              <div class="swipper-image"  >
              <img  src='${element.carouselImage}' alt=""/>
              </div>
             
          </div>
           
        `;
            swiperWrapper.innerHTML += template;

            const swiper = new Swiper('.swiper', {
                direction: 'horizontal',
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },

                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });
    } else {
        console.log('No colorProducts found in the data.');
    }
};


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
  
}
);