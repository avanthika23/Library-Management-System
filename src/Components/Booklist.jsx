import React from "react";

function Booklist(e) {
    console.log(e.cover)
  return (
    <div>
      <img src={`https://covers.openlibrary.org/b/olid/${e.cover}-S.jpg`} />
      <p>{e.title}</p>
      <p>{e.publishers}</p>
    </div>
  );
}

export default Booklist;
