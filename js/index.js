/**Start Features Pages Loading */
const pagesNav = document.querySelectorAll(".features__item--nav");
const features = document.querySelector(".features");
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
          features.style.paddingLeft = "17%"
        }else{
          features.style.paddingLeft = "11.5%"
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