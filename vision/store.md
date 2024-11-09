---
layout: default
title: Store
---

<section id="store" class="store-section py-5">
  <div class="container">
    <h2 class="text-center text-primary mb-5">Our Collection</h2>

    <!-- Search Bar -->
    <div class="row mb-4 justify-content-center">
      <div class="col-md-6">
        <input type="text" id="search" class="form-control" placeholder="Search products..." onkeyup="filterProducts()">
      </div>
    </div>

    <div class="row gy-4" id="product-list">
      {% for product in site.data.products %}
      <div class="col-sm-6 col-md-4 col-lg-3 product-card" data-name="{{ product.name | downcase }}">
        <div class="card h-100 shadow-sm">
          <!-- <img src="{{ '/assets/images/' | append: product.image | relative_url }}" class="card-img-top" alt="{{ product.name }}"> -->
          <img src="https://picsum.photos/200" class="card-img-top" alt="{{ product.name }}">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<script>
// JavaScript for Product Search
function filterProducts() {
  const query = document.getElementById('search').value.toLowerCase();
  const products = document.querySelectorAll('.product-card');
  
  products.forEach(product => {
    const name = product.getAttribute('data-name');
    if (name.includes(query)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
</script>
