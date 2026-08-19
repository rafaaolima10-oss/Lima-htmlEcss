document.addEventListener("DOMContentLoaded", listener = () => {
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselItems = document.querySelector(".carousel-Item");
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    const changeSlide = () => {
        carouselContainer.style.transform = `translateX(-${currentIndex * 100})`
    }
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalItems;
        changeSlide();
    } 
    const prevSlide = () =>{
        currentIndex = (currentIndex - 1 totalItems);
        changeSlide();
    }
    nextButton.addEventListener("click; nextSlide");
    prevButton.addEventListener("click; nextSlide");

    setInterval(nextSlide, 7000);

    changeSlide();
})
