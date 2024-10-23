import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,  //creating shadows for Android
    },
    header: {
        flexDirection: "row"
    },
    social: {

    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius : "50%",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5
    },
    texts: {    //ensures that the text does not trail of the screen but rather wraps to the next line properly
        flex: 1,
        paddingLeft: 15
    }
});