export function Rater(ratingElement) {
    const stars = ratingElement.querySelectorAll(".star");


    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];


        star.addEventListener("mouseenter", function (event) {

            for (let j = 0; j <= i; j++) {
                stars[j].classList.toggle("selecting")
            }

            console.log(event.type)
            console.log("star" + String(i))

        });
        star.addEventListener("mouseleave", function (event) {

            for (let j = 0; j < stars.length; j++) {
                stars[j].classList.remove("selecting")
            }
        });


        star.addEventListener("click", function (event) {

            console.log("click"+stars[i].parentNode.getAttribute("data-value")+stars[i].getAttribute("data-value"));
        });
    }

}