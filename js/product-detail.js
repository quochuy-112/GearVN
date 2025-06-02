const desContent = document.getElementById('description');
const moreDesBtn = document.getElementById('more-des-btn');

moreDesBtn.addEventListener('click', () => {
    const isExpanded = desContent.classList.toggle('expanded');

    if(isExpanded){
        desContent.classList.remove('content-collapse');
        moreDesBtn.querySelector('h3').textContent='Thu gọn';
        moreDesBtn.querySelector('span').textContent='keyboard_arrow_up';

    }
    else{
        desContent.classList.add('content-collapse');
        moreDesBtn.querySelector('h3').textContent='Xem thêm';
        moreDesBtn.querySelector('span').textContent='keyboard_arrow_down';
    } 
})





let samepleProduct1 = [
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

let sampleProduct = [
    {
        currentIndex: 0,
        id: "samepleProduct1",
        name: "SẢN PHẨM TƯƠNG TỰ",
        product: samepleProduct1,
    }
];

const bodyNodes2 = document.body.children;
const referenceNode = bodyNodes2[3];
referenceNode.insertAdjacentHTML('afterend', renderSection(sampleProduct));

sampleProduct.forEach(element => {
    let idSection = toSlug(element.id);
    document.getElementById(idSection).innerHTML= renderProductCard(element.product);

})

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












const listImgcontainerW = document.getElementById('list-img-container').offsetWidth;
const listImgW = document.getElementById('list-img').offsetWidth;

if(listImgW <= listImgcontainerW){
    document.querySelectorAll('.list-img-btn').forEach(btn => {
        btn.classList.add('hidden');
    });
}else{
    const listImg = document.getElementById('list-img-container');

    listImg.addEventListener('mouseover', () => {
        const btns = document.getElementsByClassName('list-img-btn');

        for(let btn of btns){
            btn.classList.remove('hidden');
        }
    })

    listImg.addEventListener('mouseout', () => {
        const btns = document.getElementsByClassName('list-img-btn');

        for(let btn of btns){
            btn.classList.add('hidden');
        }
    }) 
}

let imgW = 0;
document.getElementById('img-next-btn').addEventListener('click', () => {
    if(listImgcontainerW + imgW <= listImgW){
        imgW += 81;
        document.getElementById('list-img').style.transform = `translate(-${imgW}px)`;
    }
})

document.getElementById('img-prev-btn').addEventListener('click', () => {
    if(imgW > 0){
        imgW -= 81;
        document.getElementById('list-img').style.transform = `translate(-${imgW}px)`;
    }
})


let currentImg = document.getElementById('current-img');
let allImg = document.querySelectorAll('.img');
allImg.forEach(img => {
    img.addEventListener('click', () => {
        currentImg.src = img.src;

        allImg.forEach(img => {
            img.classList.remove('active-img');
        })

        img.classList.add('active-img');
    })
})


function showSuccess(){
    Swal.fire({
        title: 'Thành công!',
        text: 'Vui lòng kiểm tra giỏ hàng.',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass:{
            title: 'show-success-text',
            htmlContainer: 'show-success-text',
            confirmButton: 'show-success-btn'
        },
        didOpen: () => {
            document.body.style.overflow = 'auto';
        }
    });
}