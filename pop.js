const serviceItems = document.querySelector(".service-items");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");


serviceItems.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const viewMoreCont = item.querySelector(".view-more-cont").innerHTML;
       popup.querySelector("h3").innerHTML = h3;
       popup.querySelector(".popup-body").innerHTML = viewMoreCont;
       popupBox();
    }

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox); 

popup.addEventListener("click", function(event){
    console.log("ok")
    if(event.target == popup){
        popupBox();
    }
})


function popupBox(){
    console.log("hello")
    popup.classList.toggle("open");
}



//layer2



const popup2 = document.querySelector(".popup-box2")
const popupCloseBtn2 = popup2.querySelector(".popup-close-btn2");
const popupCloseIcon2 = popup2.querySelector(".popup-close-icon2");


serviceItems.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item2 =event.target.parentElement;
        console.log(item2);
       const h3 = item2.querySelector("h3").innerHTML;
       const viewMoreCont = item2.querySelector(".view-more-cont2").innerHTML;
       popup2.querySelector("h3").innerHTML = h3;
       popup2.querySelector(".popup-body2").innerHTML = viewMoreCont;
       popupBox2();
    }

})

popupCloseBtn2.addEventListener("click", popupBox2);
popupCloseIcon2.addEventListener("click", popupBox2); 

popup2.addEventListener("click", function(event){
    console.log("ok")
    if(event.target == popup2){
        popupBox2();
    }
})


function popupBox2(){
    console.log("hello")
    popup2.classList.toggle("open");
}