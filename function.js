let slideBtnLeft = document.getElementById('slide_button_left')
let slideBtnRight = document.getElementById('slide_button_right')
let imgItem = document.querySelectorAll('.image_item')

let startSlider = 0
let endSlider = imgItem.length - 1 //
slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    // alert('left btn')
    // 0        1       2       3       4       5       6
    startSlider += 120;
    //120       240     360     480    600      720      840
    if (startSlider > 0) startSlider = -(endSlider) * 120;
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener('click', handleRightBtn)

function handleRightBtn() {
    // alert('right btn')
    // 0        1       2       3       4       5       6
    startSlider -= 120;
    // -120     -240    -360    -480    -600    -720    -840
    if (startSlider < -endSlider * 120) startSlider = 0;
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

//render automatic
function renderSlideAutomatic() {
    handleRightBtn();
}

setInterval(renderSlideAutomatic, 3000);

//  sidebar - navigation
const sidebarNavigationEl = document.getElementById('sidebar_navigation_container_id');
const sidebarOpenNavigationEl = document.getElementById('menubar_icon');
const sidebarCloseNavigationEl = document.querySelector('.sidebar_navigation_close');
sidebarOpenNavigationEl.addEventListener('click', () => {
    sidebarNavigationEl.classList.toggle('sidebar_show');
})

sidebarCloseNavigationEl.addEventListener('click', () => {
    sidebarNavigationEl.classList.toggle('sidebar_show');
})


// today's deals  js code
todays_deals_images_list = document.querySelectorAll('.todays_deals_images_list')
todays_deals_right_btn = document.querySelector('.todays_deals_right_btn')
todays_deals_left_btn = document.querySelector('.todays_deals_left_btn')
let todays_deals_slide = 0
total = 1100
todays_deals_right_btn.addEventListener('click', function () {
    todays_deals_slide -= 569
    if (todays_deals_slide <= -1050) todays_deals_slide = -1050;
    todays_deals_images_list.forEach((eachImage) => {
        eachImage.style.transform = `translateX(${todays_deals_slide}%)`
    })
})
todays_deals_left_btn.addEventListener('click', () => {
    todays_deals_slide += 569
    console.log(todays_deals_slide);
    if (todays_deals_slide >= 0) todays_deals_slide = 0;
    todays_deals_images_list.forEach((eachImage) => {
        eachImage.style.transform = `translateX(${+todays_deals_slide}%)`
    })
})


// Related deals  js code
related_items_images_list = document.querySelectorAll('.related_items_images_list')
related_items_right_btn = document.querySelector('.related_items_right_btn')
related_items_left_btn = document.querySelector('.related_items_left_btn')
let related_items_slide = 0
related_items_right_btn.addEventListener('click', function () {
    related_items_slide -= 500
    console.log(related_items_slide);
    if (related_items_slide <= -960) related_items_slide = -960;
    related_items_images_list.forEach((eachImage) => {
        eachImage.style.transform = `translateX(${related_items_slide}%)`
    })
})
related_items_left_btn.addEventListener('click', () => {
    related_items_slide += 569
    console.log(related_items_slide);
    if (related_items_slide >= 0) related_items_slide = 0;
    related_items_images_list.forEach((eachImage) => {
        eachImage.style.transform = `translateX(${+related_items_slide}%)`
    })
})

let product_cart_images = [
    ["https://m.media-amazon.com/images/I/61sJk0t5A6L._AC_SY175_.jpg", "Crysendo Audio Technica Headphone Headband Cover Compatible with ATH-M50, M50X, M50S,…"],
    ["https://m.media-amazon.com/images/I/41lBOdRGyLL._AC_SY175_.jpg", "REKTU SH-12 Wireless Bluetooth Over The Ear Headphone with Mic (Blue)"],
    ["https://m.media-amazon.com/images/I/71xgBgPYYCL._AC_SY175_.jpg", "Mivi DuoPods A750 True Wireless Earbuds, 55+ Hrs Playtime, Multi Device Connectivity, AI-ENC…"],
    ["https://m.media-amazon.com/images/I/51oMWaW7tKL._AC_SY175_.jpg", "OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, Playback:Upt…"]
]

let product_cart1_four_images_list = document.querySelectorAll('.product_cart1_four_images_list')
let product_cart_1_special_img = document.querySelector('#product_cart_1_special_img')
product_cart1_four_images_list.forEach((everyImage, index) => {
    everyImage.addEventListener('click', () => {
        product_cart1_four_images_list.forEach(everyImage => {
            everyImage.style.border = '1px solid black';
            everyImage.style.boxShadow = "none";
        })
        everyImage.style.border = '4px solid #007185';
        everyImage.style.boxShadow = "3px 3px 10px rgba(0, 255, 255, 0.5), -3px -3px 10px rgba(0, 255, 255, 0.5)";
        product_cart_1_special_img.childNodes[1].src = product_cart_images[index][0];
        product_cart_1_special_img.childNodes[3].textContent = product_cart_images[index][1];
    })
})