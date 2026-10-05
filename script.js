console.log("✅ Amazon Clone loaded!");

// Back to Top
document.querySelector(".foot-panel1").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Product box hover
document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.02)";
        box.style.transition = "transform 0.3s ease";
    });
    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });
});

// See more links
document.querySelectorAll(".box-content p").forEach(p => {
    p.addEventListener("click", () => {
        alert("📂 Opening more products...");
    });
});

// Search — SIMPLE & CORRECT ✅
function doSearch() {
    const input = document.querySelector(".search-input");
    const text = input.value.trim();
    if (text) {
        alert("🔍 Searching for: \"" + text + "\"");
    } else {
        alert("⚠️ Please enter something first!");
    }
}

// Click search icon
document.querySelector(".search-icon").addEventListener("click", doSearch);

// Press Enter
document.querySelector(".search-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") doSearch();
});