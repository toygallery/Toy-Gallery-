// ডেমো প্রোডাক্ট লিস্ট
const products = [
    { id: 1, name: "টেডি বেয়ার (Teddy Bear)", category: "soft", price: 450, image: "https://via.placeholder.com/200?text=Teddy+Bear" },
    { id: 2, name: "রিমোট কন্ট্রোল রেসিং কার", category: "rc", price: 1200, image: "https://via.placeholder.com/200?text=RC+Car" },
    { id: 3, name: "বিল্ডিং ব্লকস পাজল সোট", category: "puzzle", price: 650, image: "https://via.placeholder.com/200?text=Building+Blocks" },
    { id: 4, name: "স্মার্ট লার্নিং ট্যাব (বাচ্চাদের)", category: "learning", price: 850, image: "https://via.placeholder.com/200?text=Learning+Tab" },
    { id: 5, name: "কিউট র‍্যাবিট সফট টয়", category: "soft", price: 380, image: "https://via.placeholder.com/200?text=Soft+Rabbit" },
    { id: 6, name: "রিমোট কন্ট্রোল ড্রোন হেলিকপ্টার", category: "rc", price: 2500, image: "https://via.placeholder.com/200?text=RC+Helicopter" },
    { id: 7, name: "উডেন শেপ সর্টিং পাজল", category: "puzzle", price: 500, image: "https://via.placeholder.com/200?text=Shape+Puzzle" },
    { id: 8, name: "বাংলা ও ইংরেজি লার্নিং বুক", category: "learning", price: 350, image: "https://via.placeholder.com/200?text=Learning+Book" }
];

let cartCount = 0;

// প্রোডাক্ট রেন্ডার করার ফাংশন
function displayProducts(items) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";

    items.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">৳ ${product.price}</div>
            <button class="add-btn" onclick="addToCart()">কার্টে যোগ করুন</button>
        `;
        
        grid.appendChild(card);
    });
}

// ক্যাটাগরি অনুযায়ী ফিল্টার করার ফাংশন
function filterProducts(category) {
    // অ্যাক্টিভ বাটন স্টাইল পরিবর্তন
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

// কার্ট কাউন্টার বাড়ানো
function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

// পেজ লোড হলে সব প্রোডাক্ট দেখাবে
window.onload = () => {
    displayProducts(products);
};
