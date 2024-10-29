import { TouchableOpacity, Text, View, Image } from "react-native";
import { s } from "./ProfileCard.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function ProfileCard({ firstname, lastname, age, isOpenToWork, onPressTitle, onPressGithub, onPressSocialMediaIcons}) {
  //If, else statement
  // if (age > 20) {
  //   return <Text>You are old!</Text>;
  // } else {
  //   return <Text>You are young!</Text>;
  // }

  //Ternary Conditions
  // return (
  //   <>
  //     <Text>{age > 20 ? "You are old!" : "You are young"}</Text>
  //     <Text>{isOpenToWork && <Text> I'm ready to work!</Text>}</Text>
  //     {/* Line 17 only wrorks when the value of isOpenToWork is TRUE or if you send
  //     something to it like isOpenToWork={BDKJBD}. It's basically saying if it's true, print out the text. */}
  //   </>
  // );

  function onClickTitle_(){
    return onPressTitle(firstname + " "+ lastname)    
  }

  
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={s.texts}>
          <TouchableOpacity onPress={onClickTitle_}>
            <Text style={s.name}>
              {firstname} {lastname}
            </Text>
          </TouchableOpacity>
          <Text>
            Just testing react native after {age} years to see how it goes.
          </Text>

          {isOpenToWork ? (
            <Text style={{ backgroundColor: "green", color: "white" }}>
              I am looking for a job
            </Text>
          ) : (
            <Text style={{ backgroundColor: "red", color: "white" }}>
              I am not looking for a job
            </Text>
          )}
          {/*OR*/}
          <Text
            style={{
              backgroundColor: isOpenToWork ? "green" : "red",
              color: "white",
            }}
          >
            {isOpenToWork
              ? "I am looking for a job"
              : "I am not looking for a job"}
          </Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity onPress={()=> onPressSocialMediaIcons("twitterr")} style={s.socialBtn}>
          <FontAwesome name="twitter" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressGithub} style={s.socialBtn}>
          <FontAwesome name="github" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onPressSocialMediaIcons("linkedin")} style={s.socialBtn}>
          <FontAwesome name="linkedin-square" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
