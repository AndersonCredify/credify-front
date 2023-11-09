'use client'

import Link from "next/link";
import AuthInput from "./AuthInput";
import { useState } from 'react'
import AuthCheckBox from "./AuthCheckBox";

function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemenber] = useState(false)

    return (
        <form className="mt-7 flex flex-col gap-4 text-sm ">
            <label className="lg:text-lg">Email e senha</label>
            <AuthInput setState={setEmail} state={email} isPassword={false} placeholder="Email" />
            <AuthInput setState={setPassword} state={password} isPassword placeholder="Senha" />
            <AuthCheckBox setValue={setRemenber} value={remember} label="Lembrar minha senha"/>
            <Link href='#' className=" text-text-secundary text-sm self-end">Esqueceu sua senha?</Link>
            <div className="flex flex-col text-white gap-5">
                <button className="bg-black-10 hover:bg-zinc-700 transition-colors ease-in-out duration-300 flex gap-2 items-center justify-center py-3 rounded">Entrar<img src="./images/foward-icon.png" alt="Flecha apontando pra esquerda" /></button>
                <button className="bg-[#005BA1] hover:bg-blue-600 transition-colors ease-in-out duration-300 flex gap-2  items-center justify-center py-3 rounded"><img src="./images/google-icon.png" alt="Icone do google" />Acessar com o Google</button>
            </div>
        </form>
    );
}

export default LoginForm;