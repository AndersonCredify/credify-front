import AuthPage from "@/components/AuthPage";
import FormLogin from "@/components/FormLogin";
import Link from "next/link";

function Login() {
  return (
    <AuthPage title="Acesso a conta" subTitle="Informe suas credenciais">
      <FormLogin />
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
    </AuthPage>
  );
}
export default Login;
