function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'
}

function hideSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display='none'
}


//side bar schrolling 

document.addEventListener("DOMContentLoaded", function() {
    var aboutImgContainer = document.getElementById("aboutImgContainer");
    var img = aboutImgContainer.querySelector("img");
    var imgOffsetTop = aboutImgContainer.offsetTop;

    function checkScroll() {
        if (window.pageYOffset + window.innerHeight > imgOffsetTop) {
            aboutImgContainer.classList.add("slide-in");
            window.removeEventListener("scroll", checkScroll);
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check on initial load in case the image is already visible
});




// smooth schroling to anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// document.addEventListener("DOMContentLoaded", function() {
//     const evImages = document.querySelector(".ev-images");
//     const images = document.querySelectorAll(".image");
//     let currentIndex = 0;

//     function slide() {
//         currentIndex++;
//         if (currentIndex >= images.length) {
//             currentIndex = 0;
//         }
//         evImages.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     setInterval(slide, 3000); // Slide every 3 seconds
// });
