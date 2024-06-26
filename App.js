import { useState } from 'react'
import { View, Image, Text, TextInput, StyleSheet, Button, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native'

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (email === '') errors.email = "email is required";
    if (password === '') errors.password = "password isn't correct";

    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setEmail("");
      setPassword("");
      return true;
    }
    return false;
  };

  return (
    // View with variable paddingBottom depending on the apperance of keyboard
    <KeyboardAvoidingView
      style={styles.safeContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Image source={require('./assets/adaptive-icon.png')} style={styles.img} resizeMode="cover" />
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          style={[styles.input, { borderColor: errors.email ? "red" : "black" }]}
          placeholder='Enter Email' f
          onChangeText={setEmail}
          autoComplete='email'
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
        />
        {
          errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null
        }
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          style={[styles.input, { borderColor: errors.password ? "red" : "black" }]}
          placeholder='Enter Password'
          onChangeText={setPassword}
          autoComplete='new-password'
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
        />
        {
          errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
        }
        <Button title="login" onPress={() => validateForm()} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  container: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    alignSelf: "center",
  },
  label: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 5
  },
  errorText: {
    color: "red",
    fontSize: 15,
    marginBottom: 10,
  }
});