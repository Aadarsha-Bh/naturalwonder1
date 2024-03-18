let supriseMe = document.querySelector('.supriseMe');
let supriseMeButton = document.querySelector('button');
let supriseMeFrame = document.querySelector('.supriseImg');
supriseMeButton.addEventListener(onclick, () =>{
    supriseMeFrame.style.background = url("../Images/surpiseImages/Wonder1.jpeg");
    console.log("Clicked");
})