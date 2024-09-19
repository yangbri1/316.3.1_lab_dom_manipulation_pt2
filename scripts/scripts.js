// Menu data structure -- similar to JSON learn later
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


// Start the project by building a main content element using the following steps:
// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.getElementsByTagName('main');
// Do NOT have to use mainEl[0] if use .querySelectorAll('main'); above
console.log(mainEl); 
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// mainEl[0]. ommitted since we are using querySelectorAll() method
mainEl[0].style.backgroundColor = 'var(--main-bg)'; // var from styles.css
// Setting background color using custom CSS properties

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;
// Add a class of flex-ctr to mainEl.
mainEl[0].classList.add(`flex-ctr`);
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
    // console.log(link);  // shows 4 object of href & ...

    // Create an <a> element. - .createElement()
    let newLink = document.createElement(`a`);
    // console.log(newLink)

    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    newLink.setAttribute(`href`, link.href);

    // Set the new element's content to the value of the text property of the "link" object.
    newLink.textContent = link.text;

    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(newLink);

});
