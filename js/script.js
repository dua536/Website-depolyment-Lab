// ===== BUTTON CLICK EFFECT =====
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});


// ===== NAVBAR ACTIVE LINK =====
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});


// ===== SIMPLE ALERTS (OPTIONAL UI FEEL) =====
document.querySelector(".primary")?.addEventListener("click", () => {
    alert("Welcome to CARTEZ 🛒");
});

document.querySelector(".secondary")?.addEventListener("click", () => {
    alert("More features coming soon!");
});


// ===== SCROLL SHADOW NAVBAR =====
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 20) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});
