import { Text, View } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  return ( //the two lines below ensure that the components being displayed show at a proper place in the device.
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <ProfileCard
        firstname={"John"}
        lastname={"Snow"}
        age={30}
        isOpenToWork={false}
        car = {{brand: "Mustang", maxspeed: 200}}
        doSomething={function(){
        console.log("Hello!")
        }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );  
}

