//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#messages-search");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");


// --------------SIDEBAR--------------------
//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active")
    })
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if(item.id != "notifications") {
            document.querySelector(".notifications-popup")
            .style.display = "none";
        } else {
            document.querySelector(".notifications-popup")
            .style.display = "block";
            document.querySelector("#notifications .notifications-count").style.display = "none";
        }
    })
})


// --------------MESSAGES--------------------
// search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll("h5").textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    })
}


// search chat
messageSearch.addEventListener("keyup", searchMessage);


// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count")
    .style.display = "none"
     // disappear after 2s
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
})

// THEME DISPLAY CUSTOMIZATION

// open modal
const openThemeModal = () => {
    themeModal.style.display = "grid";
}

// closes modal 
const closeThemeModal = (e) => {
    if(e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
    }
}
// close modal
themeModal.addEventListener("click", closeThemeModal)
theme.addEventListener("click", openThemeModal);



//FONTS 

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}
fontSizes.forEach(size => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");
        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
            root.style.setProperty("--sticky-top-left", "-2rem");
            root.style.setProperty("--sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px";
            root.style.setProperty("--sticky-top-left", "-5rem");
            root.style.setProperty("--sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px";
            root.style.setProperty("--sticky-top-left", "-12rem");
            root.style.setProperty("--sticky-top-right", "-35rem");
        }
    //change the font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
    })
    
})