import { View, Text } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

export function SignIn() {
  const { primary } = theme.colors;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Entypo name="spotify" size={60} color={primary} />
        <Text style={styles.title}>
          Millions of songs. {"\n"} Free for you.
        </Text>
      </View>
      <View style={styles.auths}>
      </View>
    </View>
  );
}
