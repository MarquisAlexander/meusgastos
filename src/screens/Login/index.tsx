import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { LoginForm } from "./LoginForm";
import { AuthHeader } from "@/components/AuthHeader";

export default function Login() {
  return (
    <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AuthHeader />
        <LoginForm />
      </View>
    </DismissKeyboardView>
  );
}
