"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

import { addnumbers, subnumbers, multiplynumbers, dividnumbers, clearresult, calculatenumbers } from "./actions"

export default function Home() {

  // const [valuex, setValuex] = useState("");

  // const [valuey, setValuey] = useState("");

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  const [animation, setAnimation] = useState(false);

  const [openBracket, setOpenBracket] = useState(true);


  // const [success, setSuccess] = useState(false);

  // useEffect(() => {

  //   if (result !== "") {

  //     setSuccess(true);

  //     const timer = setTimeout(() => {
  //       setSuccess(false);
  //     }, 1000);

  //     return () => clearTimeout(timer);
  //   }

  // }, [result]);



  // const addnum = async () => {

  //   if (!valuex || !valuey) return;
  //   setLoading(true);

  //   const result1 = await addnumbers(valuex, valuey);

  //   setResult(result1);
  //   // setValuex("");
  //   // setValuey("");
  //   setLoading(false);


  // };
  // const subnum = async () => {

  //   if (!valuex || !valuey) return;
  //   setLoading(true);

  //   const result1 = await subnumbers(valuex, valuey);

  //   setResult(result1);
  //   // setValuex("");
  //   // setValuey("");
  //   setLoading(false);


  // };
  // const multiplynum = async () => {

  //   if (!valuex || !valuey) return;
  //   setLoading(true);

  //   const result1 = await multiplynumbers(valuex, valuey);

  //   setResult(result1);
  //   // setValuex("");
  //   // setValuey("");
  //   setLoading(false);


  // };
  // const divnum = async () => {

  //   if (!valuex || !valuey) return;
  //   setLoading(true);

  //   const result1 = await dividnumbers(valuex, valuey);

  //   setResult(result1);
  //   // setValuex("");
  //   // setValuey("");
  //   setLoading(false);


  // };

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
      {/* <input className="border-2 border-white px-3 py-2 ml-4"
        value={valuex}
        placeholder="Enter the value"
        onChange={(e) => setValuex(e.target.value)}
      />
      <br />
      <br />
      <input className="border-2 border-white px-3 p-2 ml-4"
        value={valuey}
        placeholder="Enter the value"
        onChange={(e) => setValuey(e.target.value)}
      /> */}

      <br />
      <br />
      {/* <label className="ml-47 text-2xl font-bold">Display-result</label> */}
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

      {/* <input
        value={result}
        readOnly
        className={`border-2 border-white px-3 p-2  ${success ? "bg-green-300" : ""
          } transition-all duration-500`}
      /> */}
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
