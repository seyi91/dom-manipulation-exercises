
//Number 1 - Select the section with an id of container without using querySelector.
let container = document.getElementById("container");

//Number 2 - Select the section with an id of container using querySelector.
let section = document.querySelector("#container");

//Number 3 - Select all of the list items with a class of “second”.
let secondLIs = document.querySelectorAll(".second");

//Number 4 - Select a list item with a class of third, but only the list item inside of the ol tag.
let ol = document.querySelector("ol");
let thirdLI = ol.children[2];
//Answer: document.querySelector('ol .third')

//Number 5 - Give the section with an id of container the text “Hello!”.
container.innerText = 'Hello!';

//Number 6 - Add the class main to the div with a class of footer.
let footer = document.querySelectorAll('div')[1];
footer.classList.add('main');
//Answer: let footer = document.querySelector('.footer')

//Number 7 - Remove the class main on the div with a class of footer.
footer.classList.remove('main');

//Number 8 - Create a new li element.
let newLi = document.createElement('li');

//Number 9 - Give the li the text “four”.
newLi.textContent = 'four';

//Number 10 - Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(newLi);

//Number 11 - Loop over all of the lis inside the ol tag and give them a background color of “green”.
for (let li of ol.children) {
    li.style.backgroundColor = 'green';
}

//Number 12 - Remove the div with a class of footer
footer.remove();
