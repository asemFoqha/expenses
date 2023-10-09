import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert: FC<Props> = ({ children = "alert" }) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};
export default Alert;
