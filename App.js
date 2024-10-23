import { Text, View } from "react-native";
import { Profile } from "./components/Profile/Profile";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {s} from "./App.style";

export default function App() {
  return ( //the two lines below ensure that the components being displayed show at a proper place in the device.
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "orange", flex: 1, justifyContent: "center", alignItems: "center"}}>
      {/* <Text style={{ color: "red"}}>Hello!</Text>
        <Text style={s.title}>Hello!</Text>
        <View style={s.square}>
          <Text style={s.innerText}>Wags!</Text>
        </View>
        <View style={{backgroundColor: "black", flex: 1}}></View>
        <View style={{backgroundColor: "blue", flex: 3}}></View> */}

        <View style={s.box1}></View>
        <View style={s.box2}></View>
        <View style={s.box3}></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

