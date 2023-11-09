export interface IAuthInputProps {
    label?: string,
    state: string,
    setState: (valeu: string) => void,
    isPassword: boolean,
    placeholder?: string
    mask?: string
}