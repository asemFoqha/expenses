import { ReactNode, useMemo, useState } from "react";

import { AuthContext } from "../../state/authContext";
import IUser from "../../services/interfaces/IUser";



const AuthContextComponent = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const contextValue = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextComponent;
