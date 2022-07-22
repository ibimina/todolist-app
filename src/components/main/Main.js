import Create from "../shared/Create";

import "./todolist.css";
import"../header/header.css"
import Todo from "../shared/Todo";
import { useFetch } from "../useFetch";

export default function Main({theme,changeTheme}) {
  // const [todos, setTodos] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const abortConst = new AbortController();

  //   fetch(url, { signal: abortConst.signal })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error("could not fetch data for the resource");
  //       }
  //       return res.json();
  //     })
  //     .then((d) => {
  //       setTodos(d);
  //       setIsLoading(false);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       if (err.name === "AbortError") {
  //         console.log("fetch abort");
  //       } else {
  //         setError(err.message);
  //         setIsLoading(false);
  //       }
  //     });
  //   return () => abortConst.abort();
  // }, [url]);

  // const add = (url) => {
  //   fetch(url)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((d) => {
  //       setTodos(d);
  //       setIsLoading(false);
  //       setError(null);
  //     });
  // };
    let url = "http://localhost:3000/todos";
const [{todos,isLoading,error},getdata]= useFetch(url)

// console.log(todos)
  return (
    <main>
      <div className="con">
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
        <Create getdata={getdata} />
        {error && <div>{error}</div>}
        {isLoading && <div>Loading</div>}
        {todos && <Todo todos={todos} getdata={getdata} />}
        <p className="footer">Drag and drop to reorder list</p>
      </div>{" "}
    </main>
  );
}
