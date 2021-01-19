// Create a new Element by it's tag name.
// Of you don't provide any tag name then it will be div
// You can also pass some attribute as an object optionally

window.create = function () {

    if (arguments.length === 0) {
        return document.createElement('div');
    }

    if (arguments.length === 1 && typeof arguments[0] != 'object') {
        return document.createElement(arguments[0]);
    }

    var tag = arguments[0];
    var attr = arguments[1] || arguments[0];

    if (arguments.length === 1 && typeof arguments[0] === 'object') {
        tag = 'div';
    }

    var element = document.createElement(tag);

    for (var i in attr) {
        element.setAttribute(i, attr[i]);
    }

    return element;
}

// Create A TextNode based on Given Data
window.textNode = function (data) {
    return document.createTextNode(data);
}

// Select Any Html Element Using CSS selector
window.select = function (selector) {
    return document.querySelector(selector);
}

// Select All Element Using CSS Selector
window.selectAll = function (selector) {
    return document.querySelectorAll(selector);
}

// Add Content To Any HTML Element, You may use html or text
HTMLElement.prototype.content = function (data) {
    this.innerHTML = data
    return this;
};

// Append Child Element
HTMLElement.prototype.append = function () {
    for (var i in arguments) {
        this.appendChild(arguments[i]);
    }
    return this;
}

// Toggle CSS Class
HTMLElement.prototype.toggle = function (className) {
    this.classList.toggle(className);
    return this;
}

// Add Style
HTMLElement.prototype.css = function (styles) {
    for (var s in styles) {
        this.style[s] = styles[s];
    }
    return this;
}

// Add Attributes
HTMLElement.prototype.attrs = function (attr) {
    for (var i in attr) {
        this.setAttribute(i, attr[i]);
    }
    return this;
}

// Add Event Liseners
HTMLElement.prototype.events = function (event) {
    for (var e in event) {
        this.addEventListener(e, event[e]);
    }
    return this;
}

// Find Parent Nodes
HTMLElement.prototype.parent = function () {
    return this.parentElement;
}

// Find Children of Selected Element
// You can use selector as well
HTMLElement.prototype.child = function () {
    if (arguments.length === 0) {
        return this.children;
    }

    return this.querySelectorAll(arguments[0]);
}