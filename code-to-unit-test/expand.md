
## 1) IDs & Classes
IDs and classes connect HTML, CSS, and JavaScript. Good naming makes code easier to read, style, and debug. If they are messy, the code becomes confusing and harder to maintain.

---

## 2) Data attributes
Data attributes are custom HTML attributes like `data-id`. They store extra info in elements.

You access them with:
- `element.dataset.id`

They are useful for storing small extra data, but overuse can make code messy or duplicate other data systems.

---

## 3) DOM fragment
A DOM fragment is a temporary container for building elements before adding them to the page.

It is useful because it improves performance by reducing repeated updates to the page.

---

## 4) Virtual DOM
A Virtual DOM is a copy of the real DOM used to update UI efficiently.

Pros:
- Faster updates
- Only changes what is needed

Cons:
- Uses more memory
- Adds extra complexity

---

## 5) class vs className
`class` is a reserved word in JavaScript, so the DOM uses `className` instead to avoid conflicts.

---

## 6) addEventListener vs onClick
`addEventListener()` is better because it allows multiple events and is more flexible.  
`onClick` is simpler but only allows one event at a time.