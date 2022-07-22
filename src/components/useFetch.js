import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getdata = (url) => {
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
  };
  useEffect(() => {
    getdata(url);
  }, [url]);
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
  return [{ todos, isLoading, error }, getdata];
};
