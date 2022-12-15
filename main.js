const markAll = document.querySelector(".mark-as-read")
const totalNotifications = document.querySelector(".total-notifications")
const unreadDots = document.querySelectorAll(".red-dot")
const unreadMessageBackground = document.querySelectorAll(".unread-message")




markAll.addEventListener("click", () => {
    totalNotifications.style.display = "none"
    unreadDots.forEach(dot => dot.style.display = "none")
    unreadMessageBackground.forEach(bg => bg.style.background = "none")
})