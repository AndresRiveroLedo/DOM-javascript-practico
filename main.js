/*Menu desplegable email */
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
/*Menu desplegable mobile */
const menuHamIcon = document.querySelector('.menuHamIcon');
const mobileMenu = document.querySelector('.mobile-menu');

/*Menu desplegable carrito */
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const myOrderCard = document.querySelector('.product-detail')


/*Eventos*/
navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMyOrderCard)

/**Funciones */
function toggleDesktopMenu(){
    const isMyOrderCardOpen = !myOrderCard.classList.toggle('inactive');

    if(isMyOrderCardOpen){
        myOrderCard.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isMyOrderCardOpen = !myOrderCard.classList.toggle('inactive');

    if(isMyOrderCardOpen){
        myOrderCard.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleMyOrderCard(){
    const isMobileMenuOpen = !mobileMenu.classList.toggle('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.toggle('inactive');

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
   
    }

    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }


    myOrderCard.classList.toggle('inactive');
}