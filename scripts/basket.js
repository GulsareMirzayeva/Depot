function getBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    let html = "";
    basket.forEach(item => {
      html += `
        <div class="cart-product">
          <div class="pr-img">
            <img src=${item.image} alt="">
          </div>
          <div class="pr-detail">
            <div class="pr-title">${item.name}</div>
            <div class="pr-price">$${item.price}</div>
          </div>
          <div data-id=${item.id} class="pr-btn"><i class="fas fa-times"></i></div>
        </div>
      `;
    });
  
    document.querySelector('.cart-products').innerHTML = html;
  
    // Update cart item count
    document.querySelector('#cart-count').textContent = basket.length;
  }
  function setupRemoveButtons() {
    var xBtns = document.querySelectorAll('.pr-btn');
    xBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        let basket = JSON.parse(localStorage.getItem("basket"));
        let data_id = this.getAttribute("data-id");
        let itemIndex = basket.findIndex(a => a.id === data_id);
  
        if (itemIndex !== -1) {
          basket.splice(itemIndex, 1);
          this.closest(".cart-product").remove();
          localStorage.setItem("basket", JSON.stringify(basket));
          getBasket();  // Update the cart display after removing an item
        }
      });
    });
  }
  
  // Call setupRemoveButtons after updating the cart
  getBasket();
  setupRemoveButtons();
  