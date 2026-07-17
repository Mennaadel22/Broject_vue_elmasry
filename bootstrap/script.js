let cartitems = []; 

let addTocartBtn = document.querySelectorAll('.add-to-cart-btn');

addTocartBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        let productCard = button.closest('.card');
        let productName = productCard.querySelector('.card-title').innerText;
        let productPrice = parseInt(productCard.querySelector('.product-price').innerText);
        
        let existingItem = cartitems.find(item => item.name === productName);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartitems.push({
                id: Date.now() + Math.random(), 
                name: productName, 
                price: productPrice,
                quantity: 1
            });
        }
        
        updateCartCount();
        
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'تم إضافة المنتج للسلة',
            showConfirmButton: false,
            timer: 1500
        });
    });
});

function updateCartCount() {
    let totalCount = cartitems.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').innerText = totalCount;
}

function renderCart() {
    let cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = ""; 
    let totalAmount = 0;

    if (cartitems.length === 0) {
        cartItemsList.innerHTML = '<li class="list-group-item text-center text-muted">السلة فارغة</li>';
        document.getElementById('cartTotalPrice').innerText = "0";
        return;
    }

    cartitems.forEach(item => {
        let itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center text-dark gap-2 flex-wrap';
        
        li.innerHTML = `
            <div class="col-12 col-sm-5 text-end fw-bold">${item.name}</div>
            <div class="d-flex align-items-center gap-2 justify-content-center">
                <button class="btn btn-sm btn-outline-secondary px-2 py-0" onclick="changeQuantity(${item.id}, 1)">+</button>
                <span class="fw-bold">${item.quantity}</span>
                <button class="btn btn-sm btn-outline-secondary px-2 py-0" onclick="changeQuantity(${item.id}, -1)">-</button>
            </div>
            <div class="d-flex align-items-center gap-3">
                <span class="text-success fw-bold">${itemTotal} ج.م</span>
                <button class="btn btn-sm btn-link text-danger p-0" onclick="deleteItem(${item.id})">
                    <i class="fa-solid fa-trash-can fs-5"></i>
                </button>
            </div>
        `;
        cartItemsList.appendChild(li);
    });

    document.getElementById('cartTotalPrice').innerText = totalAmount;
}

document.getElementById('openCartBtn').addEventListener('click', function() {
    renderCart();
    let cartmodal = new bootstrap.Modal(document.getElementById('cartmodal'));
    cartmodal.show();
});

function changeQuantity(id, amount) {
    let item = cartitems.find(product => product.id === id);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            deleteItem(id);
            return;
        }
        updateCartCount();
        renderCart();
    }
}

function deleteItem(id) {
    cartitems = cartitems.filter(product => product.id !== id);
    updateCartCount();
    renderCart();
}

document.getElementById('checkoutBtn').addEventListener('click', function() {
    if (cartitems.length === 0) {
        Swal.fire({
            title: 'السلة فارغة!',
            text: 'يرجى إضافة منتجات إلى السلة أولاً قبل إتمام الشراء.',
            icon: 'warning',
            confirmButtonText: 'حسناً'
        });
        return;
    }

    let cartModalElement = document.getElementById('cartmodal');
    let cartModalInstance = bootstrap.Modal.getInstance(cartModalElement);
    if (cartModalInstance) {
        cartModalInstance.hide();
    }

    let productsText = cartitems.map(item => `${item.name} [العدد: ${item.quantity}] بسعر (${item.price * item.quantity} جنيه)`).join(', ');
    document.getElementById('hiddenCartItems').value = productsText;
    
    let currentTotal = document.getElementById('cartTotalPrice').innerText;
    document.getElementById('hiddenTotalPrice').value = currentTotal + " جنيه";
    document.getElementById('checkoutTotalDisplay').innerText = `إجمالي المبلغ المطلوب دفعه: ${currentTotal} جنيه`;

    let checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
});

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let submitBtn = document.getElementById('submitOrderBtn');
    submitBtn.innerText = "جاري إرسال الطلب...";
    submitBtn.disabled = true;

    let orderData = {
        client_name: document.getElementById('clientName').value,
        client_phone: document.getElementById('clientPhone').value,
        client_address: document.getElementById('clientAddress').value,
        products: document.getElementById('hiddenCartItems').value,
        total_price: document.getElementById('hiddenTotalPrice').value
    };

    fetch('https://formspree.io/f/mykaopbv', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                title: 'تم طلب الأوردر بنجاح!',
                text: `شكراً لك يا ${orderData.client_name}، جاري تجهيز طلبك بمبلغ [${orderData.total_price}] وسنتواصل معك قريباً.`,
                icon: 'success',
                confirmButtonText: 'حسناً'
            });
            
            cartitems = [];
            updateCartCount();
            document.getElementById('checkoutForm').reset();
            let checkoutModalElement = document.getElementById('checkoutModal');
            let checkoutModalInstance = bootstrap.Modal.getInstance(checkoutModalElement);
            if (checkoutModalInstance) {
                checkoutModalInstance.hide();
            }
        } else {
            Swal.fire({
                title: 'عذراً، حدث خطأ!',
                text: 'لم نتمكن من إرسال الطلب.',
                icon: 'error',
                confirmButtonText: 'حسناً'
            });
        }
    })
    .catch(error => {
        Swal.fire({
            title: 'خطأ في الاتصال!',
            text: 'حدثت مشكلة في الشبكة.',
            icon: 'error',
            confirmButtonText: 'مفهوم'
        });
    })
    .finally(() => {
        submitBtn.innerText = "تأكيد وطلب الأوردر";
        submitBtn.disabled = false;
    });
});