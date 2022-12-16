const markAll = document.querySelector(".mark-as-read")
const totalNotifications = document.querySelector(".total-notifications")
const unreadDots = document.querySelectorAll(".red-dot")
const unreadMessageBackground = document.querySelectorAll(".unread-message")
let unread = 3



markAll.addEventListener("click", () => {
    totalNotifications.style.display = "none"
    unreadDots.forEach(dot => dot.style.display = "none")
    unreadMessageBackground.forEach(bg => bg.style.background = "none")
})

unreadMessageBackground.forEach(bg =>{
    bg.addEventListener("click", () => {
        bg.style.background = "none"
        unread--
        if(unread == 0){
            totalNotifications.style.display = "none"
        }else{
            totalNotifications.innerHTML = `<p>${unread}</p>`
        }
        bg.querySelector(".red-dot").style.display = "none"
    })
})

// const firstUnread = document.querySelector(".first")
// console.log(firstUnread.contains(document.querySelector(".red-dot")))
// const newRed = firstUnread.querySelector(".red-dot")
// console.log(newRed)
// newRed.style.display = "none"