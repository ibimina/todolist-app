 
import close from "../../images/icon-cross.svg";
export default function ListTodo({
  todos,
  handleClick,
  handleCheck,
  handleAll,
  all,
  active,
  complete,
  handleActive,
  handleComplete,

}) {
 

  // const todoNoun = todos.length !== 1 ? "items" : "item";
  // const todoLength = `${todos.length} ${todoNoun}`;

  


  return (
    <section>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id} className="list-style border">
              <label htmlFor="addtodo">
                <input
                  type="checkbox"
                  name="addtodolist"
                  id="addtodolist"
                  onClick={() => handleCheck(todo.id)}
                  // value={todo.checked}
                />
              </label>

              <p className={`todo ${todo.checked ? "linethrough" : ""}`}>
                {todo.todo}
              </p>
              <img
                src={close}
                alt="a close icon to remove todo list"
                onClick={() => handleClick(todo.id)}
              />
            </li>
          ))}
   
      </ul>

      <div className="length-wrap">
        <p className="length">{todos.length} items Left</p>

        <p className="clr-completed">Clear completed</p>
      </div>
      <div className="show-wrap">
        <button className="all" aria-pressed={all} onClick={handleAll}>
          All
        </button>
        <button className="active" aria-pressed={active} onClick={handleActive}>
          Active
        </button>

        <button
          className="completed"
          aria-pressed={complete}
          onClick={handleComplete}
        >
          Completed
        </button>
      </div>
    </section>
  );
}
