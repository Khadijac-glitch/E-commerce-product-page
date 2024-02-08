const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector(".navbar-nav");
const photo = document.querySelector(".photo_1_invisible");
const plus = document.querySelector("#plus");
const moins = document.querySelector("#moins");
const indicator = document.querySelector(".indicator");
const addBtn = document.querySelector(".btn");
const conteur = document.querySelector(".conteur");
const mainThumbnail = document.querySelector(".photo_1");
const mainThumbnailLightBox = document.querySelector( ".lightbox-container .photo_1");
const lightbox = document.querySelector(".lightbox");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous")
const banner = document.querySelector(".banner_1");
const slide = document.querySelector(".mobile-thumb");
// const images = document.querySelectorAll(".banner_2 img");
const images = document.querySelectorAll(".preview img");

const wrp = document.querySelector(".cart-content");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart-wrp");
let conteurValue = 0;
let currentImg = 1;

function btnPlus() {
    conteurValue++;
    conteur.innerText = conteurValue;
  }
  function btnMoins() {
    if (conteurValue > 0) {
        conteurValue--;
    }
    conteur.innerText = conteurValue;
  }
  function nextImage() {
    if (currentImg == 4) {
      currentImg = 1;
    } else {
      currentImg++;
    }
    slide.src = `images-${currentImg}.jpeg`;
  }
  function prevImage() {
    if (currentImg == 1) {
      currentImg = 4;
    } else {
      currentImg--;
    }
    slide.src = `images-${currentImg}.jpeg`;
  }



function addItem() {
  if (conteurValue > 0) {
      const total = 125.00 * conteurValue;
      wrp.classList.remove("empty");
      wrp.innerHTML = `<div class="product">
                      <div>
                        <img src="images(0).jpg" class="product-img" alt="product">
                        <div class="product-info">
                          <p class="product-title">Fall Limited Edition Sneakers</p>
                         <p><span>$125.00</span> × <span class="number">${conteurValue}</span> <b>$${total}</b></p>
                        </div>
                        <button class="delete-btn" onclick="deleteItem()"><img src="icon-delete.svg" alt="delete" style="width:20px;"></button>
                      </div>
                      <button class="checkout-btn" style="height:40px,padding-top:3px;">Checkout</button>
                    </div>`;
      indicator.style.display = "block";
      indicator.innerText = conteurValue;
  }
}

function deleteItem() {
  wrp.classList.add("empty");
  wrp.innerHTML = `<p>Your cart is empty</p>`;
  indicator.style.display = "none";
  conteurValue = 0; 
}

images.forEach((image) => {
  image.addEventListener("click", () => {
      const lastImg = document.querySelectorAll(".select");
      if (lastImg.length > 0) {
          lastImg[0].classList.remove("select");
      }
      image.classList.add("select");
      const selectedImg = document.querySelector(".select");
      switch (selectedImg.getAttribute("src")) {
          case "images(0).jpg":
              mainThumbnail.src = "images(0).jpg";
              mainThumbnailLightBox.src = "images(0).jpg";
              break;
          case "images.jpeg":
              mainThumbnail.src = "images.jpeg";
              mainThumbnailLightBox.src = "images.jpeg";
              break;
          case "images (1).jpeg":
              mainThumbnail.src = "images (1).jpeg";
              mainThumbnailLightBox.src = "images (1).jpeg";
              break;
          case "images (2).jpeg":
              mainThumbnail.src = "images (2).jpeg";
              mainThumbnailLightBox.src = "images (2).jpeg";
              break;
      }
  });
});
  function toggleCart() {
    cart.classList.toggle("invisible");
  }
  function closeLightBox() {
    lightbox.classList.add("invisible");
  }
  function openLightBox() {
    lightbox.classList.remove("invisible");
  }

  plus.addEventListener("click", btnPlus);
  moins.addEventListener("click", btnMoins);
  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);
  addBtn.addEventListener("click", addItem);
  cartBtn.addEventListener("click", toggleCart);
  closeLightboxBtn.addEventListener("click", closeLightBox);
  mainThumbnail.addEventListener("click", openLightBox);
