import close from "../../images/icon-cross.svg";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Todo({ todos, add }) {
  const [myTodo, setMyTodo] = useState(null);

  const handleCheckBox = (id, todo, checked) => {
    let ne;
    if (checked === false) {
      console.log("p");
      ne = {
        todo: todo,
        checked: true,
        id: id,
      };
    } else {
      ne = {
        todo: todo,
        checked: false,
        id: id,
      };
    }

    fetch("http://localhost:3000/todos/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ne),
    }).then(() => add("http://localhost:3000/todos"));

    //  console.log(ne)
  };
  const handleClick = (id) => {
    fetch("http://localhost:3000/todos/" + id, {
      method: "DELETE",
    }).then(() => add("http://localhost:3000/todos"));
  };

  const total = () => {
    let len = [];

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].checked === false) {
        // console.log(todos[i]);
        len.push(todos[i]);
      }
      // console.log(len);
      // console.log(len.length);
    }
    let lenn = len.length;
    return lenn;
  };

  useEffect(() => {
    setMyTodo(todos);
  }, [todos]);

  // console.log(myTodo);
  const clearComplete = () => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].checked === true) {
        console.log(todos[i].id);
        fetch("http://localhost:3000/todos/" + todos[i].id, {
          method: "DELETE",
        }).then(() => add("http://localhost:3000/todos"));
      }
      //  console.log(lenn);
    }
  };
 

  const handleOnDrag = (result) => {
   const  orderNew = Array.from(myTodo);
    const [update] = orderNew.splice(result.source.index, 1);
    orderNew.splice(result.destination.index, 0, update);

    setMyTodo(orderNew);

  };
 

  // const handleActive = () => {
  //     setMyTodo(
  //   ii.filter((todo) => {
  //     return todo.checked !== true;
  //   }))
   
  // };

  //  const handleCompleted = () => {
  //    setMyTodo(
  //      todos.filter((todo) => {
  //        return todo.checked === true;
  //      })
  //    );
  //  };
  //   const handleAll = () => {
  //    setMyTodo(
  //      todos.filter((todo) => {
  //        return todo;
  //      })
  //    );
  //   };
 
  return (
    <>
      <DragDropContext onDragEnd={handleOnDrag}>
        <Droppable droppableId="ul-container">
          {(provided) => (
            <ul
              className="ul-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {myTodo &&
                myTodo.map((todo, index) => (
                  <Draggable
                    key={todo.id}
                    draggableId={todo.id + ""}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        id={todo.id}
            
                        className="list-style border"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <label htmlFor="addtodo">
                          <input
                            type="checkbox"
                            name="addtodolist"
                            id="addtodolist"
                            checked={todo.checked}
                            onChange={() =>
                              handleCheckBox(todo.id, todo.todo, todo.checked)
                            }
                          />
                        </label>

                        <p
                          className={`todo ${
                            todo.checked === true ? "linethrough" : ""
                          }`}
                        >
                          {todo.todo}
                        </p>
                        <p>{todo.checked}</p>
                    
                        <img
                          src={close}
                          alt="a close icon to remove todo list"
                          onClick={() => handleClick(todo.id)}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      {/* <div className="length-wrap">
        {todos && <p className="length">{todos.length} items Left</p>}

        <p className="clr-completed">Clear completed</p>
      </div> */}

      <div className="length-wrap">
        {todos && (
          <p className="length oo">
            {total()} {`${total() > "1" ? "items" : "item"}`} Left
          </p>
        )}
        <div className="show-wrap">
          <button
            className="all"
            onClick={() => add("http://localhost:3000/todos")}
          >
            All
          </button>
          {/* <button className="all" onClick={handleAll}>
            All
          </button> */}
          <button
            className="active"
            onClick={() => add("http://localhost:3000/todos?checked=false")}
          >
            Active
          </button>
          {/* <button
            className="active"
            onClick={handleActive}
          >
            Active
          </button> */}

          <button
            className="completed"
            onClick={() => add("http://localhost:3000/todos?checked=true")}
          >
            Completed
          </button>
          {/* <button className="completed" onClick={handleCompleted}>
            completed
          </button> */}
        </div>
        <p className="clr-completed" onClick={() => clearComplete()}>
          Clear completed
        </p>
      </div>
    </>
  );
}
