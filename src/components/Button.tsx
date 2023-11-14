import { ButtonHTMLAttributes, ReactNode } from "react";

function Button(props: any) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        paddingBottom: "12px",
        paddingTop: "12px",
        borderRadius: "4px",
        transition: "all 300ms ease-in-out ",
      }}
      {...props}
    >
      {props.children}
    </button>
  );
}
export default Button;
