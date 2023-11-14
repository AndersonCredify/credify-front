"use client";

import { IMaskInput } from "react-imask";
import { useState, InputHTMLAttributes } from "react";

export interface IAuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  state: string,
  setState: (valeu: string) => void,
  type: string
  placeholder?: string
  mask?: string
  error?: boolean
}

function AuthInput(props: IAuthInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {props.label && <label htmlFor="">{props.label}</label>}
      <div>
        <div className={`appearance-none flex w-full border ${props.error ? 'border-red-500' : 'border-black-20'} py-3 px-4 rounded focus-within:border-black-60 focus-within:outline-double focus-within:outline-2 focus-within:outline-black-20`}>
          <IMaskInput
            value={props.state}
            mask={props.mask}
            className=" focus-visible:outline-none w-full"
            type={props.type === 'password' && !visible ? "password" : props.type === 'date' ? 'date' : "text"}
            placeholder={props.placeholder}
            onChange={(e: any) => props.mask ?
              props.setState(e.currentTarget.value.replace(/[^\d]+/g, '')) :
              props.setState(e.currentTarget.value)}
          />
          {props.type === 'password' && (
            <button
              onClick={(e) => {
                e.preventDefault(), setVisible(!visible);
              }}
            >
              <img src="./images/eye-icon.png" alt="" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
export default AuthInput;
