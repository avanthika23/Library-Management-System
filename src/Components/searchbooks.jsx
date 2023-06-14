import React from "react";
import Bookdata from "../Data/Booksdata.json";
function Searchbooks() {
  return (
    <div className="bg-red-700 ">
      {" "}
      {Bookdata.slice(6, 21).map((e) => {
        return (
          <div className="m-5 pt-4  hover:bg-[#efe5da] w-[16rem] shadow-xl bg-inherit rounded-lg hover:scale-105 duration-200 ease-in-out">
            <img
              className="h-[12rem] mx-auto"
              src={`https://covers.openlibrary.org/b/isbn/${e.isbn}-L.jpg`}
            />
            <p className="mx-auto text-center font-mono text-xl mt-3">
              {e.title}
            </p>
            <p className="mx-auto text-center font-semibold text-red-600 py-2">
              {e.authors[0]}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Searchbooks;
