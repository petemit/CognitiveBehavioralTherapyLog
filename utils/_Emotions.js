import { AsyncStorage } from "react-native";
export const EMOTIONS_KEY = "EMOTIONS_KEY";
export const SINGLE_EMOTION_KEY = "SINGLE_EMOTION_KEY";

let data = {
    1: { Sadness: "Sad" },
    2: { Sadness: "Down" },
    3: { Sadness: "Depressed" },
    4: { Sadness: "Unhappy" },
    5: { Sadness: "Blue" },
    6: { Anxiety: "Anxious" },
    7: { Anxiety: "Worried" },
    8: { Anxiety: "Panicky" },
    9: { Anxiety: "Nervous" },
    10: { Anxiety: "Frightened" },
    11: { Guilt: "Guilty" },
    12: { Guilt: "Remorseful" },
    13: { Guilt: "Bad" },
    14: { Guilt: "Ashamed" },
    15: { Inferiority: "Inferior" },
    16: { Inferiority: "Worthless" },
    17: { Inferiority: "Inadequate" },
    18: { Inferiority: "Defective" },
    19: { Inferiority: "Incompetent" },
    20: { Loneliness: "Lonely" },
    21: { Loneliness: "Unloved" },
    22: { Loneliness: "Unwanted" },
    23: { Loneliness: "Rejected" },
    24: { Shame: "Embarrassed" },
    25: { Shame: "Foolish" },
    26: { Shame: "Humiliated" },
    27: { Shame: "Self-Conscious" },
    28: { Hopelessness: "Hopeless" },
    29: { Hopelessness: "Discouraged" },
    30: { Hopelessness: "Pessimistic" },
    31: { Hopelessness: "Despairing" },
    32: { Frustration: "Frustrated" },
    33: { Frustration: "Stuck" },
    34: { Frustration: "Thwarted" },
    35: { Frustration: "Defeated" },
    36: { Anger: "Angry" },
    37: { Anger: "Mad" },
    38: { Anger: "Resentful" },
    39: { Anger: "Annoyed" },
    40: { Anger: "Irritated" },
    41: { Anger: "Upset" },
    42: { Anger: "Furious" }
};

export function _initEmotionData() {
    Object.keys(data).map(key => _addEmotion(data[key], key));
}
                
export function _addEmotion(newEmotion, key) {
    return AsyncStorage.mergeItem(
        EMOTIONS_KEY,
        JSON.stringify({
            [key]: newEmotion
        })
    );
}

export function _getEmotions() {
    return AsyncStorage.getItem(EMOTIONS_KEY).then(result =>
        JSON.parse(result)
    );
}
