
function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}


Product.prototype.getDiscountedPrice = function(percent) {
  return this.price - (this.price * percent / 100);
};


var allProducts = [
  new Product("Laptop", 5000, "Electronics"),
  new Product("Wrist Watch", 2000, "Accessories"),
  new Product("Shirt", 1000, "Clothing"),
  new Product("Shoes", 3000, "Fashion")
];


(function() {
  var container = document.getElementById("productContainer");

  var maxPrice = document.getElementById("costliestPrice");


  for (var i = 0; i < allProducts.length; i++) {

    var p = allProducts[i];

    var card = document.createElement("div");
    card.className = "product-card";

    var name = document.createElement("h2");
    name.textContent = p.name;

    var price = document.createElement("p");
    price.textContent = "Price: " + p.price;

    var category = document.createElement("p");
    category.textContent = "Category: " + p.category;

    var discount = document.createElement("p");
    discount.textContent = "10% Off: " + p.getDiscountedPrice(10);



    card.addEventListener("mouseover", function() {
      this.style.backgroundColor = "#f0f8ff";
    });
    
    card.addEventListener("mouseout", function() {
      this.style.backgroundColor = "white";
    });


    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(category);
    card.appendChild(discount);

    container.appendChild(card);
  }


  function findCostliest(products) {
    var max = products[0].price;
    for (var i = 1; i < products.length; i++) {
      if (products[i].price > max) {
        max = products[i].price;
      }
    }
    return max;
  }


  var highestPrice = findCostliest.call(this, allProducts);

  maxPrice.textContent = "Price of costliest product is " + highestPrice;
})();
    