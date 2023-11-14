import AuthPage from "@/components/AuthPage";
import FormEmailRegister from "@/components/FormEmailRegister";

function EmailRegister() {
  return (
    <AuthPage title="Cadastro de email" subTitle="Informe seu email">
      <FormEmailRegister/>
    </AuthPage>
  );
}
export default EmailRegister;
