import {ReactNode} from 'react'

function AuthPage(props: { children: ReactNode; title: string; subTitle: string; }) {
  return (
    <>
      <div className="w-[14px] h-screen bg-red-credify"></div>
      <div className=" w-full md:w-2/5 h-screen overflow-y-scroll  ">
        <div className="bg-white flex items-center justify-center py-28">
          <div className="w-3/4 flex flex-col">
            <img
              src="./images/logo-credify.png"
              alt="Logo da credify"
              className="max-w-xs max-h-20"
            />
            <h1 className="text-2xl">{props.title}</h1>
            <span className=" text-text-secundary">
              {props.subTitle}
            </span>
            {props.children}
          </div>
        </div>
      </div>
      <div className="hidden md:block bg-[url('/images/credify-background.png')] w-3/5 bg-no-repeat bg-cover bg-center min-h-screen" />
    </>
  );
}
export default AuthPage;
