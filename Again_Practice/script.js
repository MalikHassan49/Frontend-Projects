const tabLinks = document.getElementsByClassName('tab-links')
const activeLink = document.getElementsByClassName('active-link')
const tabcontents = document.getElementsByClassName('tab-contents')
const activeTab = document.getElementsByClassName('active-tab')
const skillTab = document.getElementById('skills')
const experienceTab = document.getElementById('experience')
const educationTab = document.getElementById('education')

const allTabs = [skillTab, experienceTab, educationTab]
console.log(allTabs);


const showTabDetails = (e)=> {
   allTabs.forEach((tab)=>{
   tab.classList.remove("active-tab")
  })
  
  newTab.forEach((tab)=>{
    tab.classList.remove('active-link')
  })

  if (e.target.innerHTML === "Skills") {
    newTab[0].classList.add('active-link')
    allTabs[0].classList.add('active-tab')
  }
  if (e.target.innerHTML === "Experience") {
    newTab[1].classList.add('active-link')
    allTabs[1].classList.add('active-tab')
  }
  if (e.target.innerHTML === "Education") {
    newTab[2].classList.add('active-link')
    allTabs[2].classList.add('active-tab')
  }
}


const newTab = Array.from(tabLinks)

newTab.forEach((tab)=> {
  tab.addEventListener('click', showTabDetails)
})





