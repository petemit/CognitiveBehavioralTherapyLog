import React, { Component } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { offBlack } from "../constants/Colors";
import { Title, TextInput } from "react-native-paper";
import { Constants } from "expo";

class Situation extends Component {
    render() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={container}
            >
                <Title style={{ flex: 2 }}>
                    Describe your situation that made you feel upset:
                </Title>
                <TextInput
                    style={textInput}
                    multiline={true}
                    placeholder="Type here..."
                />
                <View style={{ flex: 3 }} />
            </KeyboardAvoidingView>
        );
    }
}

const container = {
    flex: 1,
    margin: 50,
    alignItems: "center",
    justifyContent: "center"
};

const textInput = {
    flex: 4,
    width: "80%",

    borderRadius: 4,
    borderWidth: 1,
    borderColor: offBlack
};

export default Situation;
