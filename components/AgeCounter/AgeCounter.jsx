import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { DisplayAge } from "../DisplayAge/DisplayAge";

export function AgeCounter(props) {
  //let age = 30;
  const [age, setAge] = useState(30);
  const [fruit, setFruit] = useState("Apple");

  function increaseAge() {
    //age = age + 1;
    setAge(age + 1);
  }
  console.log(age);

  //Another example
  function changeFruit() {
    setFruit("Banana");
  }

  return (
    <>
      <TouchableOpacity
        onPress={increaseAge}
        style={{ backgroundColor: "#00A2FF" }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Increase your age!</Text>
      </TouchableOpacity>
      {/*<Text style={{fontSize: 30}}>Hello! I am {age} years old!</Text>*/}
      <DisplayAge myage={age} />

      <TouchableOpacity
        onPress={changeFruit}
        style={{ backgroundColor: "black" }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Change fruit!</Text>
      </TouchableOpacity>
      <Text> My favorite fruit is {fruit}.</Text>
    </>
  );
}
