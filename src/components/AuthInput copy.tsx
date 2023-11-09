'use client'

import { IAuthInputProps } from "@/interfaces";
import { useState } from 'react'

function AuthInput(props: IAuthInputProps) {

    const[visible, setVisible] = useState(false)

    return (
        <div>
            {props.label &&
                <label htmlFor="">{props.label}</label>
            }
            <div>
                <div className=" flex w-full border border-black-20 py-3 px-4 rounded focus-within:border-black-60 focus-within:outline-double focus-within:outline-2 focus-within:outline-black-20">
                    <input type={props.isPassword && !visible ? 'password' : 'text'}
                        className="focus-visible:outline-none w-full"
                        onChange={(e) => props.setState(e.currentTarget.value)}
                        placeholder={props.placeholder} />
                    {props.isPassword &&
                        <button onClick={(e)=>{e.preventDefault(), setVisible(!visible)}}><img src="./images/eye-icon.png" alt="" /></button>
                    }
                </div>

            </div>
        </div>
    )
}
export default AuthInput