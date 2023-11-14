import { InputHTMLAttributes } from 'react'

interface IAuthSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  setState: (value: string) => void;
  state: string;
  label?: string;
  error?: boolean
}


function AuthSelect(props: IAuthSelectProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.label && <label htmlFor="">{props.label}</label>}
      <div className={`relative flex w-full overflow-hidden border rounded  ${props.error ? 'border-red-500' : 'border-black-20'} focus-within:border-black-60 focus-within:outline-double focus-within:outline-2 focus-within:outline-black-20`}>
        <select
          value={props.state}
          onChange={(e) => props.setState(e.currentTarget.value)}
          className="appearance-none focus-visible:outline-none w-full py-3 px-4 rounded "
        >
          {props.options.map((value: string, id: number) => {
            return <option key={id}>{value}</option>;
          })}
        </select>
        <img
          src="./images/arrow-down.png"
          alt="flecha apontando para baixo"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default AuthSelect;
