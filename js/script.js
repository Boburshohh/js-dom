//Boburshoh Khusanov
//Telegram @khusanov_blog
//Instagram boburshoh_1
//GitHub github.com/Boburshohh

const tabs = document.querySelectorAll('.tabheader__item'),
    tabsParent = document.querySelector('.tabheader__items'),
    tabsContent = document.querySelectorAll('.tabcontent');


function hideTabContent(){
    tabsContent.forEach((item, i, tabs) =>{
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

tabsParent.addEventListener('click',(event )=>{
    if(event.target && event.target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) =>{
          if(event.target == item){
              hideTabContent()
              showTabContent(i)
          }
        })
    }
})


