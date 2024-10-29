import { Alert, Text, View } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { AgeCounter } from "./components/AgeCounter/AgeCounter";
import { useState } from "react";

export default function App() {

  const[countClick, setCountClick] = useState(0);
  
  function hello(name){
    Alert.alert("Hello! " + name);
    setCountClick(countClick + 1)
  }

  return ( //the two lines below ensure that the components being displayed show at a proper place in the device. 

    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <ProfileCard
        onPressTitle={hello}
        firstname={"John"}
        lastname={"Snow"}
        age={30}
        isOpenToWork={false}
        car = {{brand: "Mustang", maxspeed: 200}}
        doSomething={function(){
        console.log("Hello!")
        }} />
        <Text>You've clicked the title {countClick} times!</Text>
        <AgeCounter/>
      </SafeAreaView>
    </SafeAreaProvider>
  );  
}

