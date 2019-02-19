export const RECEIVE_EMOTIONS = "RECEIVE_EMOTIONS"
export const RECEIVE_EMOTION = "RECEIVE_EMOTION"
export const ADD_EMOTION = "ADD_EMOTION"

function receiveEmotions(emotions) {
    return {
        type: RECEIVE_EMOTIONS,
        emotions
    }
}

function receiveEmotion(emotion) {
    return {
        type: RECEIVE_EMOTIONS,
        emotion
    }
}

function addEmotion(emotion) {
    return {
        type: ADD_EMOTION,
        emotion
    }
}

