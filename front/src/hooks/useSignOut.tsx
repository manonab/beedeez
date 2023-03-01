import {useLinkTo} from "@react-navigation/native";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {auth} from "../api/auth";
import {logout} from "../helpers/authSlice";
import {AuthPayload} from "../models/auth";

export const useSignOut = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const linkTo = useLinkTo();

  const signout = async () => {
    setIsLoading(true);
    auth
      .signOut()
      .then((resp: AuthPayload | undefined) => {
        if (resp?.data) {
          dispatch(logout());
          linkTo("SignIn");
        }
      })
      .catch(err => setError(err))
      .finally(() => console.log("Resolved"));
    setIsLoading(false);
  };

  return {error, isLoading, signout};
};
