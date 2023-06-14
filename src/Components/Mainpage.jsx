import React, { useEffect, useState } from "react";
import cart from "../assets/cart.png";
import axios from "axios";
import Booklist from "./booklist";
import Bookdata from "../Data/Booksdata.json";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Mainpage() {
  const [Data, Setdata] = useState([]);
  const [Loading, Setloading] = useState(true);
  const [Cart, Setcart] = useState(false);
  const [Cartbook, Setcartbook] = useState([]);
  const [Rent, Setrent] = useState(0);
  const [Searchbooks, Setsearchbooks] = useState([]);
  const [Modal, Showmodal] = useState(false);
  const [Search, Setsearch] = useState("");
  const toastid = toast;
  const Navigate = useNavigate();
  return (
    <div className="h-full w-full bg-[#fdf8f4] ">
      <div className="flex mt-6 ml-3 gap-4">
        <input
          className="py-2 px-[30%] rounded-full border-2 border-gray-400 bg-[#f7efe7] "
          placeholder="Search For Books"
          onChange={(e) => {
            Setsearch(e.target.value);
          }}
        ></input>
        <button
          className="py-2 px-8 rounded-full border-2 border-gray-400 bg-[#f7efe7] "
          onClick={(e) => {
            var a = Bookdata.filter((a) =>
              a.title.toLocaleLowerCase().includes(Search.toLocaleLowerCase())
            );
            Setsearchbooks(a);
            Showmodal(true);
          }}
        >
          {" "}
          Search
        </button>
        <select
          className="py-2 px-8 rounded-full border-2 border-gray-400 bg-[#f7efe7]"
          type="select"
        >
          <option>Comedy</option>
          <option>Action</option>
        </select>
        <div
          className="py-2 px-6 rounded-full border-2 border-gray-400 bg-[#f7efe7] relative "
          onClick={(e) => {
            console.log(Cartbook);
            Setcart(true);
          }}
        >
          <img className="h-7 w-7" src={cart} />
          <p className=" absolute top-0 right-0 mr-3 mt-1 text-red-700 text-sm">
            {Cartbook.length == 0 ? "" : Cartbook.length}
          </p>
        </div>
        <div className="px-2 rounded-full border-2 border-gray-400 bg-[#f7efe7]  ">
          <p className="mx-auto mt-2">Rent Book : {Rent}</p>
        </div>
      </div>
      <h1 className=" mt-6 ml-5 font-HelloBranch text-2xl text-[#72675e]">
        Popular Book List
      </h1>

      <div className="flex">
        {Modal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[500px] my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Cart Item</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => Setcart(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="grid  gap-5 p-8 justify-start items-start ">
                    {Searchbooks.map((item) => {
                      return (
                        <div className="grid grid-flow-col border-2 border-spacing-2 p-2  border-gray-300">
                          <img
                            className="h-[6rem] "
                            src={`https://covers.openlibrary.org/b/isbn/${item.isbn}-L.jpg`}
                          />
                          <div className="ml-5 ">
                            <p className="text-center font-HelloBranch text-3xl  mt-3">
                              {item.title}
                            </p>
                            <p className="text-center">{item.authors[0]}</p>
                          </div>
                          <button
                            className="text-center text-4xl ml-3"
                            onClick={(e) => {
                              toast.success(
                                "Books are Successfully Added To Cart",
                                {
                                  id: toastid,
                                }
                              );
                              let a = Cartbook;
                              a.push(item);
                              Setcartbook(a);
                            }}
                          >
                            +
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        Setsearchbooks([]);
                        Showmodal(false);
                      }}
                    >
                      Clear
                    </button>
                    <button
                      className="text-emerald-500  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded  hover: outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        Setsearchbooks([]);
                        Showmodal(false);
                      }}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : (
          <></>
        )}
        {Cart ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[400px] my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Cart Item</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => Setcart(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="grid  gap-10 p-8 ">
                    {Cartbook.map((e) => {
                      return (
                        <div className="grid grid-flow-col justify-start items-center">
                          <img
                            className="h-[6rem] "
                            src={`https://covers.openlibrary.org/b/isbn/${e.isbn}-L.jpg`}
                          />
                          <div className="ml-3">
                            <p className=" font-HelloBranch text-3xl  mt-3">
                              {e.title}
                            </p>
                            <p className="text-center">{e.authors[0]}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        Setcartbook([]);
                        Setcart(false);
                        toast.success("Books are Successfully Removed", {
                          id: toastid,
                        });
                      }}
                    >
                      Clear
                    </button>
                    <button
                      className="text-emerald-500  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded  hover: outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        toast.success("Books are Successfully Rented", {
                          id: toastid,
                        });
                        Setrent(Rent + Cartbook.length);
                        Setcart(false);
                        Setcartbook([]);
                      }}
                    >
                      Rent
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : (
          <></>
        )}
        {Bookdata.slice(0, 6).map((item) => {
          return (
            <div className="relative flex flex-col m-5 pt-4 w-[16rem] shadow-xl bg-inherit rounded-lg hover:scale-105 duration-200 ease-in-out hover:bg-[#efe5da]">
              <img
                className="h-[12rem] mx-auto"
                src={`https://covers.openlibrary.org/b/isbn/${item.isbn}-L.jpg`}
              />
              <p className="mx-auto text-center font-mono text-xl mt-3">
                {item.title}
              </p>
              <p className="mx-auto text-center font-semibold text-red-600 py-2">
                {item.authors[0]}
              </p>
              <div className="rounded-full absolute top-0 right-0 text-2xl mr-2">
                <button
                  onClick={(e) => {
                    toast.success("Books are Successfully Added To Cart", {
                      id: toastid,
                    });
                    let a = Cartbook;
                    a.push(item);
                    Setcartbook(a);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className=" mt-6 ml-5 font-HelloBranch text-2xl text-[#72675e]">
        Trending Book List
      </h1>

      <div className="flex">
        {Bookdata.slice(6, 12).map((item) => {
          return (
            <div className=" relative m-5 pt-4  hover:bg-[#efe5da] w-[16rem] shadow-xl bg-inherit rounded-lg hover:scale-105 duration-200 ease-in-out">
              <img
                className="h-[12rem] mx-auto"
                src={`https://covers.openlibrary.org/b/isbn/${item.isbn}-L.jpg`}
              />
              <p className="mx-auto text-center font-mono text-xl mt-3">
                {item.title}
              </p>
              <p className="mx-auto text-center font-semibold text-red-600 py-2">
                {item.authors[0]}
              </p>
              <div className="rounded-full absolute top-0 right-0 text-2xl mr-2">
                <button
                  onClick={() => {
                    toast.success("Books are Successfully Added To Cart", {
                      id: toastid,
                    });
                    let a = Cartbook;
                    a.push(item);
                    Setcartbook(a);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default Mainpage;
