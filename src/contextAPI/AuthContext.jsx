import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState({
    user: null,
    token: "",
  });
  //   console.log(loggedUser);
  console.log(loggedUser);

  const loginUser = localStorage.getItem("user");
  //   console.log(loginUser);

  useEffect(() => {
    if (loginUser) {
      const user = localStorage.getItem("user");
      const parseUser = JSON.parse(user);
      //   console.log(parseUser);
      setLoggedUser({
        ...loggedUser,
        user: parseUser.message,
        token: parseUser.token,
      });
      console.log(loggedUser);
    }
  }, [loginUser]);

  return (
    <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
