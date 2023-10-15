// open and close promotion sidebar
const promotionSideBarElement = document.querySelector('.promotion-sidebar')
const promotionSidebarOpenButtonElement = document.querySelector('.promotion-sidebar-open-button')
const promotionSideBarCloseButtonElement = document.querySelector('.promotion-sidebar-close-button')

promotionSidebarOpenButtonElement.onclick = () => {
    promotionSideBarElement.classList.add('promotion-sidebar-open')
}

promotionSideBarCloseButtonElement.onclick = () => {
    promotionSideBarElement.classList.remove('promotion-sidebar-open')
}