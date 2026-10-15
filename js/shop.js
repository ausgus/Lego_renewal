









// --------------productsList---------------

const products = [
  {
    name: 'Oracle Red Bull<br>Racing RB20 F1 레이스 카',
    category: ['vehicle', 'F1'],
    price: 319000,
    img: 'images/vehicle/F1_OracleRedBullRacingRB20F1.png'
  },
  
  {
    name: 'Ducati Desmo450 <br>MX Factory 모터사이클',
    category: ['vehicle', 'motorCycle'],
    price: 78900,
    img: 'images/vehicle/motorCycle_DucatiDesmoMXFactory450.png'
  },

  {
    name: 'Kawasaki Ninja H2R <br>모터사이클',
    category: ['vehicle', 'motorCycle'],
    price: 114900,
    img: 'images/vehicle/motorCycle_KawasakiNinjaH2R.png'
  },

  {
    name: 'McLaren P1™',
    category: ['vehicle', 'McLaren'],
    price: 599900,
    img: 'images/vehicle/car_McLarenP1.png'
  },

  {
    name: "Koenigsegg Sadair's<br>Spear Megacar",
    category: ['vehicle', 'car'],
    price: 300000,
    img: 'images/vehicle/car_KoenigseggSadairSpearMegacar.png'
  },

  {
    name: "Mercedes-AMG F1<br>W14 E Performance",
    category: ['vehicle', 'F1'],
    price: 289900,
    img: 'images/vehicle/F1_Mercedes-AMGF1W14EPerformance.png'
  },

  {
    name: "Aston Martin Aramco<br>AMR25 F1® 레이스카",
    category: ['vehicle', 'F1'],
    price: 339900,
    img: 'images/vehicle/F1_AstonMartinAramcoAMR25F1.png'
  },

  {
    name: "Ferrari SF-24 F1 레이스 카",
    category: ['vehicle', 'F1'],
    price: 319900,
    img: 'images/vehicle/F1_FerrariSF-24F1.png'
  },

  {
    name: "Ducati Desmo450<br>모터사이클",
    category: ['vehicle', 'motorCycle'],
    price: 78900,
    img: 'images/vehicle/mortorCycle_DucatiDesmo450.png'
  },

  {
    name: "McLaren MCL39 F1® 자동차",
    category: ['vehicle', 'car'],
    price: 289900,
    img: 'images/vehicle/F1_McLarenMCL39F1.png'
  },

  {
    name: "배트맨 2™ 배트모빌™",
    category: ['vehicle', 'car', 'movie'],
    price: 319900,
    img: 'images/vehicle/car_BatmanBatmobile.png'
  },

  {
    name: "Fast and Furious<br>Dodge Charger R/T 자동차",
    category: ['vehicle', 'car'],
    price: 229900,
    img: 'images/vehicle/car_FastandFuriousDodgeChargerR:T.png'
  },

  {
    name: "",
    category: ['architech'],
    price: 0,
    img: 'images/architech/'
  },

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
  };

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


const mobileCategoryBtns = document.querySelectorAll('.mobile-category-list button');

mobileCategoryBtns.forEach(function(btn){
  btn.addEventListener('click', function(){
    const selectedCategory = this.dataset.category;

    mobileCategoryBtns.forEach(function(btn){
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