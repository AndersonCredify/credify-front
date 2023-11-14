"use client";

import Link from "next/link";
import AuthInput from "./AuthInput";
import { useContext, useState } from "react";
import AuthCheckBox from "./AuthCheckBox";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import Button from "./Button";
import axios from "axios";

function FormLogin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemenber] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();


  function SubmitLogin(e: any) {
    e.preventDefault();
    var isEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (login.match(isEmail)) {
      axios.post("http://localhost:3000/query-login",{ email: login, code: "", password }).then((res)=>{
        console.log(res.data)
        const response ={
          authenticationCode: res.data[0].COD_RETORNO,
          idLogon: res.data[0].ID_LOGON,
          code: res.data[0].LOGON,
          password: res.data[0].SENHA,
          email: res.data[0].EMAIL,
          activationDate: res.data[0].DT_ATIVACAO,
          validationCode: res.data[0].COD_VALIDACAO,
          errorMessenger: '',}
          setUser(response)
      })
    } else {
      let bodyParams = { Email: "", Code: login, Password: password };
      console.log(JSON.stringify(bodyParams));
    }
    switch (user.authenticationCode) {
      case '1':
        router.push("/");
        break;
      case '-2':
      case '-4':
      case '-5':
        setErrorMsg("Conta bloqueada ou cancelada. Por favor entre em contato com o suporte.");
        break
      case '-3':
        setErrorMsg("Codígo/Email ou senha inválido");
        break;
      case '-6':
        router.push("/email-register");
        break;
      case '-7':
        router.push("/email-validation");
        break;
    }
  }

console.log(user)

  return (
    <form className="mt-7 flex flex-col gap-4 text-sm ">
      <AuthInput
        setState={setLogin}
        state={login}
        type="text"
        placeholder="Email ou código"
        label="Email ou código"
      />
      <AuthInput
        setState={setPassword}
        state={password}
        type="password"
        placeholder="Senha"
        label="Senha"
      />
      <span className="text-xs text-red-500">
        {errorMsg}
      </span>
      <AuthCheckBox
        setValue={setRemenber}
        value={remember}
        label="Lembrar minha senha"
      />
      <Link href="#" className=" text-text-secundary text-sm self-end">
        Esqueceu sua senha?
      </Link>
      <div className="flex flex-col text-white gap-5">
        <Button
          onClick={(e:any) => SubmitLogin(e)}
          className="bg-black-10 hover:bg-zinc-700"
        >
          Entrar
          <img
            src="./images/foward-icon.png"
            alt="Flecha apontando pra esquerda"
          />
        </Button>
        <Button className="bg-[#005BA1] hover:bg-blue-600 ">
          <img src="./images/google-icon.png" alt="Icone do google" />
          Acessar com o Google
        </Button>
      </div>
    </form>
  );
}

export default FormLogin;
