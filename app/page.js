"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

import {clearresult, calculatenumbers } from "./actions"

export default function Home() {


  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  const [animation, setAnimation] = useState(false);


  const calculate = async () => {

    setLoading(true)

    const result1 = await calculatenumbers(result);

    if (result1 === true) {
      setAnimation(true);

      setTimeout(() => {
        setAnimation(false);
      }, 3000);
      setResult("");
      setLoading(false);
      return;
    }
    setResult(result1);
    setLoading(false);

  };

  const clearfun = async () => {

    setLoading(true);

    const result1 = await clearresult();

    setResult(result1);

    setLoading(false);
  };

  const handleClick = (value) => {

    setResult(result + value);

  };

  //  
  const handleBracket = () => {

    const openCount = (result.match(/\(/g) || []).length;
    const closeCount = (result.match(/\)/g) || []).length;

    const lastChar = result.slice(-1);

    if (
      result === "" ||
      "+-*/^(".includes(lastChar)
    ) {
      setResult(prev => prev + "(");
    }
    else if (openCount > closeCount) {
      setResult(prev => prev + ")");
    }
    else {
      setResult(prev => prev + "(");
    }
  };
  return (
    <div>

      <h1 className="flex justify-center items-center mb-10 text-2xl font-bold">Calculator</h1>

      <br />
      <br />

      <br />

      <div className="flex justify-center items-center">
        <table className=" ml-4 w-100 h-100 border-collapse ">
          <thead>
            <tr>
              <td colSpan="4">
                <input
                  className=" w-full h-full border-2 border-white p-5 text-2xl"
                  value={result}
                  onChange={(e) => setResult(e.target.value)}
                  readOnly

                />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2"><button
                className="  hover:bg-gray-700
                             active:scale-95
                             transition-all
                             duration-150 
                             text-xl bg-red-500 w-full h-full py-2  border border-white text-black"
                onClick={clearfun}
              >C
              </button></td>
              <td
              ><button
                className="hover:bg-gray-700 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white  bg-green-500  py-2"
                onClick={handleBracket}
              >()
                </button>
              </td>

              <td><button
                className="hover:bg-gray-700 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white  bg-green-500  py-2"
                onClick={() => handleClick("/")}
              >/
              </button></td>

            </tr>
            <tr>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150  text-xl w-full h-full border border-white py-2" onClick={() => handleClick("7")}>7</button></td>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white py-2" onClick={() => handleClick("8")}>8</button></td>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white py-2" onClick={() => handleClick("9")}>9</button></td>
              <td><button
                className="
                             hover:bg-gray-700
                             active:scale-95
                             transition-all
                             duration-150 
                text-xl w-full h-full border border-white bg-green-500  py-2 border-1"
                onClick={() => handleClick("*")}
              >*
              </button></td>
            </tr>
            <tr>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white py-2" onClick={() => handleClick("4")}>4</button></td>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white py-2" onClick={() => handleClick("5")}>5</button></td>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white py-2" onClick={() => handleClick("6")}>6</button></td>
              <td><button
                className="
                             hover:bg-gray-700
                             active:scale-95
                             transition-all
                             duration-150 
                text-xl w-full h-full border border-white py-2 bg-green-500 py-2 border-1"
                onClick={() => handleClick("-")}
              >-
              </button></td>
            </tr>
            <tr>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white py-2" onClick={() => handleClick("1")}>1</button></td>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white py-2" onClick={() => handleClick("2")}>2</button></td>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white py-2" onClick={() => handleClick("3")}>3</button></td>
              <td><button
                className="
                             hover:bg-gray-700
                             active:scale-95
                             transition-all
                             duration-150  
                text-xl w-full h-full border border-white py-2 bg-green-500 py-2 border-1"
                onClick={() => handleClick("+")}
              >+
              </button></td>
            </tr>

            <tr>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white py-2" onClick={() => handleClick("0")}>0</button></td>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white py-2" onClick={() => handleClick(".")}>.</button></td>
              <td><button className="hover:bg-mauve-600 active:scale-95 transition-all  duration-150 text-xl w-full h-full border border-white py-2 text-orange-400" onClick={() => handleClick("^")}>^</button></td>

              <td><button
                className="
                             hover:bg-sky-700
                             active:scale-95
                             transition-all
                             duration-150 
                bg-sky-500 text-xl w-full h-full border border-white py-2"
                onClick={calculate}
              >=
              </button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      {loading && (
        <h2>calculating...</h2>
      )}
      {animation && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="animate-bounce bg-neutral-700 text-white px-6 py-3 rounded-full">
            Can't divide by zero
          </div>
        </div>
      )}
    </div>
  );
}
