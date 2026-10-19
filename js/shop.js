









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
    category: ['vehicle', 'car', 'collection', 'movie'],
    price: 319900,
    img: 'images/vehicle/car_BatmanBatmobile.png'
  },

  {
    name: "Fast and Furious<br>Dodge Charger R/T 자동차",
    category: ['vehicle', 'car'],
    price: 229900,
    img: 'images/vehicle/car_FastandFuriousDodgeChargerR:T.png'
  },
// ----------------------------건축
  {
    name: "파리: 사랑의 도시",
    category: ['architech'],
    block: 958,
    price: 109900,
    img: 'images/architech/pari.png'
  },

  {
    name: "타워 브리지",
    category: ['architech'],
    block: 3745,
    price: 449900,
    img: 'images/architech/Towerbridge.png'
  },

  {
    name: "노이슈반슈타인의 성",
    category: ['architech'],
    block: 3455,
    price: 369900,
    img: 'images/architech/NeuschwansteinCastle.png'
  },

  {
    name: "사그라다 파밀리아",
    category: ['architech'],
    block: 12060,
    price: 300000,
    img: 'images/architech/FamiliadelaZaragza.png'
  },

  {
    name: "트래비 분수",
    category: ['architech'],
    block: 1880,
    price: 219900,
    img: 'images/architech/FountainofTrevi.png'
  },

  {
    name: "히메지 성",
    category: ['architech'],
    block: 1643,
    price: 209900,
    img: 'images/architech/HimejiCastle.png'
  },

  {
    name: "레고® 하우스",
    category: ['architech'],
    block: 774,
    price: 69900,
    img: 'images/architech/LEGOHouse.png'
  },

  {
    name: "뉴욗티: 빅 애플",
    category: ['architech'],
    block: 1465,
    price: 219900,
    img: 'images/architech/BigApple.png'
  },

  {
    name: "런던",
    category: ['architech'],
    block: 468,
    price: 64900,
    img: 'images/architech/London.png'
  },

  {
    name: "파리 노트르담",
    category: ['architech'],
    block: 4383,
    price: 299900,
    img: 'images/architech/NotreDame.png'
  },


// ----------------------------------art
  {
    name: "클로드 모네:<br>수련 연못 위의 다리",
    category: ['art'],
    block: 3719,
    price: 279900,
    img: 'images/art/mone.png'
  },

  {
    name: "Vincent van Gogh:<br>해바라기",
    category: ['art'],
    block: 2615,
    price: 279900,
    img: 'images/art/Gogh.png'
  },

  {
    name: "은하수 은하계",
    category: ['art'],
    block: 3091,
    price: 259900,
    img: 'images/art/milkyway.png'
  },

  {
    name: "Gustav Klimt: 키스",
    category: ['art'],
    block: 4000,
    price: 449900,
    img: 'images/art/kiss.png'
  },

  {
    name: "키스 해링: 댄싱 피겨",
    category: ['art'],
    block: 1773,
    price: 169900,
    img: 'images/art/Dance.png'
  },

  {
    name: "LOVE",
    category: ['art'],
    block: 791,
    price: 104900,
    img: 'images/art/love.png'
  },

  {
    name: "조커 월아트 만화 표지",
    category: ['art'],
    block: 1849,
    price: 249900,
    img: 'images/art/Joker.png'
  },

  {
    name: "벚꽃 풍경",
    category: ['art'],
    block: 1892,
    price: 169900,
    img: 'images/art/blossoms.png'
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