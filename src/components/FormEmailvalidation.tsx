"use client";

import { useState } from "react";

let arrayValidation = [0, 0, 0, 0, 0, 0];

function FormEmailValidation() {
  const [validation, setValidation] = useState("");


  function incrementValidation(index: number, value: number) {
    arrayValidation[index] = value;
    const formatedArrayValidation = String(arrayValidation).replace(/,/g, "")
    setValidation(formatedArrayValidation);
  }

  console.log(validation)

  return (
    <form className="mt-7 flex flex-col gap-4 text-sm ">
      <div className="flex pb-10 justify-between">
        <input
          onChange={(e) => incrementValidation(0, +e.currentTarget.value)}
          maxLength={1}
          type="number"
          className="remove-arrow text-center py-3 px-4 w-[13%] border border-black-20 rounded focus-within:border-black-60 focus-within:outline-double focus-within:outline-2 focus-within:outline-black-20"
        />
        <input
          onChange={(e) => incrementValidation(1, +e.currentTarget.value)}
          maxLength={1}
          type="number"
          className="remove-arrow text-center py-3 px-4 w-[13%] border border-black-20 rounded focus-within:border-black-60 focus-within:outline-double focus-within:outline-2 focus-within:outline-black-20"
        />
        <input
          onChange={(e) => incrementValidation(2, +e.currentTarget.value)}
          maxLength={1}
          type="number"
          className="remove-arrow text-center py-3 px-4 w-[13%] border border-black-20 rounded focus-within:border-black-60 focus-within:outline-double focus-within:outline-2 focus-within:outline-black-20"
        />
        <input
          onChange={(e) => incrementValidation(3, +e.currentTarget.value)}
          maxLength={1}
          type="number"
          className="remove-arrow text-center py-3 px-4 w-[13%] border border-black-20 rounded focus-within:border-black-60 focus-within:outline-double focus-within:outline-2 focus-within:outline-black-20"
        />
        <input
          onChange={(e) => incrementValidation(4, +e.currentTarget.value)}
          maxLength={1}
          type="number"
          className="remove-arrow text-center py-3 px-4 w-[13%] border border-black-20 rounded focus-within:border-black-60 focus-within:outline-double focus-within:outline-2 focus-within:outline-black-20"
        />
        <input
          onChange={(e) => incrementValidation(5, +e.currentTarget.value)}
          maxLength={1}
          type="number"
          className="remove-arrow text-center py-3 px-4 w-[13%] border border-black-20 rounded focus-within:border-black-60 focus-within:outline-double focus-within:outline-2 focus-within:outline-black-20"
        />
      </div>
      <div className="flex flex-col text-white gap-5">
        <button className="bg-black-10 hover:bg-zinc-700 transition-colors ease-in-out duration-300 flex gap-2 items-center justify-center py-3 rounded">
          Confirmar
        </button>
        <button className="bg-[#727272] hover:bg-zinc-600 transition-colors ease-in-out duration-300 flex gap-2  items-center justify-center py-3 rounded">
          Enviar novo token
        </button>
      </div>
    </form>
  );
}
export default FormEmailValidation;
