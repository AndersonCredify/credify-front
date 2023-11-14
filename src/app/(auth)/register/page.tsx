import AuthPage from "@/components/AuthPage";
import FormRegister from "@/components/FormRegister";

function Register() {
  return (
    <AuthPage title="Criar nova conta" subTitle="Informe os dados para a criação da nova conta">
      <FormRegister />
    </AuthPage>
  );
}

export default Register;
