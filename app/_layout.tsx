import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!loaded)
    // Async font loading only occurs in development.
    return null;

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          // headerShown: false,
        }}
      />
    </Stack>
  );
}
