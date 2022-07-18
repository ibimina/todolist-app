import Create from "./Create";
import React,{ useEffect,useState} from "react";
import "./todolist.css";
import Todo from "./Todo";


export default function Main() {

 const [todos, setTodos] = useState(null);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);
let url = "http://localhost:3000/todos";

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
 
const add= (url)=>{
 
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((d) => {
      setTodos(d);
      setIsLoading(false);
      setError(null);
    });
  
}

// setTodos([...todos,todo])


//  const { todos,isLoading, error } = useFetch("http://localhost:3000/todos");
  
  return (
    <main>
      <Create add={add} />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading</div>}
      {todos && <Todo todos={todos} />}
    </main>
  );
}
