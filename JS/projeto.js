let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')
let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItems('next')
btnBack.onclick = () => moveItems('back')

function moveItems(type) {
    let listItem = document.querySelectorAll('.list .list-item')
    let thumbItem = document.querySelectorAll('.thumb .thumb-item')

    if (type === 'next') {
        list.appendChild(listItem[0])
        thumb.appendChild(thumbItem[0])
    } else {
        list.prepend(listItem[listItem.length - 1])
        thumb.prepend(thumbItem[thumbItem.length - 1])
    }
}