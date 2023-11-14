"use client";

import { useState } from "react";
import AuthSelect from "./AuthSelect";
import AuthInput from "./AuthInput";
import AuthCheckBox from "./AuthCheckBox";
import Button from "./Button";

function FormRegister() {
  const [registerPage, setRegisterPage] = useState(1);
  const [stateConta, setStateConta] = useState("Tipo de conta");
  const [cnpj, setCnpj] = useState("");
  const [cpf, setCpf] = useState("");
  const [nasc, setNasc] = useState("");
  const [cel, setCel] = useState("");
  const [email, setEmail] = useState("");
  const [stateCargo, setStateCargo] = useState("Cargo");
  const [stateDepartamento, setStateDepartamento] = useState("Departamento");
  const [stateUF, setStateUF] = useState("UF");
  const [validaçãoCadastral, setValidaçãoCadastral] = useState(false);
  const optionsConta = ["Tipo de conta", "Juridica", "Fisica"];
  const optionsCargo = [
    "Cargo",
    "C-level",
    "Sócio",
    "Diretor",
    "Gerente",
    "Coordenador",
    "Supervisor",
    "Arquiteto",
    "Analista",
    "Estagiário",
    "Estudante",
  ];

  const optionsDepartamento = [
    "Departamento",
    "Administrativo",
    "Comercial",
    "Departamento Pessoal",
    "Engenharia",
    "Financeiro",
    "Canais",
    "Compras",
    "CS/Relacionamento",
    "E-commerce",
    "Logistica/Expedição",
    "Marketing",
    "Novovs Negócios/Expansão",
    "Operacional",
    "Planejameto",
    "Produtos",
    "Projetos",
    "Suprimentos",
    "TI",
  ];
  const optionsUF = ["UF"];
  const [error, setError] = useState<string[]>([]);

  const formOneValidation = (e: any) => {
    e.preventDefault();
    let errorArray: string[] = [];
    if (stateConta === "Tipo de conta") {
      errorArray.push("stateConta-error");
    }
    setCnpj(cnpj.toString().replace(/[^\d]+/g, ""));
    if (cnpj.length !== 14) {
      console.log(cnpj);
      errorArray.push("cnpj-error");
    }
    setCpf(cpf.toString().replace(/[^\d]+/g, ""));
    if (cpf.length !== 11) {
      errorArray.push("cpf-error");
    }
    setError(errorArray);
    if (errorArray.length === 0) {
      setRegisterPage(registerPage + 1);
    }
  };

  return (
    <>
      <div className="relative flex justify-around mt-5 after:content-[''] after:absolute after:w-4/5 after:h-[2px] after:bg-[#D9D9D9] after:left-1/2 after:top-1/2 after:-translate-x-1/2">
        <span
          className={`${
            registerPage === 1 ? "bg-black text-white" : "bg-[#D9D9D9]"
          } w-9 h-9 flex justify-center items-center z-10 rounded-full`}
        >
          1
        </span>
        <span
          className={`${
            registerPage === 2 ? "bg-black text-white" : "bg-[#D9D9D9]"
          } w-9 h-9 flex justify-center items-center z-10 rounded-full`}
        >
          2
        </span>
        <span
          className={`${
            registerPage === 3 ? "bg-black text-white" : "bg-[#D9D9D9]"
          } w-9 h-9 flex justify-center items-center z-10 rounded-full`}
        >
          3
        </span>
      </div>
      <form className="mt-7 flex flex-col gap-4 text-sm ">
        {/* ---------------------FORM #1--------------------- */}
        {registerPage === 1 && (
          <div className="flex flex-col gap-4">
            <div className="pb-4">
              <AuthSelect
                options={optionsConta}
                state={stateConta}
                setState={setStateConta}
                label="Selecione o tipo de conta"
                error={error.includes("stateConta-error")}
              />
            </div>
            {stateConta !== "Fisica" && (
              <AuthInput
                setState={setCnpj}
                state={cnpj}
                type="text"
                placeholder="Informe o CNPJ da empresa"
                label="CNPJ"
                mask="00.000.000/0000-00"
                error={error.includes("cnpj-error")}
              />
            )}
            <AuthInput
              setState={setCpf}
              state={cpf}
              type="text"
              placeholder="Informe o seu CPF"
              label={
                stateConta !== "Fisica"
                  ? "CPF do responsável pela conta"
                  : "Informe o seu CPF"
              }
              mask="000.000.000-00"
              error={error.includes("cpf-error")}
            />
            <AuthInput
              setState={setNasc}
              state={nasc}
              type="date"
              placeholder="Data de Nascimento"
              label="Data de nascimento"
            />
            <AuthInput
              setState={setCel}
              state={cel}
              type="text"
              placeholder="DDD + Número"
              label="Celular"
              mask="(00)00000-0000"
            />
            <AuthInput
              setState={setEmail}
              state={email}
              type="text"
              placeholder="Email"
              label="Email"
              error={error.includes("email-error")}
            />
            <AuthSelect
              options={optionsCargo}
              state={stateCargo}
              setState={setStateCargo}
              label="Cargo"
            />
            <AuthSelect
              options={optionsDepartamento}
              state={stateDepartamento}
              setState={setStateDepartamento}
              label="Departamento"
            />
          </div>
        )}
        {/* ---------------------FORM #2--------------------- */}
        {registerPage === 2 && (
          <div className="flex flex-col gap-7">
            <AuthInput
              setState={setEmail}
              state={email}
              type="text"
              placeholder="Informe seu CEP"
              label="CEP"
            />
            <AuthInput
              setState={setEmail}
              state={email}
              type="text"
              placeholder="Número"
              label="Número"
            />
            <AuthInput
              setState={setEmail}
              state={email}
              type="text"
              placeholder="Complemento"
              label="Complemento"
            />
            <AuthInput
              setState={setEmail}
              state={email}
              type="text"
              placeholder="Logradouro"
              label="Rua, Av, Al."
            />
            <AuthInput
              setState={setEmail}
              state={email}
              type="text"
              placeholder="Bairro"
              label="Bairro"
            />
            <AuthInput
              setState={setEmail}
              state={email}
              type="text"
              placeholder="Cidade"
              label="Cidade"
            />
            <AuthSelect
              options={optionsUF}
              state={stateUF}
              setState={setStateUF}
              label="UF"
            />
          </div>
        )}
        {/* ---------------------FORM #3--------------------- */}
        {registerPage === 3 && (
          <div className="flex flex-col gap-7">
            <AuthCheckBox
              setValue={setValidaçãoCadastral}
              value={validaçãoCadastral}
              label="Validação cadastral"
            />
            <AuthCheckBox
              setValue={setValidaçãoCadastral}
              value={validaçãoCadastral}
              label="Localização de clientes"
            />
            <AuthCheckBox
              setValue={setValidaçãoCadastral}
              value={validaçãoCadastral}
              label="Prevenção de fraudes"
            />
            <AuthCheckBox
              setValue={setValidaçãoCadastral}
              value={validaçãoCadastral}
              label="Informações veículares"
            />
            <AuthCheckBox
              setValue={setValidaçãoCadastral}
              value={validaçãoCadastral}
              label="Informações judiciais"
            />
            <AuthCheckBox
              setValue={setValidaçãoCadastral}
              value={validaçãoCadastral}
              label="Avaliação de risco de crédito (Juridico, CCF, Protestos e Negativação)"
            />
            <AuthCheckBox
              setValue={setValidaçãoCadastral}
              value={validaçãoCadastral}
              label="Marketing e Vendas"
            />
            <AuthCheckBox
              setValue={setValidaçãoCadastral}
              value={validaçãoCadastral}
              label="Análise de ativos físicos, incluindo restrições e débitos."
            />
            <AuthCheckBox
              setValue={setValidaçãoCadastral}
              value={validaçãoCadastral}
              label="Cumprimento de obrigação legal ou regulatória."
            />
            <AuthInput
              setState={setEmail}
              state={email}
              type="text"
              placeholder="Informe o numero"
              label="Quantidade de consultas mensal"
            />
          </div>
        )}
        <div className="flex flex-col text-white gap-5">
          <Button
            onClick={(e: any) => {
              formOneValidation(e);
            }}
            className="bg-black-10 hover:bg-zinc-700 transition-colors ease-in-out duration-300 flex gap-2 items-center justify-center py-3 rounded"
          >
            {registerPage === 3 ? (
              "Concluir e acessar minha conta"
            ) : (
              <>
                <span>Próximo</span>
                <img
                  src="./images/foward-icon.png"
                  alt="Flecha apontando pra esquerda"
                />
              </>
            )}
          </Button>

          {registerPage !== 1 && (
            <Button
              onClick={(e: any) => {
                e.preventDefault(), setRegisterPage(registerPage - 1);
              }}
              className="bg-[#727272] hover:bg-zinc-600 transition-colors ease-in-out duration-300 flex gap-2  items-center justify-center py-3 rounded"
            >
              <img
                src="./images/foward-icon.png"
                alt="Flecha apontando pra esquerda"
                className="transform rotate-180"
              />
              Voltar
            </Button>
          )}
        </div>
      </form>
    </>
  );
}

export default FormRegister;
