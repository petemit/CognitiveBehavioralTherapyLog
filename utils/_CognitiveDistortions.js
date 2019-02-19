import { AsyncStorage } from "react-native";
export const COGNITIVE_DISTORTIONS_KEY = "COGNITIVE_DISTORTIONS_KEY";
export const SINGLE_COGNITIVE_DISTORTION_KEY =
    "SINGLE_COGNITIVE_DISTORTION_KEY";

let data = {
    1: {
        title: `All-or-nothing thinking`,
        description: `You look at things in absolute, black-and-white categories, using absolute terms like never or always.`
    },

    2: {
        title: `Over-generalization`,
        description: `You view an event as a never-ending pattern of defeat.`
    },

    3: {
        title: `Mental Filter`,
        description: `You dwell on the negatives of a situation or a person and ignore the positives.`
    },

    4: {
        title: `Discounting positives`,
        description: `You dismiss the positive qualities of yourself or the positive qualities of others.`
    },

    5: {
        title: `Jumping to Conclusions`,
        description: `You assume an outcome without evidence for it.`
    },

    6: {
        title: `Mind-reading`,
        description: `You assume that people are either reacting or will react negatively to you.`
    },

    7: {
        title: `Magnification or minimization`,
        description: `You blow things way out of proportion in either direction.`
    },

    8: {
        title: `Emotional Reasoning`,
        description: `You reason from your feelings. For example, dreading budgeting might cause you to think that "my finances are impossible to manage"`
    },

    9: {
        title: `Should statements`,
        description: `You use words or phrases including "shoulds", should nots", "musts", and "have tos".`
    },

    10: {
        title: `Labeling`,
        description: `Linking your's or another's personality to the situation.  For example, instead of saying "I did not do it right", you tell yourself "I am a failure"`
    },

    11: {
        title: `Self-blame`,
        description: `You take the blame of the situation even if you were not entirely responsible.`
    },

    12: {
        title: `Other-blame`,
        description: `Others are held responsible for negative situations or for your feelings.`
    }
};

export function _initCognitiveDistortionData() {
    Object.keys(data).map(key => _addCognitiveDistortion(data[key], key));
}

export function _addCognitiveDistortion(newCd, key) {
    return AsyncStorage.mergeItem(
        COGNITIVE_DISTORTIONS_KEY,
        JSON.stringify({
            [key]: newCd
        })
    );
}

export function _getCognitiveDistortions() {
    return AsyncStorage.getItem(COGNITIVE_DISTORTIONS_KEY).then(result =>
        JSON.parse(result)
    );
}
