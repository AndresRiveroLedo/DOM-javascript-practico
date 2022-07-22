/*Menu desplegable email */
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
/*Menu desplegable mobile */
const menuHamIcon = document.querySelector('.menuHamIcon');
const mobileMenu = document.querySelector('.mobile-menu');

/*Menu desplegable carrito */
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const myOrderCard = document.querySelector('.product-detail')

const cardsContainer=document.querySelector('.cards-container');

//Array de producto
const product = [];

/*Eventos*/
navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMyOrderCard)

/**Funciones */
function toggleDesktopMenu() {
    const isMyOrderCardOpen = !myOrderCard.classList.toggle('inactive');

    if (isMyOrderCardOpen) {
        myOrderCard.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isMyOrderCardOpen = !myOrderCard.classList.toggle('inactive');

    if (isMyOrderCardOpen) {
        myOrderCard.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleMyOrderCard() {
    const isMobileMenuOpen = !mobileMenu.classList.toggle('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.toggle('inactive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');

    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }


    myOrderCard.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}, {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProductList(arr) {
    /*
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div>
  */
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoCard = document.createElement('div');

        const priceProduct = document.createElement('p');
        priceProduct.innerText = '$' + product.price;
        const nameProduct = document.createElement('p');
        nameProduct.innerText = product.name;

        const figureCart = document.createElement('figure');

        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');


        figureCart.appendChild(imgCart);

        productInfoCard.appendChild(priceProduct);
        productInfoCard.appendChild(nameProduct);

        productInfo.appendChild(productInfoCard);
        productInfo.appendChild(figureCart);


        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

        console.log('prueba1')

    }

}

renderProductList(productList);
