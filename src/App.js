import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState("");
  const [loading, setLoading] = useState(true);
  const personObj = useRef("");

  let url = "https://randomuser.me/api";

  async function fetchData(url) {
    let response = await fetch(url);
    let data = await response.json();
    personObj.current = data.results[0].picture.large;
    let betterData = JSON.stringify(data, null, 2);
    setDisplay(betterData);
    setLoading(false);
    // fetch(url)
    // .then(response => {
    //   if (response.ok){
    //     return response.json()
    //   }
    //   throw response;
    // })
    // .then(data => {
    //   setDisplay(JSON.stringify(data))
    //   setLoading(false)
    // })
    // .catch(error => {
    //   return error
    // })
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  let loadingMessage;

  if (loading) {
    loadingMessage = <div>Loading...</div>;
  }

  console.log(personObj.current);

  //results[0].picture.large
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
      {loadingMessage}

      <pre style={{ textAlign: "start" }}>
        <img src={personObj.current} alt="Person"></img>
        {display}
      </pre>
    </div>
  );
}
