import { FC, ReactNode } from "react";
import Alert from "./Alert";

interface Props {
  children: ReactNode;
}

const ErrorMessage: FC<Props> = ({ children }) => {
  return (
    <div className="mt-2">
      <Alert >{children}</Alert>
    </div>
  );
};
export default ErrorMessage;
