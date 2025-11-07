import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, TextInput } from "react-native";

export default function Login() {
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();

  return (
    <DismissKeyboardView>
      <Text className="text-xl font-bold text-blue-500">tela de login</Text>
      <TextInput className="bg-gray500 w-full" />
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text>registrar</Text>
      </TouchableOpacity>
    </DismissKeyboardView>
  );
}
