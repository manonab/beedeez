import {useLinkTo} from "@react-navigation/native";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {auth} from "../api/auth";
import {login} from "../helpers/authSlice";
import {AuthPayload} from "../models/auth";

interface SignInParams {
  email: string;
  password: string;
}

interface SignInResult {
  error: string | null;
  isLoading: boolean;
  signIn: (params: SignInParams) => Promise<void>;
}

export const useSignIn = (): SignInResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const linkTo = useLinkTo();

  const signIn = async (params: SignInParams) => {
    setIsLoading(true);
    auth
      .signIn(params)
      .then((resp: AuthPayload | undefined) => {
        if (resp?.data) {
          const userID = resp?.data.data.id;
          dispatch(login({userID}));
          linkTo("/stationlist");
        } else {
          setError("You must fullfil the informations");
        }
      })
      .catch(err => setError(err))
      .finally(() => console.log("Resolved"));
    setIsLoading(false);
  };

  return {error, isLoading, signIn};
};

// Example authenticate function (replace with your own logic)
// const authenticate = async (email: string, password: string) => {
//   // Perform authentication logic here...
//   return {accessToken: 'fake_access_token', refreshToken: 'fake_refresh_token'};
// };
