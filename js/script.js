const tabs = document.querySelectorAll('.tabheader__item'),
    tabsParent = document.querySelectorAll('.tabheader__items'),
    tabsContent = document.querySelectorAll('.tabcontent');


function hideTabContent(){
    tabs.forEach((item, i, tabs) =>{
        item.classList.add('none')
        item.classList.remove('show', 'fade')
    })
    tabs.forEach(item =>{
        item.classList.remove('tabheader__item_active')
    })
}
function showTabContent(i=0){
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('none')
    tabs[i].classList.add('tabheader__item_active')
}
hideTabContent()
showTabContent()


