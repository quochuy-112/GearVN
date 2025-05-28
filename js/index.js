// move slide banner
let slidesBanner = [
    'assets/banner1.jpg',
    'assets/banner2.jpg',
    'assets/banner3.jpg',
    'assets/banner4.jpg'
];

const carousel = document.getElementById('carousel');

slidesBanner.forEach(element => {
    let img = document.createElement('img');
    img.src = element;
    carousel.appendChild(img);
});

let currentSlide = 0;
function moveSlideBanner(currentSlide, carouselWidth) {
    document.getElementById('carousel').style.transform = `translateX(-${currentSlide * carouselWidth}px)`;
}

document.getElementById('banner-next-btn').addEventListener('click', function () {
    const carouselWidth = document.getElementById('carousel').offsetWidth;
    currentSlide = (currentSlide + 1) % slidesBanner.length;
    moveSlideBanner(currentSlide, carouselWidth);
});

document.getElementById('banner-prev-btn').addEventListener('click', function () {
    const carouselWidth = document.getElementById('carousel').offsetWidth;
    currentSlide = (currentSlide - 1 + slidesBanner.length) % slidesBanner.length;
    moveSlideBanner(currentSlide, carouselWidth);
});



// move to show top product
let topProduct1 = [
    {
        id: "topProduct1-product1",
        href: "/pages/product-detail.html",
        imgSrc: "https://product.hstatic.net/200000722513/product/arvn-man-hinh-viewsonic-vx2758a-2k-pro-3-27-ips-2k-240hz-chuyen-game-1_0ac8558a64af48e8b57f5f739acea9fa_grande.jpg",
        imgAlt: "Sản phẩm 1",
        title: "Màn hình ViewSonic VX2758A-2K-PRO-3 27' IPS 2K 240Hz chuyên game",
        specs: {
            gpu: "RTX 4090",
            cpu: "i5 12400H",
            mainboard: "B760",
            ram: "16GB",
            storage: "500GB"
        },
        rating: {
            stars: 4.5,
            votes: 1044
        },
        price: "19,000,000"
    },
    {
        id: "topProduct1-product2",
        href: "/pages/product-detail.html",
        imgSrc: "https://product.hstatic.net/200000722513/product/arvn-man-hinh-viewsonic-vx2758a-2k-pro-3-27-ips-2k-240hz-chuyen-game-2_9feaf2db9a6f4caf88c45a4b18e7ae54_grande.jpg",
        imgAlt: "Sản phẩm 1",
        title: "Màn hình ViewSonic VX2758A-2K-PRO-3 27' IPS 2K 240Hz chuyên game",
        specs: {
            gpu: "RTX 4090",
            cpu: "i5 12400H",
            mainboard: "B760",
            ram: "16GB",
            storage: "500GB"
        },
        rating: {
            stars: 4.5,
            votes: 1044
        },
        price: "49,000,000"
    },
    {
        id: "topProduct1-product3",
        href: "/pages/product-detail.html",
        imgSrc: "https://product.hstatic.net/200000722513/product/arvn-man-hinh-viewsonic-vx2758a-2k-pro-3-27-ips-2k-240hz-chuyen-game-4_c1005946a2ce49d184f164a7313b54b9_grande.jpg",
        imgAlt: "Sản phẩm 1",
        title: "Màn hình ViewSonic VX2758A-2K-PRO-3 27' IPS 2K 240Hz chuyên game",
        specs: {
            gpu: "RTX 4090",
            cpu: "i5 12400H",
            mainboard: "B760",
            ram: "16GB",
            storage: "500GB"
        },
        rating: {
            stars: 4.5,
            votes: 1044
        },
        price: "49,000,000"
    },
    {
        id: "topProduct1-product4",
        href: "/pages/product-detail.html",
        imgSrc: "https://product.hstatic.net/200000722513/product/q27g11e_f_aed8857ee655455882a9026355d2f6b2_grande.png",
        imgAlt: "Sản phẩm 1",
        title: "Màn hình ViewSonic VX2758A-2K-PRO-3 27' IPS 2K 240Hz chuyên game",
        specs: {
            gpu: "RTX 4090",
            cpu: "i5 12400H",
            mainboard: "B760",
            ram: "16GB",
            storage: "500GB"
        },
        rating: {
            stars: 4.5,
            votes: 1044
        },
        price: "49,000,000"
    },
    {
        id: "topProduct1-product5",
        href: "/pages/product-detail.html",
        imgSrc: "https://product.hstatic.net/200000722513/product/arvn-man-hinh-viewsonic-vx2758a-2k-pro-3-27-ips-2k-240hz-chuyen-game-1_0ac8558a64af48e8b57f5f739acea9fa_grande.jpg",
        imgAlt: "Sản phẩm 1",
        title: "Màn hình ViewSonic VX2758A-2K-PRO-3 27' IPS 2K 240Hz chuyên game",
        specs: {
            gpu: "RTX 4090",
            cpu: "i5 12400H",
            mainboard: "B760",
            ram: "16GB",
            storage: "500GB"
        },
        rating: {
            stars: 4.5,
            votes: 1044
        },
        price: "49,000,000"
    }
];

let topProduct2 = [
    {
        id: "topproduct2-product1",
        href: "/pages/product-detail.html",
        imgSrc: "https://product.hstatic.net/200000722513/product/arvn-man-hinh-viewsonic-vx2758a-2k-pro-3-27-ips-2k-240hz-chuyen-game-1_0ac8558a64af48e8b57f5f739acea9fa_grande.jpg",
        imgAlt: "Sản phẩm 1",
        title: "Màn hình ViewSonic VX2758A-2K-PRO-3 27' IPS 2K 240Hz chuyên game",
        specs: {
            gpu: "RTX 4090",
            cpu: "i5 12400H",
            mainboard: "B760",
            ram: "16GB",
            storage: "500GB"
        },
        rating: {
            stars: 4.5,
            votes: 1044
        },
        price: "19,000,000"
    },
    {
        id: "topproduct2-product2",
        href: "/pages/product-detail.html",
        imgSrc: "https://product.hstatic.net/200000722513/product/arvn-man-hinh-viewsonic-vx2758a-2k-pro-3-27-ips-2k-240hz-chuyen-game-2_9feaf2db9a6f4caf88c45a4b18e7ae54_grande.jpg",
        imgAlt: "Sản phẩm 1",
        title: "Màn hình ViewSonic VX2758A-2K-PRO-3 27' IPS 2K 240Hz chuyên game",
        specs: {
            gpu: "RTX 4090",
            cpu: "i5 12400H",
            mainboard: "B760",
            ram: "16GB",
            storage: "500GB"
        },
        rating: {
            stars: 4.5,
            votes: 1044
        },
        price: "49,000,000"
    },
    {
        id: "topproduct2-product3",
        href: "/pages/product-detail.html",
        imgSrc: "https://product.hstatic.net/200000722513/product/arvn-man-hinh-viewsonic-vx2758a-2k-pro-3-27-ips-2k-240hz-chuyen-game-4_c1005946a2ce49d184f164a7313b54b9_grande.jpg",
        imgAlt: "Sản phẩm 1",
        title: "Màn hình ViewSonic VX2758A-2K-PRO-3 27' IPS 2K 240Hz chuyên game",
        specs: {
            gpu: "RTX 4090",
            cpu: "i5 12400H",
            mainboard: "B760",
            ram: "16GB",
            storage: "500GB"
        },
        rating: {
            stars: 4.5,
            votes: 1044
        },
        price: "49,000,000"
    },
    {
        id: "topproduct2-product4",
        href: "/pages/product-detail.html",
        imgSrc: "https://product.hstatic.net/200000722513/product/q27g11e_f_aed8857ee655455882a9026355d2f6b2_grande.png",
        imgAlt: "Sản phẩm 1",
        title: "Màn hình ViewSonic VX2758A-2K-PRO-3 27' IPS 2K 240Hz chuyên game",
        specs: {
            gpu: "RTX 4090",
            cpu: "i5 12400H",
            mainboard: "B760",
            ram: "16GB",
            storage: "500GB"
        },
        rating: {
            stars: 4.5,
            votes: 1044
        },
        price: "49,000,000"
    },
    {
        id: "topproduct2-product5",
        href: "/pages/product-detail.html",
        imgSrc: "https://product.hstatic.net/200000722513/product/arvn-man-hinh-viewsonic-vx2758a-2k-pro-3-27-ips-2k-240hz-chuyen-game-1_0ac8558a64af48e8b57f5f739acea9fa_grande.jpg",
        imgAlt: "Sản phẩm 1",
        title: "Màn hình ViewSonic VX2758A-2K-PRO-3 27' IPS 2K 240Hz chuyên game",
        specs: {
            gpu: "RTX 4090",
            cpu: "i5 12400H",
            mainboard: "B760",
            ram: "16GB",
            storage: "500GB"
        },
        rating: {
            stars: 4.5,
            votes: 1044
        },
        price: "49,000,000"
    }
];

let topProduct = [
    {
        currentIndex: 0,
        id: "topproduct1",
        name: "FLASH SALE GIÁ TOP",
        product: topProduct1,
    },
    {
        currentIndex: 0,
        id: "topproduct2",
        name: "LAPTOP BÁN CHẠY",
        product: topProduct2,
    },
];

function toSlug(str) {
    return str
        .normalize('NFD')                   // Tách dấu khỏi ký tự gốc
        .replace(/[\u0300-\u036f]/g, '')    // Xóa các dấu
        .replace(/đ/g, 'd')                 // Chuyển đ -> d
        .replace(/Đ/g, 'D')                 // Chuyển Đ -> D
        .toLowerCase()                     // Chuyển thành chữ thường
        .trim()                            // Xóa khoảng trắng đầu/cuối
        .replace(/\s+/g, '-')              // Thay khoảng trắng bằng gạch ngang
        .replace(/[^a-z0-9\-]/g, '');      // Xóa ký tự đặc biệt (nếu muốn làm ID an toàn)
}

const bodyNodes = document.body.children;
const referenceNode = bodyNodes[1];
referenceNode.insertAdjacentHTML('afterend', renderSection(topProduct));

topProduct.forEach(element => {
    let idSection = toSlug(element.id);
    document.getElementById(idSection).innerHTML= renderProductCard(element.product);

})

function renderSection(topProduct){
    return topProduct.map(product => `<section>
        <h2 class="section-title">${product.name}</h2>
    
        <div class="section-showcase">
            <div class="courses-container">
                <div class="grid-courses" id="${toSlug(product.id)}"></div>
            </div>

            <button class="courses-container-btn courses-prev hidden" id="${toSlug(product.id)}-prev-btn">
                <span class="material-symbols-outlined">chevron_left</span>
            </button> 

            <button class="courses-container-btn courses-next" id="${toSlug(product.id)}-next-btn">
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    
        <button type="button" class="section-more-btn" id="${toSlug(product.id)}-more-btn"><b>Xem tất cả sản phẩm</b></button>
    </section>`).join('');
}

function renderProductCard(list){
    return list.map(product => `<a class="card-item" href="${product.href}" >
        <div>
            <img src="${product.imgSrc}" alt="${product.imgAlt}">
            <div class="card-infor">
                <h4>${product.title}</h4>
                <div class="hardware">
                    <span><span class="material-symbols-outlined">select_all</span>${product.specs.gpu}</span>
                    <span><span class="material-symbols-outlined">memory</span>${product.specs.cpu}</span>
                </div>

                <div class="hardware">
                    <span><span class="material-symbols-outlined">developer_board</span>${product.specs.mainboard}</span>
                    <span><span class="material-symbols-outlined">memory_alt</span>${product.specs.ram}</span>
                    <span><span class="material-symbols-outlined">storage</span>${product.specs.storage}</span>
                </div>

                <div class="rating">
                    <span><span class="material-icons-outlined">star</span>${product.rating.stars} (${product.rating.votes})</span>
                </div>
                <h3 class="price">${product.price}₫</h3>
            </div>
        </div>
    </a>`).join('');
}


topProduct.forEach(element => {
    let currentProduct = element.currentIndex;
    const prevBtnId = toSlug(element.id) + "-prev-btn";
    const nextBtnid = toSlug(element.id) + "-next-btn";

    document.getElementById(prevBtnId).addEventListener('click', function(){
        currentProduct -= 4;
        moveProductShowcase(currentProduct, element.id);

        updateNextBtn(currentProduct, element.product.length, nextBtnid);
        updatePrevBtn(currentProduct, prevBtnId);    
    })

    document.getElementById(nextBtnid).addEventListener('click', function(){
        currentProduct += 4;
        moveProductShowcase(currentProduct, element.id);

        updateNextBtn(currentProduct, element.product.length, nextBtnid);
        updatePrevBtn(currentProduct, prevBtnId);
    })
})

const cardWidth = 260;
const gap = 10;

function moveProductShowcase(current, id) {
    let distance = current * cardWidth + current * gap;
    document.getElementById(id).style.transform = `translateX(-${distance}px)`;
}

function updatePrevBtn(currentProduct, btnId){
    if (currentProduct === 0) {
        document.getElementById(btnId).classList.add('hidden');
    } else {
        document.getElementById(btnId).classList.remove('hidden');
    }
}

function updateNextBtn(currentProduct, productQuantity, btnId) {
    if (currentProduct >= productQuantity - 4) {
        document.getElementById(btnId).classList.add('hidden');
    } else {
        document.getElementById(btnId).classList.remove('hidden');
    }
}



// move to show all product
let tabBar = document.getElementById("tab-bar");
let subTabBar = document.getElementById("sub-tab-bar");
let allProduct = document.getElementById("all-product");

function activeTabBtn(parentElement) {
    parentElement.addEventListener("click", function (e) {
        const clicked = e.target;
        const children = Array.from(parentElement.children);
        children.forEach(child => child.classList.remove("active"));
        clicked.classList.add("active");

        openProductList(event, categories[children.indexOf(clicked)].subcategories, 0);
    });
}

function activeSubTabBtn(parentElement) {
    parentElement.addEventListener("click", function (e) {
        const clicked = e.target;
        const children = Array.from(parentElement.children);
        children.forEach(child => child.classList.remove("active"));
        clicked.classList.add("active");
    });
}

categories.forEach(element =>{
    let btn = document.createElement('button');
    btn.classList.add("tab-button");
    btn.textContent = element.categoryName;
    btn.id = element.id;
    btn.onclick = (event) => openSubcategory(event, element.subcategories);
    tabBar.appendChild(btn);
})
tabBar.children[0].classList.add('active');
openSubcategory(event, categories[0].subcategories);

function openSubcategory(event, subcategories){
    subTabBar.innerHTML = '';

    for(let [index, subcategory] of subcategories.entries()){
        let btn = document.createElement('button');
        btn.classList.add("tab-button");
        btn.textContent = subcategory.name;
        btn.id = subcategory.id;
        btn.onclick = (event) => openProductList(event, subcategories, index);
        subTabBar.appendChild(btn);
    }

    subTabBar.children[0].classList.add('active');
}
openProductList(event, categories[0].subcategories, 0);

activeTabBtn(tabBar);
activeSubTabBtn(subTabBar);

function openProductList(event, subcategories, subcategoriesIndex){
    allProduct.innerHTML = '';
    allProduct.innerHTML = renderAllProductContainer(subcategories, subcategoriesIndex);

    document.getElementById(subcategories[subcategoriesIndex].id + '-grid-courses').innerHTML= renderProductCard(subcategories[subcategoriesIndex].product);

    categories.forEach(category => {

        category.subcategories.forEach(subcategory => {

            let currentProduct = subcategory.currentIndex;
            
            const prevBtnId = subcategory.id + "-prev-btn";
            const nextBtnid = subcategory.id + "-next-btn";
            const gridCourses = subcategory.id + "-grid-courses";

            let prevbtn = document.getElementById(prevBtnId);
            let nextBtn = document.getElementById(nextBtnid);

            if(prevbtn && nextBtn){
                    prevbtn.addEventListener('click', function(){
                    currentProduct -= 4;
                    moveProductShowcase(currentProduct, gridCourses);

                    updateNextBtn(currentProduct, subcategory.product.length, nextBtnid);
                    updatePrevBtn(currentProduct, prevBtnId);    
                })
                
                    nextBtn.addEventListener('click', function(){
                    currentProduct += 4;
                    moveProductShowcase(currentProduct, gridCourses);

                    updateNextBtn(currentProduct, subcategory.product.length, nextBtnid);
                    updatePrevBtn(currentProduct, prevBtnId);
                })
            }
        })
    })
}

function renderAllProductContainer(subcategories, subcategoriesIndex){
    return `<div class="section-showcase">
                <div class="courses-container">
                    <div class="grid-courses" id="${subcategories[subcategoriesIndex].id}-grid-courses"></div>
                </div>
    
                <button class="courses-container-btn courses-prev hidden" id="${subcategories[subcategoriesIndex].id}-prev-btn">
                    <span class="material-symbols-outlined">chevron_left</span>
                </button> 
    
                <button class="courses-container-btn courses-next" id="${subcategories[subcategoriesIndex].id}-next-btn">
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
    
            <button type="button" class="section-more-btn" id="${subcategories[subcategoriesIndex].id}-more-btn"><b>Xem tất cả sản phẩm</b></button>`;
}


// ----------category loading-----------
document.getElementById('category-container').innerHTML= renderCategoryItem(categories);

function renderCategoryItem(listCategory){
    return listCategory.map(category => `<div class="category-item">
                <img src="${category.img}" alt="${category.categoryName}">
                <p>${category.categoryName}</p>
            </div>`).join('');
}