import LoginForm from "@/components/LoginForm";
import Link from "next/link";

function Login() {
  return (
    <div>
      <h1 className="text-2xl">Acesso a conta</h1>
      <span className=" text-text-secundary">Informe suas credenciais</span>
      <LoginForm />
      <div className="flex whitespace-nowrap justify-center gap-2 text-xs lg:text-sm pt-10">
        <span>Ainda não tem conta?</span>
        <Link href="/register" className="text-[#014100]">
          Cadastre-se agora
        </Link>
      </div>
      <div className="pt-8 text-xs flex justify-center">
        <Link href="#" className=" ">
          Política de Privacidade
        </Link>
      </div>
    </div>
  );
}
export default Login;
