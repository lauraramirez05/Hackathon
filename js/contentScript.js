let collectImg = document.getElementsByTagName('img')

let allCats = [
'images/cat1.png',
'images/cat2.png',
'images/cat3.png',
'images/cat4.png',
'images/cat5.png',
'images/cat6.png',
'images/cat7.png',
'images/cat8.png',
'images/cat9.png',
'images/cat10.png',
];

for(img of collectImg) {
    console.log(img.src)
    let rand = Math.floor(Math.random()*allCats.length);
    let pickACat = allCats[rand];
    let url = chrome.runtime.getURL(pickACat);
    img.src = url;
    // console.log(url);
}

