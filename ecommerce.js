// Banner Slider
let slides = document.querySelectorAll('.hero .slider img');
let currentSlide = 0;
setInterval(()=>{
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].classList.add('active');
},4000);

// Product Modal
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalClose = document.getElementById('modalClose');
const addToCartModal = document.getElementById('addToCartModal');
let cartCount = 0;
const cartCountEl = document.getElementById('cart-count');

document.querySelectorAll('.product-card').forEach(card=>{
  card.addEventListener('click', ()=>{
    modal.style.display = 'flex';
    modalImg.src = card.getAttribute('data-img');
    modalName.textContent = card.getAttribute('data-name');
    modalDesc.textContent = card.getAttribute('data-desc');
    modalPrice.textContent = card.getAttribute('data-price');
  });
});

modalClose.addEventListener('click', ()=>{modal.style.display='none';});

// Add to Cart
addToCartModal.addEventListener('click', ()=>{
  cartCount++;
  cartCountEl.textContent = cartCount;
  addToCartModal.textContent='Added ✓';
  setTimeout(()=> addToCartModal.textContent='Add to Cart',1200);
});
