/*
Exercise 1: Traversing the DOM
Knowing how to traverse the DOM using JavaScript provides a foundation
to altering an HTML page in real time.
Using the HTML markup in Listing 1, perform these tasks:
1. Use the firstElementChild property to access an element.
2. Use the lastElementChild property to access an element.
3. Use the nextElementSibling property to access an element.
4. Use the previousElementSibling property to access an element.
5. Use the parentNode property to access an element.
6. Use the childNodes property to access a group of child elements.
*/
​
// console.log("Exercise 1: Traversing the DOM");
// const elem = document.getElementById('content');
// const elem1 = document.querySelector('#page .content')
// const subElem = elem.firstElementChild;
// console.log(elem.firstElementChild);
// console.log(elem.lastElementChild);
// console.log(elem.firstElementChild.nextElementSibling.previousElementSibling);
// console.log(elem.parentNode);
// console.log(elem.children);

/*
Exercise 2: Targeting nodes
In exercise 1, you learned how to target nodes in several ways.
Continuing to use the markup in Listing 1, perform the following tasks:
1. Retrieve the value of a node using / innerText / innerHTML / textContent.
2. Change the value of a node using / innerText / innerHTML. / textContent.
3. Retrieve the value of a node attribute.
4. Change the value of a node attribute.
*/
// ​console.log("Exercise 2: Targeting nodes");
// const elem = document.getElementById('content');
// console.log(elem.firstElementChild.innerText);
// elem.firstElementChild.innerHTML = "<h1>Change Title H1</h1>"
// console.log(elem.getAttribute('id'));
// elem.setAttribute('id', 'aaa');
/*
Exercise 3: Manipulating the DOM
Now that you know how to traverse the DOM and alter node values,
the next logical step is to learn how to add, remove, and replace nodes.
Perform the following tasks:
1. Use the appendChild method to add a node.
2. Use the insertBefore method to add a node.
3. Use the removeChild method to remove a node.
4. Use the replaceChild method to replace a node.
*/
console.log("Exercise 3: Manipulating the DOM");

let h2 = document.createElement("h2");
h2.textContent = "new header added to the DOM";
console.log(h2);
const content = document.getElementById("content");
content.appendChild(h2)
content.insertBefore(h2, content.lastElementChild);

const header = document.getElementById('header');
const title = document.getElementById('title');
header.removeChild(title);
console.log(title);

const content = document.getElementById('content');
const content_title = content.firstElementChild;
const some_copy = content.firstElementChild.nextElementSibling;
content.replaceChild(content_title, some_copy);
console.log(some_copy);