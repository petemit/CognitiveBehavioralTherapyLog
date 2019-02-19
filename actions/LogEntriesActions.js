export const RECEIVE_LOG_ENTRIES = "RECEIVE_LOG_ENTRIES"
export const RECEIVE_LOG_ENTRY = "RECEIVE_LOG_ENTRY"
export const ADD_LOG_ENTRY = "ADD_EMOTION"

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

