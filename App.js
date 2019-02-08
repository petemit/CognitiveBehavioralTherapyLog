import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import {
    createMaterialTopTabNavigator,
    createAppContainer
} from "react-navigation";
import Situation from "./screens/Situation";
import Emotions from "./screens/Emotions";
import { CbtStatusBar } from "./components/CbtStatusBar";
import { primary } from "./constants/Colors";
import NegativeThoughts from "./screens/NegativeThoughts";
import CognitiveDistortions from "./screens/CognitiveDistortions";
import PositiveThoughts from "./screens/PositiveThoughts";
import ReviewThoughts from "./screens/ReviewThoughts";
import ReviewEmotions from "./screens/ReviewEmotions";

const MainNavigator = createMaterialTopTabNavigator(
    {
        Situation: {
            screen: Situation,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: primary
                }
            }
        },
        Emotions: {
            screen: Emotions,
            navigationOptions: {
              title: "Emotions",
                headerStyle: {
                    backgroundColor: primary
                }
            }
        },
        NegativeThoughts: {
            screen: NegativeThoughts,
            navigationOptions: {
                title: "Negative Thoughts",
                headerStyle: {
                    backgroundColor: primary
                }
            }
        },
        CognitiveDistortions: {
            screen: CognitiveDistortions,
            navigationOptions: {
                title: "Cognitive Distortions",
                headerStyle: {
                    backgroundColor: primary
                }
            }
        },
        PositiveThoughts: {
            screen: PositiveThoughts,
            navigationOptions: {
                title: "Positive Thoughts",
                headerStyle: {
                    backgroundColor: primary
                }
            }
        },
        ReviewThoughts: {
            screen: ReviewThoughts,
            navigationOptions: {
                title: "Review Thoughts",
                headerStyle: {
                    backgroundColor: primary
                }
            }
        },
        ReviewEmotions: {
            screen: ReviewEmotions,
            navigationOptions: {
                title: "Review Emotions",
                headerStyle: {
                    backgroundColor: primary
                }
            }
        }
    },
    {
        initialRouteName: "Situation",
        swipeEnabled: true,
        tabBarOptions: {
            scrollEnabled: true
        },
        lazy: true,

    }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    state = {
        isLoadingComplete: false
    };

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <View style={styles.container}>
                    {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                    {Platform.OS === "android" && (
                        <CbtStatusBar barStyle="light-content" />
                    )}

                    <AppContainer />
                </View>
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
