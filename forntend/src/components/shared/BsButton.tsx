import { FC } from "react";

interface Props {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  children: string;
  type?: "submit" | "button";
}

const BsButton: FC<Props> = ({
  color = "primary",
  children,
  type = "submit",
}) => {
  return (
    <button type={type} className={"btn btn-" + color}>
      {children}
    </button>
  );
};
export default BsButton;
