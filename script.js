
// const arr=["w","a","s","d","j","k","l"]

// for(let i in arr)
// {
//     console.log(arr[i])
//     document.querySelector("."+arr[i]).addEventListener("click",shout);
// }

// for(let i in document.querySelectorAll(".drum"))
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         this.style.color = "blue"; // this operator tells that which target/tag/element that triggered "this"
//         switch (this.textContent) {
//             case "w":
//                 new Audio("sounds/tom-1.mp3").play()
//                 break;
//             case "a":
//                 new Audio("sounds/tom-2.mp3").play()
//                 break;
//             case "s":
//                 new Audio("sounds/tom-3.mp3").play()
//                 break;
//             case "d":
//                 new Audio("sounds/tom-4.mp3").play();
//                 break;
//             case "j":
//                 new Audio("sounds/snare.mp3").play();
//                 break;
//             case "k":
//                 new Audio("sounds/crash.mp3").play();
//                 break;
//             case "l":
//                 new Audio("sounds/kick-bass.mp3").play();
//                 break;
//           default:
//             alert("not expected")
//             break;
//         }
//     });
// }


function makesound(k)
{
    switch (k) 
    {
        case "w":
            new Audio("sounds/tom-1.mp3").play()
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play()
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play()
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log("not expected")
            break;
    }

}



// for(let i in document.querySelectorAll(".drum"))
// {
//     //  IMPORTANT-USE ONLY ANONYMOUS FUNCTIONS IN ADDEVENTLISTENER

//     //   document.querySelectorAll(".drum")[i].addEventListener("click", makesound(this.textContent)); //doesnt work
//     document.querySelectorAll(".drum")[i].addEventListener("click", function()                         //this works
//     {
//         makesound(this.textContent);
//     });
// }
// // this.style.color = "blue"; // this operator tells that which target/tag/element that triggered "this"
    
// // --------------------------------------------------------------------------------------------------

// document.addEventListener("keydown", function (event) {
// //   console.log(this); //gives output document, the element to which the event happened to
// //   console.log(event); //give the details of the event and also the key
//   makesound(event.key); //passing the key which was pressed
// });
function btnanimation(key)
{
  document.querySelector("."+key).classList.add("pressed")

  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 120);
}

for (let i=0;i<document.querySelectorAll(".drum").length;i++)
{
    // console.log(document.querySelectorAll(".drum"));
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        makesound(this.textContent)
        btnanimation(this.textContent)
    })
}

// Adding keydown event listener to the document
document.addEventListener("keydown", function (event) {
    makesound(event.key);
    btnanimation(event.key);
});