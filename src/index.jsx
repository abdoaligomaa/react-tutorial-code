import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Book";
import bookData from "./data";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Book
      img={bookData.image}
      title={bookData.title}
      description={bookData.description}
      price={bookData.price}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
