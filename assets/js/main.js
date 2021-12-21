
    var isOpen = false;
    const listItemHeader = document.querySelector('#header .nav-list')
    const itemsHeader = document.querySelectorAll('.nav .nav-item')
    const menuBars = document.querySelector('.menu-bars')
    const header = document.getElementById('header')
    console.log(itemsHeader)
function start(){
    openListItem()
    hideListItem()
}
start()

function openListItem(){
    if(menuBars){
        menuBars.onclick = function(){
            isOpen = !isOpen
            if(isOpen){
                listItemHeader.style.display = 'block'
            }else{
                listItemHeader.style.display = 'none'
            }
        }
    }
}
function hideListItem(){
    itemsHeader.forEach(function(itemHeader){
        itemHeader.onclick = function(){
           setTimeout(function(){
            isOpen = false
            listItemHeader.style.display = 'none'
           },300)
        }
    })
}


