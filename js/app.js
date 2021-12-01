/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let sections = document.querySelectorAll("section");
let numOfSections = sections.length;
const navBarList = document.getElementById("navbar__list");
const mainEl= document.querySelector("main");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function initialCreationOfNavbarItems(){
    for (section of sections){
        createNavbarItem(section);
    }
}


function createNavbarItem(section){

    listItem = document.createElement("li");
    listItem.innerHTML = `<a class='menu__link' data-nav='${section.id}' href='#${section.id}'> ${section.dataset.nav} </a>`;

    navBarList.appendChild(listItem);
}



function addSection(){
    numOfSections+=1;

    const section = document.createElement("section");
    section.setAttribute("id",`section${numOfSections}`);
    section.setAttribute("data-nav", `Section ${numOfSections}`);
    section.setAttribute("class","your-active-class");

    section.innerHTML =`<div class="landing__container"> 
    <h2>Section ${numOfSections}</h2>   
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>   
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>   
    </div>`;

    mainEl.appendChild(section);
    createNavbarItem(section);
    
}


function sectionInViewPort(element){
    let sectionPos = element.getBoundingClientRect();
    return (sectionPos.top >=0);
}

function toggleActiveClass(){
    for (section of sections){
        let itemInNav =  document.querySelector(`[data-nav=${section.id}]`);
        if(sectionInViewPort(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
                itemInNav.classList.add('active-link');             
            }
        }else{
            section.classList.remove('your-active-class');
            itemInNav.classList.remove('active-link');
        }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//build the nav

initialCreationOfNavbarItems();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', toggleActiveClass);

// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active