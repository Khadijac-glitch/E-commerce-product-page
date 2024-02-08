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
                          <button class="delete-btn" onclick="deleteItem()"><img src="icon-delete.svg" alt="delete"></button>
                        </div>
                        <button class="checkout-btn">Checkout</button>
                      </div>`;
        indicator.style.display = "block";
        indicator.innerText = conteurValue;
    }
}

function deleteItem() {
    wrp.classList.add("empty");
    wrp.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
    conteurValue = 0; // Reset conteurValue when deleting items
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
