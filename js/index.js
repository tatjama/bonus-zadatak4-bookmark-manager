/**Start Features Pages Loading */
const pagesNav = document.querySelectorAll(".features__item--nav");
const features = document.querySelector(".features");
//const featuresItem = document.querySelector(".features__item");
const titles = ['Bookmark in one click', `Intelligent search`, `Share your bookmarks`];
const contents = [`Organize your bookmarks however you like. Our simple drag-and-drop interface 
gives you complete control over how you manage your favourite sites.`, `Our powerful search feature will help you find saved sites in no time at all. 
No need to trawl through all of your bookmarks.`, `Easily share your bookmarks and collections with others. Create a shareable 
link that you can send at the click of a button.`]

pagesNav.forEach((page, id) => {
    page.addEventListener("click", (e) => {
        const activePage = document.querySelector(".active-page");
        if(page.classList.value = "features__item--nav active-page"){
            activePage.classList.remove("active-page");                        
        }
        document.querySelector("#page" + id).classList.add("active-page");
        let img = document.querySelector(".features__img");
        img.src = `./images/illustration-features-tab-${id+1}.svg`;
        if(id>0){
          img.style.marginLeft = "30px";
          img.style.marginTop =(window.innerWidth < 600)? "0px": "50px";
          features.style.marginBottom =(wi.innerWidth < 600)? "20px": "-20px";
        }else{
          img.style.marginLeft = "0px";
          img.style.marginTop = "0px";
          features.style.marginBottom = "0px";
        };
        document.querySelector(".features__title").innerHTML = titles[id];
        document.querySelector(".features__content").innerHTML = contents[id];
    })
})
/**End Features Pages Loading*/


/**Start FAQ List Manipulation**/
const questions = document.querySelectorAll(".question");
      questions.forEach((question, id) => {  
          question.addEventListener("click", (e) => {  
            const active = document.getElementsByClassName("active");       
            if(question.classList.value == "question active"){
              Array.from(active).forEach((element)=>{
              element.classList.remove("active");
              });
            }else{
              Array.from(active).forEach((element)=>{
              if(element) element.classList.remove("active");
              })
              document.querySelector("#question"+ id).classList.add("active");
              document.querySelector("#answer"+ id).classList.add("active");
              document.querySelector("#arrow"+ id).classList.add("active");
          }
      });
    })
/**End FAQ List Manipulation**/
/**Start Form Submition and Validation */
const email = document.forms["contactForm"]["email"];
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
const errorMessage = document.querySelector(".error-message");
const submitBtn = document.querySelector("input[type ='submit']");


const handleSubmit = (e) => {
  e.preventDefault();
  if(!email.value || !email.value.match(mailformat)){
    errorMessage.style.visibility = 'visible';
    errorMessage.innerHTML = "Whoops, make sure it’s an email";
    errorMessage.style.backgroundColor = "var(--soft-red)";
    email.classList.add("input--error");
  }else{
    errorMessage.style.visibility = 'visible';
    errorMessage.style.backgroundColor = "transparent";
    errorMessage.innerHTML = `Thank you ${email.value} to contact us!` 
  }
}
const outsideClick = (e) => {
  let targetElement = e.target;
  if(targetElement != submitBtn){
    email.value = "";
    errorMessage.style.visibility = 'hidden';
    email.classList.remove("input--error");
    errorMessage.innerHTML = "";
  }
}
document.addEventListener("click", outsideClick);
submitBtn.addEventListener("click",handleSubmit);
/***End Form Submition and Validation **/
/**Start Open menu Mobile */
const openMenuBtn = document.querySelector(".nav__menu");
const closeMenuBtn = document.querySelector(".nav__close");
const mainNav = document.querySelector(".nav--main");
const header = document.querySelector(".header");
const svgTitle = document.querySelector(".header__menu path:first-child");
const svgCircle = document.querySelector(".header__menu circle");
const svgCirclePath = document.querySelector("circle+path");
const socialContainer = document.querySelector(".nav__container--social");
function handleOpenMenu() {
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
  mainNav.style.display = "block";
  header.classList.add("active");
  svgTitle.style.fill = "#FFF";
  svgCircle.style.fill = "#FFF";
  svgCirclePath.style.fill = "#242A45";
  socialContainer.style.display = "flex";

}
function handleCloseMenu() {
  openMenuBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
  mainNav.style.display = "none";
  header.classList.remove("active");
  svgTitle.style.fill = "#242A45";
  svgCircle.style.fill = "#5267DF";
  svgCirclePath.style.fill = "#FFF";
  socialContainer.style.display = "none";
}

openMenuBtn.addEventListener("click",handleOpenMenu);
closeMenuBtn.addEventListener("click",handleCloseMenu);
/**End Open menu mobile */