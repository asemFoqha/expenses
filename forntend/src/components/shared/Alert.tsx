import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert: FC<Props> = ({ children = "alert" }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {children}
    </div>
  );
};
export default Alert;
