import { AsyncStorage } from "react-native";
export const TROUBLESHOOTING_GUIDELINES_KEY = "TROUBLESHOOTING_GUIDELINES_KEY";
let data = [
    `Have I correctly identified the upsetting situation?;Make sure that the situation you've picked is the one that's causing you distress.  Try running through the events of the day in your mind, make your description specific as you can: What happened? Where? When? With whom?`,
    `Do I want to change my negative feelings about this situation?;If you do not have a desire to change your feelings, try finding the pros and cons of attempting to.`,
    `Have I identified my Automatic Thoughts properly?;Remember to not put descriptions of upsetting events in the automatic negative thoughts section, but rather, focus on the basic thoughts that come as a result of this situation. For example, a situation might say:  "I had an argument with my manager this afternoon."  An automatic negative thought might be:  "This always happens to me."`,
    `Are my Positive Thoughts convincing, valid statements that genuinely contradict my automatic negative thoughts?;Rationalizations won't make you feel better. A rational response must be realistic, believable, and contradict the automatic negative thought. The moment you see that your automatic negative thoughts aren't valid, you will feel better.`
];


export function _initTroubleshootingGuidelines() {
    Object.keys(data).map(key => _addTroubleshootingGuideline(data[key], key));
}

export function _addTroubleshootingGuideline(newGuideline, key) {
    return AsyncStorage.mergeItem(
        TROUBLESHOOTING_GUIDELINES_KEY,
        JSON.stringify({
            [key]: newGuideline
        })
    );
}

export function _getTroubleshootingGuidelines() {
    return AsyncStorage.getItem(TROUBLESHOOTING_GUIDELINES_KEY).then(result =>
        JSON.parse(result)
    );
}