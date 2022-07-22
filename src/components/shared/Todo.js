import close from "../../images/icon-cross.svg";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Todo({ todos, getdata}) {
  const [myTodo, setMyTodo] = useState(null);
// const { getdata } = useFetch("http://localhost:3000/todos");
  const handleCheckBox = (id, todo, checked) => {
    let updateCheckedTodo;
    if (checked === false) {
      // console.log("p");
      updateCheckedTodo = {
        todo: todo,
        checked: true,
        id: id,
      };
    } else {
      updateCheckedTodo = {
        todo: todo,
        checked: false,
        id: id,
      };
    }

    fetch("http://localhost:3000/todos/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateCheckedTodo),
    })
    .then(() => getdata("http://localhost:3000/todos"));
    // .then(() => add("http://localhost:3000/todos"));
    //  console.log(ne)
  };
  const handleClick = (id) => {
    fetch("http://localhost:3000/todos/" + id, {
      method: "DELETE",
    })
    .then(() => getdata("http://localhost:3000/todos"));
    // .then(() => add("http://localhost:3000/todos"));
  };

  const total = () => {
    let collectionOfTodo = [];

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].checked === false) {
        // console.log(todos[i]);
        collectionOfTodo.push(todos[i]);
      }
      // console.log(len);
      // console.log(len.length);
    }
    let todoLength = collectionOfTodo.length;
    return todoLength;
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
        })
        .then(() => getdata("http://localhost:3000/todos"));
        // .then(() => add("http://localhost:3000/todos"));
      }
      //  console.log(lenn);
    }
  };
 

  const handleOnDrag = (result) => {
   const  rearrangeTodo = Array.from(myTodo);
    const [update] = rearrangeTodo.splice(result.source.index, 1);
    rearrangeTodo.splice(result.destination.index, 0, update);

    setMyTodo(rearrangeTodo);

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
       */}

      <div className="length-wrap">
        {todos && (
          <p className="length oo">
            {total()} {`${total() > "1" ? "items" : "item"}`} Left
          </p>
        )}
        <div className="show-wrap">
          <button
            className="all"
            onClick={() => getdata("http://localhost:3000/todos")}
            // onClick={() => add("http://localhost:3000/todos")}
          >
            All
          </button>
          {/* <button className="all" onClick={handleAll}>
            All
          </button> */}
          <button
            className="active"
            onClick={() => getdata("http://localhost:3000/todos?checked=false")}
            // onClick={() => add("http://localhost:3000/todos?checked=false")}
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
            onClick={() => getdata("http://localhost:3000/todos?checked=true")}
            // onClick={() => add("http://localhost:3000/todos?checked=true")}
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
