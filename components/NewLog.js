import React, { Component } from "react";

import NegativeThoughts from "../screens/NegativeThoughts";
import CognitiveDistortions from "../screens/CognitiveDistortions";
import PositiveThoughts from "../screens/PositiveThoughts";
import ReviewThoughts from "../screens/ReviewThoughts";
import ReviewEmotions from "../screens/ReviewEmotions";
import {
    createMaterialTopTabNavigator,
    createAppContainer
} from "react-navigation";
import Situation from "../screens/Situation";
import Emotions from "../screens/Emotions";
import { primary } from "../constants/Colors";

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
        lazy: true
    }
);

const AppContainer = createAppContainer(MainNavigator);

export default class NewLog extends React.Component {
    render() {
        return <AppContainer />;
    }
}
