let navCover = document.querySelector(".navCover")
let primaryNL = navCover.nextElementSibling;
let closeBtn = primaryNL.querySelector(".closeBtn") 


let navToggle = navCover.previousElementSibling
                        .addEventListener("click", e =>{
                            navCover.classList.toggle("active")
                            primaryNL.classList.toggle("active")
                            closeBtn.classList.toggle("rotate")
                        })
                       

let dropDownBtns = document.querySelectorAll(".dropDownBtn");
let arrows = document.querySelectorAll(".arrow");
let dropDownLists = document.querySelectorAll(".dropDowns");

   dropDownBtns[0].addEventListener("click", e =>{
      arrows[0].classList.toggle("rotate");
      dropDownLists[0].classList.toggle("active")
   })

   dropDownBtns[1].addEventListener("click", e =>{
    arrows[1].classList.toggle("rotate");
    dropDownLists[1].classList.toggle("active")
 })

 closeBtn.addEventListener("click", e =>{
                            closeBtn.classList.remove("rotate")
                            navCover.classList.remove("active")
                            primaryNL.classList.remove("active")
                            arrows.forEach(e =>{
                                e.classList.remove("rotate")
                            })
                            dropDownLists.forEach(e =>{
                                e.classList.remove("active")
                            })
                        })