import React, { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  // return newState
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

export default function hookDataFetchUsingReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(res => res.json())
      .then((response) => dispatch({ type: "FETCH_SUCCESS", payload: response }))
      .catch((error) =>  dispatch({ type: "FETCH_ERROR" } ));
  }, []);

  return (
    <>
      <div>
        <b>TITLE : </b>
        {state.loading ? "Loading" : state.post.title}
        {state.error ? state.error : null}
      </div>
    </>
  );
}
