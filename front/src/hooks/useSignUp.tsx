import {useLinkTo} from "@react-navigation/native";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {auth} from "../api/auth";
import {signUp} from "../helpers/authSlice";
import {Auth, AuthPayload} from "../models/auth";

interface UseSignUpResult {
  error: string | null;
  isLoading: boolean;
  signUp: (params: Auth) => Promise<void>;
}

export const useSignUp = (): UseSignUpResult => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const linkTo = useLinkTo();

  const signUpHandler = async (params: Auth) => {
    setIsLoading(true);
    auth
      .signUp(params)
      .then((resp: AuthPayload | undefined) => {
        if (resp?.data) {
          dispatch(signUp({password: params.password, email: params.email}));
          linkTo("/signin");
        }
      })
      .catch(err => setError(err))
      .finally(() => console.log("Resolved"));
    setIsLoading(false);
  };

  return {error, isLoading, signUp: signUpHandler};
};
