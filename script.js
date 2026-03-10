document.querySelectorAll(".project-category span").forEach(span => {
    span.addEventListener("click", () => {
        span.classList.toggle("active");
    });
});