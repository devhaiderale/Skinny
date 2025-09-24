const cursor = document.querySelector(".cursor-ball");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});
9

const container = document.getElementById("cardContainer");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 0;
const cardsPerPage = 3;
const totalCards = container.children.length;
const totalPages = Math.ceil(totalCards / cardsPerPage);

nextBtn.addEventListener("click", () => {
    currentPage = (currentPage + 1) % totalPages;
    const offset = -(currentPage * 930); // 3 cards * (280px + gap 25px)
    container.style.transform = `translateX(${offset}px)`;
});









