// আপনার প্রোডাক্টগুলো এখানে তালিকাভুক্ত করুন। 
// নতুন প্রোডাক্ট যোগ করতে চাইলে নিচের নিয়মে শুধু নাম, দাম, ছবি ও ক্যাটাগরি বসিয়ে দেবেন।
const products = [
    { 
        id: 1, 
        name: "টেডি বেয়ার (Teddy Bear)", 
        category: "soft", 
        price: 450, 
        image: "https://via.placeholder.com/200?text=Teddy+Bear",
        whatsapp: "88017XXXXXXXX" // যার যার অর্ডারের জন্য আলাদা বা কন্টাক্ট নম্বর দিতে পারেন
    },
    { 
        id: 2, 
        name: "রিমোট কন্ট্রোল রেসিং কার", 
        category: "rc", 
        price: 1200, 
        image: "https://via.placeholder.com/200?text=RC+Car",
        whatsapp: "88017XXXXXXXX"
    },
    { 
        id: 3, 
        name: "বিল্ডিং ব্লকস পাজল সেট", 
        category: "puzzle", 
        price: 650, 
        image: "https://via.placeholder.com/200?text=Building+Blocks",
        whatsapp: "88017XXXXXXXX"
    },
    { 
        id: 4, 
        name: "স্মার্ট লার্নিং ট্যাব", 
        category: "learning", 
        price: 850, 
        image: "https://via.placeholder.com/200?text=Learning+Tab",
        whatsapp: "88017XXXXXXXX"
    }
];

// প্রোডাক্ট স্বয়ংক্রিয়ভাবে গ্রিডে দেখানোর ইঞ্জিন
function displayProducts(items) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";

    items.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        
        // প্রতিটি প্রোডাক্টের জন্য ছবি, নাম, দাম, অর্ডার নাও এবং কন্টাক্ট বাটন তৈরি হচ্ছে
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">৳ ${product.price}</div>
            <div class="product-actions">
                <a href="https://wa.me/${product.whatsapp}?text=I want to order: ${product.name} (Price: ${product.price} BDT)" target="_blank" class="order-btn">অর্ডার নাও</a>
                <a href="https://wa.me/${product.whatsapp}?text=I want to know more about: ${product.name}" target="_blank" class="contact-btn">কন্টাক্ট</a>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// ক্যাটাগরি ফিল্টার করার ফাংশন
function filterProducts(category) {
    const buttons = document.querySelectorAll(".cat-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    if (category === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// পেজ ওপেন হলেই সব প্রোডাক্ট দেখাবে
window.onload = () => {
    displayProducts(products);
};
