# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![mobile](Capture097.pmn)
![Desktop](Capture097.png)


### Links

- Solution URL: [https://github.com/ibimina/todolist-app](https://github.com/ibimina/todolist-app)
- Live Site URL: [https://ibimina.github.io/todolist-app](https://ibimina.github.io/todolist-app)

## My process

### Built with


- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

- I learnt to fetch data from a json file using the following methods
 GET - to fetch out data to be mapped in the li tag
 ```js
  useEffect(() => {
    const abortConst = new AbortController();

    fetch(url, { signal: abortConst.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for the resource");
        }
        return res.json();
      })
      .then((d) => {
        setTodos(d);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch abort");
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => abortConst.abort();
  }, [url]);
```
 POST - to add new data
 ```js
 fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      })
```
 PUT - to update a value 
 ```js
 fetch("http://localhost:3000/todos/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ne),
    })
```
 DELETE - to delete 
```jsx
  fetch("http://localhost:3000/todos/" + id, {
          method: "DELETE",
        }).
```
- I learnt how to out data that fullfills a condition  using json url 
```js
 onClick={() => add("http://localhost:3000/todos?checked=false")
```

- I also learnt how to drag and drop items using beautifully dnd dependency
For this to work properly I had to remove the React.strictMode and set the draggable id to a string 

### Continued development



### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Frontend Mentor - [@ibimina](https://www.frontendmentor.io/profile/ibimina)
- Twitter - [@ibiminaaH](https://www.twitter.com/ibiminaaH)



## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.


