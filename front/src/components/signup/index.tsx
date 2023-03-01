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
import {useLinkTo} from "@react-navigation/native";
import {useStyles} from "../../hooks/useStyles";
import {useSignUp} from "../../hooks/useSignUp";

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {signUp} = useSignUp();
  const styles = useStyles();
  const linkTo = useLinkTo();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <View style={styles.loginContainer}>
        <SafeAreaView style={styles.safeAreaView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.content}>
            <Text style={styles.loginTitle}>Create your account</Text>

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
              onPress={() => signUp({email, password})}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Create your account</Text>
            </Pressable>
          </TouchableWithoutFeedback>
          <Pressable onPress={() => linkTo("/signin")}>
            <Text style={styles.create}>Already an account ? Log in</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};
