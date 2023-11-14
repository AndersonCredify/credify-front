"use client";

import { useState } from "react";
import AuthInput from "./AuthInput";
import { useRouter } from "next/navigation";
import Button from "./Button";

function FormEmailRegister() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  function ValidateEmail(e: any) {
    e.preventDefault();
    if (email === confirmEmail) {
      const isEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(isEmail)) {
        router.push("/email-validation");
      } else {
        setErrorMsg("Email invalido");
      }
    } else {
      setErrorMsg("Os emails são diferentes");
    }
  }

  return (
    <form className="mt-7 flex flex-col gap-4 text-sm ">
      <AuthInput
        setState={setEmail}
        state={email}
        type="text"
        placeholder="Email"
        label="Email"
      />
      <AuthInput
        setState={setConfirmEmail}
        state={confirmEmail}
        type="text"
        placeholder="Confirme seu email"
        label="Confirme seu email"
      />
      <span className="text-xs text-red-500">{errorMsg}</span>
      <div className="flex flex-col text-white gap-5">
        <Button
          onClick={(e:any) => ValidateEmail(e)}
          className="bg-black-10 hover:bg-zinc-700"
        >
          Cadastrar
        </Button>
        <Button className="bg-[#005BA1] hover:bg-blue-600 ">
          <img src="./images/google-icon.png" alt="Icone do google" />
          Acessar com o Google
        </Button>
      </div>
    </form>
  );
}

export default FormEmailRegister;
