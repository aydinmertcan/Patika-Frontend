let todoListDOM = document.querySelector('#list')
let deneme = document.querySelector('.close')
let listItems = document.querySelector("ul");

// Events
todoListDOM.addEventListener('submit',newElement)
todoListDOM.addEventListener('click',removeListElement)
listItems.addEventListener(
  "click",
  function (event) { 
    if(event.target.classList.contains('checked')) {
      event.target.classList.remove('checked');
    }
    else {
      event.target.classList = ("checked");
    } 
  },
  false
);

// Add Item and Cross Symbol
const addItem = (listItemValue) => { 
  let todoListDOM = document.querySelector('#list')
  let liDOM = document.createElement('li')
  let span = document.createElement("span");
  let cross = document.createTextNode("\u274C");

  liDOM.innerHTML = listItemValue
  todoListDOM.append(liDOM)

  localStorage.setItem(`List Element-${todoListDOM.childElementCount}`, `${listItemValue}`)
 
// Add Cross Symbol
  span.className = "close";
  span.id = `removeitem-${todoListDOM.childElementCount}`;

  span.appendChild(cross);
  liDOM.appendChild(span);
}

// Add Cross Symbol to First Five Elements
for (let i = 0; i < todoListDOM.childElementCount; i++){
  
  let list = todoListDOM.children[i] 
  let span = document.createElement("span");
  let cross = document.createTextNode("\u274C");

  span.className = "close";
  span.id = `removeitem-${i+1}`;

  localStorage.setItem(`List Element-${i+1}`, `${todoListDOM.children[i].innerHTML}`) // Adding values to local storage 

  span.appendChild(cross);
  list.appendChild(span);
}
for (let i = 6; i <= localStorage.length; i++){
  addItem(localStorage.getItem(`List Element-${i}`))
}

// Create New Element
function newElement(event) { 
    const LIST_ELEMENT = document.querySelector('#task')
    
    if(LIST_ELEMENT.value && LIST_ELEMENT.value.replace(/^\s+|\s+$/g, '').length != 0 ){
        addItem(LIST_ELEMENT.value)
        $('.success').toast('show')
    }
    else if (LIST_ELEMENT.value.replace(/^\s+|\s+$/g, '').length === 0 && LIST_ELEMENT.value === "") {
        $('.error').toast('show')
    }

    LIST_ELEMENT.value = ""
}

// Remove Item
function removeListElement (event) {
  if(event.target.tagName === 'SPAN') {
    let listItemCross = document.querySelector(`#${event.target.id}`)
    var itemRmvStr = event.target.id[(event.target.id.length - 1)]
    var itemRmvNmb = parseInt(itemRmvStr)

    listItemCross.parentElement.remove();
    localStorage.removeItem(`List Element-${itemRmvNmb}`);
  }
}