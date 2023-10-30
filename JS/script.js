//-- NAV SELECTOR --\\
const  nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    
    for (let i = 0; i < totalNavList; i++) {
      const a = navList[i].querySelector("a");
      a.addEventListener("click", function() {
          removeBackSection();
          for (let j = 0; j < totalNavList; j++) 
          {
              if(navList[j].querySelector("a").classList.contains("active")) 
              {
                  addBackSection(j);
              }
              navList[j].querySelector("a").classList.remove("active");
          }
          
          this.classList.add("active")
          showSection(this);
          if(window.innerWidth < 1200) 
          {
              sidebarSectionTogglerBtn();
          }
      })
    }

    function removeBackSection() {
      for (let i = 0; i < totalSection; i++) 
      {
          allSection[i].classList.remove("back-section");
      }
    }

    function addBackSection(num) 
    {
      allSection[num].classList.add("back-section");
    }

    function showSection(element) {
        for (let i = 0; i < totalSection; i++) 
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }

    function updateNav(element) {
        for (let i = 0; i < totalNavList; i++) 
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) 
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }

//-- BUTTON --\\

/* document.querySelector(".contact-us").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-selection-index");
    
    showSection(this);
    updateNav(this);
    addBackSection(sectionIndex);
    removeBackSection();
})

document.querySelector(".about-us").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-selection-index");

    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
}) */

//-- NAV-TOGGLER --\\
const navTogglerBtn = document.querySelector(".nav-toggler"),
    sidebar = document.querySelector(".side-bar");
    navTogglerBtn.addEventListener("click", sidebarSectionTogglerBtn);

function sidebarSectionTogglerBtn() {
    sidebar.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i = 1; i < totalNavList; i++)
    {
        allSection[i].classList.toggle("open");
    } 
}

//-- TYPING ANIMATION --\\
var typed = new Typed(".typekita", {
    strings: ["", "Uttogs", "Barya Collectors", "Tambays", "Squatters", "Web Developers"],
    typeSpeed: 80,
    BackSpeed: 60,
    loop: true
})
