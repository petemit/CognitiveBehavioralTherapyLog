import React from "react";
import { View, StatusBar } from "react-native";
import { Constants } from "expo";
export function CbtStatusBar({ color, ...props }) {
    return (
        <View style={{ color, height: Constants.statusBarHeight }}>
            <StatusBar translucent color={color} {...props} />
        </View>
    );
}
