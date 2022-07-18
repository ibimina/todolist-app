import "./header.css"
import {  useState } from "react";
function Header() {
const [theme,setTheme] = useState("false");
const changeTheme =()=>{
  if (theme==="false") {
    setTheme("true")
  } else {
    setTheme("false");
  }
}
// const onchangeEvent=(e)=>{
//   console.log(e.target.value)
// }
    return (
      <header className="bg-img" data-img={theme}>
        <div className="title">
          <h1>todo</h1>
          <button
            className="theme bg-img"
            aria-expanded={theme}
            onClick={changeTheme}
          >
            <span className="sr-only">background theme</span>
          </button>
        </div>
        {/* <form action="">
          <input
            type="text"
            name="newtodo"
            id="newtodo"
            placeholder="Create a new todo"
            onChange={onchangeEvent}
          />
          <label htmlFor="addtodo">
            <input type="checkbox" name="addtodo" id="addtodo" />
          </label>
       
        </form> */}
      </header>
    );
}

export default Header;