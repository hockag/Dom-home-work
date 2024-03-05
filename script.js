const textInput = document.querySelector('#textInput');
const changeBtn = document.querySelector('#changeBtn');

changeBtn.addEventListener('click', () => {
    const newText = textInput.value;
    changeBtn.textContent = newText;
})
//exercise 1


const myImage = document.querySelector('#myImage');
const changePhoto = document.querySelector('#changePhoto');

changePhoto.addEventListener('click', () => {
    myImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-SaYWlXmVicHWYEEpRgrmFir507tWQk3pA&usqp=CAU';
})
//exercise 2

let myLink = document.querySelector('#myLink');
myLink.href = "https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_640.jpg";

let myPhoto = document.querySelector('#myPhoto');
myPhoto.alt = "Новий опис зображення";
//exercise 3


const myList = document.querySelector('.my--list');
const firstItem = myList.firstElementChild;
firstItem.textContent = "New text for first item in list"