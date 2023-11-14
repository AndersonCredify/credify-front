import AuthPage from "@/components/AuthPage";
import FormEmailValidation from "@/components/FormEmailvalidation";

function EmailValidation() {
  return (
    <AuthPage title="Validação do e-mail" subTitle="Informe o token enviado no seu email">
      <FormEmailValidation />
    </AuthPage>
  );
}
export default EmailValidation;
