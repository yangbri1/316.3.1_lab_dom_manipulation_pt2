// ####################################
// # Lab 316.3.1: DOM Manipulation pt.2
// # Brian Yang
// # Submit Github Link to Canvas
// ####################################


/* ------------------ Part 1: Getting Started ------------------ */
/* Below is the code from 316.1.1 DOM Manipulation pt.1 lab */

// Menu data structure -- similar to JSON learn later
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Start the project by building a main content element using the following steps:
// Select and cache the <main> element in a variable named mainEl.
//let mainEl = document.getElementsByTagName('main');
let mainEl = document.querySelector('main');
// Do NOT have to use mainEl[0] if use .querySelectorAll('main'); above
console.log(mainEl); 
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// mainEl[0]. ommitted since we are using querySelectorAll() method
mainEl.style.backgroundColor = 'var(--main-bg)'; // var from styles.css
// Setting background color using custom CSS properties

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
// Add a class of flex-ctr to mainEl.
mainEl.classList.add(`flex-ctr`);
// Hint: Use the Element.classList API.


// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById(`top-menu`);
console.log(topMenuEl);

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`; // can see in header's nav or style

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`; // have to use var b/c they're read as css custom property
// using var here is a css method --- case sensitive so NO space b/t var()
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');
// can't run js in terminal w/ html nodes (since can't access)

// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
    //console.log(link);  // shows 4 object of href & text

    // Create an <a> anchor tag element. - .createElement()
    let newLink = document.createElement(`a`);
    // console.log(newLink)

    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    newLink.setAttribute(`href`, link.href);

    // Set the new element's content to the value of the text property of the "link" object.
    newLink.textContent = link.text;

    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(newLink);
    console.log(topMenuEl);
});

/* ------------------ Part 2: Adding Additional HTML and CSS ------------------ */


// Added given code blocks to both the index.html and styles.css files as instructed.


/* ------------------ Part 3: Creating the Submenu ------------------ */

// We will start by using some DOM manipulation techniques to format the submenu before adding interaction to each menu component.
// All future steps should be completed within the index.js file.
    // Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
    // Set the height subMenuEl element to be "100%".
    // Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
    // Add the class of flex-around to the subMenuEl element.

// access the DOM (document) and use the .getElementById() method to retrieve the element & cache it to variable subMenuEl
let subMenuEl = document.getElementById('sub-menu');

// set the 'height' of subMenuEl style element to '100%'
subMenuEl.style.height = `100%`;

// set 'background color' of subMenuEl to value stored in the `--sub-menu-bg` CSS custom property
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`; // `var` mandatory when reading CSS custom property

// add a 'class' of 'flex-around' to subMenuEl element
subMenuEl.classList.add(`flex-around`);

/* In order to change the position of the submenu to temporarily hide it,
  giving the submenu a dynamic appearance based on user interaction ... */

// set the CSS 'position' property of subMenuEl to value of 'absolute'
subMenuEl.style.position = 'absolute';

// set the CSS 'top' property of subMenuEl to value of '0'
subMenuEl.style.top = '0';


/* ------------------ Part 4: Adding Menu Interaction ------------------ */

/* For the sake of adding submenu links, some restructuring of the menuLinks array is needed ... */
// update the menuLinks array as instructed above 

// To show some webpage interactions 
// 1) Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// 2) Attach a delegated 'click' event listener to topMenuEl.
    // The first line of code of the event listener function should call the event object's preventDefault() method.
    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    // Log the content of the <a> to verify the handler is working.

// since we want to cache ALL of the <a> elements in topMenuEl ...
// we could achieve this using either .getElementsByTagName() or .querySelectorAll()
let topMenuLinks = topMenuEl.querySelectorAll('a'); // caches all of the anchor elements regardless
// console.log(topMenuLinks);

// added a 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', topMenuElClick); //, {capture: false});

// callback function for topMenuEl w/ optional 'event' parameter
function topMenuElClick(event){
  // calling event object preventDefault() method
  event.preventDefault();

  // if(event.localName !== 'a') return;
  // if(event.node.nodeName !== 'a') return;
  if(event.target.tagName !== 'a') return;
  //https://stackoverflow.com/questions/7723188/what-properties-can-i-use-with-event-target
  // !ALWAYS BE TESTING! - Use Inspect Elements > Console >
  //console.log(event);
  
  //console.log(event.localName.textContent);
  // logs DOM element that .addEventListener() was called on
  console.log(this.textContent);
  
} 

// 1.  The event listener should add the active class to the <a> element that was clicked, unless it was
    // already active, in which case it should remove it.
// 2.  The event listener should remove the active class from each other <a> element
    // in topMenuLinks - whether the active class exists or not.
    // Hint: Removing a non-existent class from an element does not cause an error

// adding an event listener to topMenuEl
topMenuEl.addEventListener('click', clickedActive);

// callback function for the event listener above
function clickedActive(event){
  // halts previous default behavior in event
  event.preventDefault();

  // assign event.target value to "clicked" variable 
  let clicked = event.target;

  // adapted it from stackoverflow link below for our case
  if(document.querySelector('nav a.active')){
    // just testing around using two of the same line...unsure why it works tho 🤔 if it ain't broken don't fix it I guess 
    document.querySelector('nav a.active').classList.remove('active');
    document.querySelector('nav a.active').classList.remove('active');
  }

  // https://codesandbox.io/p/sandbox/event-delegation-example-546gf4?file=%2Fsrc%2Findex.js%3A25%2C18&from-embed
  // use classList API to remove "active" class if presented or add it if not
  clicked.classList.toggle('active');
  //topMenuEl.target.classList.remove('active');
  
  //event.removeEventListener('click', function (){});
  // topMenuLinks.classList.toggle('active');

  // https://stackoverflow.com/questions/38990163/how-can-i-add-and-remove-an-active-class-to-an-element-in-pure-javascript
  // if (document.querySelector('#navList a.active') !== null) {
  //   document.querySelector('#navList a.active').classList.remove('active');
  // }
  // event.target.className = "active";
  
  // https://www.geeksforgeeks.org/how-to-add-an-active-class-to-the-current-element-using-javascript/#using-event-listeners
  // loop via topMenuinks and remove all active classes from them
  //topMenuLinks.forEach(link => link.classList.remove('active'));
  // add active status class to clicked link
  // topMenuLinks.classList.add('active');
  
/* ------------------ Part 5: Adding Submenu Interaction ------------------ */  

// 1.  Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was
//   inactive when clicked):
    //   a.  If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do,
    //   except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    //   b.  Otherwise, set the CSS top property of subMenuEl to 0.
    //   Hint: Caching the "link" object will come in handy for passing its subLinks array later

    // var menuLinks = [
    //   {text: 'about', href: '/about'},
    //   {text: 'catalog', href: '#', subLinks: [
    //     {text: 'all', href: '/catalog/all'},
    //     {text: 'top selling', href: '/catalog/top'},
    //     {text: 'search', href: '/catalog/search'},
    //   ]},
    //   {text: 'orders', href: '#' , subLinks: [
    //     {text: 'new', href: '/orders/new'},
    //     {text: 'pending', href: '/orders/pending'},
    //     {text: 'history', href: '/orders/history'},
    //   ]},
    //   {text: 'account', href: '#', subLinks: [
    //     {text: 'profile', href: '/account/profile'},
    //     {text: 'sign out', href: '/account/signout'},
    //   ]},
    // ];
  

  for(const linkof of topMenuLinks){
    // aside: topMenuLinks[0] yields <a href="/about">about</a>
    console.log(linkof);
    // iterate through the newly updated menuLinks array of objects
    for(const link of menuLinks){
      //if(linkof.textContent != "about"){
      //if(linkof.contains(link.href)){
      //if(linkof.href === link.href){
      
      // if it wasn't 'about' that was clicked
      if(clicked.textContent !== "about"){
        // and if the menuLinks contains the "subLinks" key
        if(link.hasOwnProperty("subLinks")){/* && link.text !== 'about'*/ 
          // set the CSS 'top' property of subMenuEl to value of '100%'
          subMenuEl.style.top = '100%';
        }
        // otherwise the dropdown menu remain stationary
        else{ // if(link.text === 'about'){
          // set the CSS 'top' property of subMenuEl to value of '0'
          subMenuEl.style.top = '0';
        }
      }
      
    }
  }

  //event.target.style.visibility = "hidden";
  topMenuEl.classList.toggle('show');
    // if(clicked.classList.contains('active')){
    //   //subMenuEl.style.top = '0';
    //   clicked.classList.remove('active');

    // }
  
  
}


// topMenuEl.addEventListener('click', function(){
//   document.
// })

// helper function to add functionality to submenu
function buildSubmenu(){
  //subMenuEl.
  // // Create an <a> anchor tag element. - .createElement()
  // let newLink = document.createElement(`a`);
  // // console.log(newLink)

  // // On the new element, add an href attribute with its value set to the href property of the "link" object.
  // newLink.setAttribute(`href`, link.href);

  // // Set the new element's content to the value of the text property of the "link" object.
  // newLink.textContent = link.text;

  // // Append the new element to the topMenuEl element.
  // topMenuEl.appendChild(newLink);
  // console.log(topMenuEl);
}