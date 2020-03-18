// document.body.onload = addElement;


var containers = document.getElementsByClassName("grid-container")

var container = containers[0]

var stars = document.getElementsByClassName("star");







// document.addEventListener('mouse', function checkHover() {
//     var til;

//     for (let i = 0; i < stars.length; i++) {
//         const star = stars[i];
//         var hovered = isHover(star);

//         if (hovered !== checkHover.hovered){
//             til = i
//             change(til, hovered)
//             checkHover.hovered = hovered;
//         }
//     }
//   });

const selected = new Array(stars.length).fill(false);

for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    

    star.addEventListener("mouseenter", function(event){

        for (let j = 0; j <= i; j++){
            stars[j].classList.toggle("selecting")
        }
        
        console.log(event.type)
        //event.target.classList.toggle("selecting")
        console.log("star"+String(i))
        console.log(selected)

    });
    star.addEventListener("mouseleave", function(event){
        
        for (let j = 0; j < stars.length; j++){
            stars[j].classList.remove("selecting")
        }
    });
}

function isHover(e) {
    return (e.parentElement.querySelector(':hover') === e);
  }

function change(til, fill){
    console.log("changed")
    for (let i = 0; i <= til; i++) {
        if(fill){
            stars[i].style.opacity = "10%"
            console.log("no")
        }else{
            stars[i].style.opacity = "100%"

        }

        
    }
}
