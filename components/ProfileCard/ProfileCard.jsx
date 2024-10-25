import { TouchableOpacity, Text, View, Image } from "react-native";
import { s } from "./ProfileCard.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function ProfileCard(props) {
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
          <Text style={s.name}>{props.firstname} {props.lastname}</Text>
          <Text>
            Just testing react native after {props.age} years to see how it goes.
          </Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity style= {s.socialBtn}>
          <FontAwesome name="twitter" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style= {s.socialBtn}>
          <FontAwesome name="github" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style= {s.socialBtn}>
          <FontAwesome name="linkedin-square" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
