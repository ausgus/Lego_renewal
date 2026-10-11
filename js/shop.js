const products = [
  {
    name: 'Oracle Red Bull Racing RB20 <br> F1 레이스 카',
    category: ['Vehicle', 'F1'],
    price: 319000,
    img: 'images/vehicle/car.png'
  },
  
  {
    name: 'Ducati Desmo450 <br> 모터사이클',
    category: ['Vehicle', 'motorCycle'],
    price: 78900,
    img: 'images/vehicle/motorCycle_DucatiDesmo450.png'
  },

  {
    name: '',
    category: '',
    price: '',
    img: 'images/'
  },

  {
    name: '',
    category: '',
    price: '',
    img: 'images/'
  },

  {
    name: '',
    category: '',
    price: '',
    img: 'images/'
  },

  {
    name: '',
    category: '',
    price: '',
    img: 'images/'
  },

  {
    name: '',
    category: '',
    price: '',
    img: 'images/'
  },

  {
    name: '',
    category: '',
    price: '',
    img: 'images/'
  },

  {
    name: '',
    category: '',
    price: '',
    img: 'images/'
  },

  {
    name: '',
    category: '',
    price: '',
    img: 'images/'
  },

  {
    name: '',
    category: '',
    price: '',
    img: 'images/'
  },

  {
    name: '',
    category: '',
    price: '',
    img: 'images/'
  },

  {
    name: '',
    category: '',
    price: '',
    img: 'images/'
  }

];

function displayProducts(productArray) {
  const productList = document.querySelector('#productList');
  productList.innerHTML = ``;

  if (productArray.length === 0){
    productList.innerHTML =`
      <div class="empty">
        해당 카테고리의 상품이 없습니다.
      </div>
    `;

    return;
  }

  productArray.forEach(function(product){
    productList.innerHTML += `
      <div class="productCard">
        <img class="productImg" src=${product.img} alt="product">

        <h2 class="productName">
          ${product.name}
        </h2>

        <p class="productPrice">
          ₩${product.price.toLocaleString()}
        </p>
      </div>
    `;
  });
}

displayProducts(products);




const categoryBtns = document.querySelectorAll('.category-list button');


categoryBtns.forEach(function(btn){
  btn.addEventListener('click', function(){
    const selectedCategory = this.dataset.category;

    categoryBtns.forEach(function(btn){
      btn.classList.remove('active');
    });
    
    this.classList.add('active');
    
    
    if (selectedCategory === 'all') {
      displayProducts(products);
    } else {
      const filteredproducts = products.filter(function(product){
        return product.category.includes(selectedCategory); 
      });
      
      
      displayProducts(filteredproducts);
    };

  });
    
});