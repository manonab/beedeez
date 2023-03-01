import React, {useState} from "react";
import {
  TextInput,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  SafeAreaView,
  Pressable,
} from "react-native";
import {useStyles} from "../../hooks/useStyles";
import {useSignIn} from "../../hooks/useSignIn";
import {useLinkTo} from "@react-navigation/native";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {signIn} = useSignIn();
  const linkTo = useLinkTo();
  const styles = useStyles();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <View style={styles.loginContainer}>
        <SafeAreaView style={styles.safeAreaView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.content}>
            <Text style={styles.loginTitle}>Welcome back!</Text>
            <Text style={styles.subtitle}>Sign in to your account</Text>
            <Pressable>
              <View style={styles.form}>
                <TextInput
                  placeholder="Email"
                  onChangeText={text => setEmail(text)}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  returnKeyType="next"
                  style={styles.textInput}
                  textContentType="username"
                />
              </View>
            </Pressable>

            <Pressable>
              <View style={styles.form}>
                <TextInput
                  placeholder="Password"
                  onChangeText={text => setPassword(text)}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="done"
                  secureTextEntry
                  style={styles.textInput}
                  textContentType="password"
                />
              </View>
            </Pressable>
          </KeyboardAvoidingView>
          <TouchableWithoutFeedback>
            <Pressable
              style={styles.loginButton}
              onPress={() => signIn({email, password})}>
              <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
          </TouchableWithoutFeedback>
          <Pressable onPress={() => linkTo("/signup")}>
            <Text style={styles.create}>New ? Create your account</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};
