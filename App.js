import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";

import { CbtStatusBar } from "./components/CbtStatusBar";

import { _initCognitiveDistortionData } from "./utils/_CognitiveDistortions";
import { _initEmotionData } from "./utils/_Emotions";
import { _initTroubleshootingGuidelines } from "./utils/_TroubleShootingGuidelines";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import NewLog from './components/NewLog';
import { primary, secondary } from "./constants/Colors";


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: primary,
        accent: secondary
    }
}

export default class App extends React.Component {
    state = {
        isLoadingComplete: false
    };

    componentDidMount() {
        _initCognitiveDistortionData();
        _initEmotionData();
        _initTroubleshootingGuidelines();
    }

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <PaperProvider>
                    <AppLoading
                        startAsync={this._loadResourcesAsync}
                        onError={this._handleLoadingError}
                        onFinish={this._handleFinishLoading}
                    />
                </PaperProvider>
            );
        } else {
            return (
                <PaperProvider theme={theme}>
                    <View style={styles.container}>
                        {Platform.OS === "ios" && (
                            <StatusBar barStyle="default" />
                        )}
                        {Platform.OS === "android" && (
                            <CbtStatusBar barStyle="light-content" />
                        )}
                        <NewLog />
                        
                    </View>
                </PaperProvider>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require("./assets/images/robot-dev.png"),
                require("./assets/images/robot-prod.png")
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Icon.Ionicons.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
                "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
            })
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
