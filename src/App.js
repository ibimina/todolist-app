import Header from "./components/header/Header";
import "./App.css";
import {  useState } from "react";
import Main from "./components/main/Main";

function App() {
  const [theme,setTheme] = useState("false");

  const changeTheme =()=>{
  if (theme==="false") {
    setTheme("true")
  } else {
    setTheme("false");
  }
}
  return (
    <div className={`app ${theme === "false" ? "light" : "dark"}`}>
      <Header theme={theme} />
      <Main changeTheme={changeTheme} theme={theme} />
    </div>
  );
}

export default App;



// const handleClick = (id) => {
//   console.log(id);
//   setTodos(
//     todos.filter((todo) => {
//       return id !== todo.id;
//     })
//   );
// };

// const addTodo = (todo) => {
//   setTodos((prevTodos) => {
//     return [...prevTodos, todo];
//   });
// };

// const handleCheck = (id) => {
//   let mapped = todos.map((task) => {
//     if (id === task.id) {
//       return { ...task, checked: !task.checked };
//     }
//     return task;
//   });

//   setTodos(mapped);
// };


