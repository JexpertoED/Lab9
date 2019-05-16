
var foldBtns = document.getElementsByClassName("fold-button");
for (var i = 0; i<foldBtns.length; i++){
    foldBtns[i].addEventListener("click", function(event) {
        if (event.target.parentElement.className === "one-post folded"){
            event.target.innerHTML = "Cвернуть";
            event.target.parentElement.className = "one-post"
        }
        else{
            event.target.innerHTML = "Развернуть";
            event.target.parentElement.className = "one-post folded"
        }
    });
}



// var foldBtns = document.getElementsByClassName("fold-button");
// for (var i = 0; i<foldBtns.length; i++){
//     foldBtns[i].addEventListener("click", function(e) {
//         if (e.target.className === "fold-button folded"){
//             e.target.innerHTML = "Свернуть";
//             e.target.className = "fold-button";
//             var displayState = "block";
//         }
//         else{
//             e.target.innerHTML = "Развернуть";
//             e.target.className = "fold-button folded";
//             var displayState = "none";
//         }
//         e.target
//             .parentElement
//             .getElementsByClassName('article-author')[0]
//             .style.display = displayState;
//         e.target
//             .parentElement
//             .getElementsByClassName('article-created-date')[0]
//             .style.display = displayState;
//         e.target
//             .parentElement
//             .getElementsByClassName('article-text')[0]
//             .style.display = displayState;
//
//     });
// }