export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

export const submitAnswer = (value) => {
    return {
        type: SUBMIT_ANSWER,
        value
    }
};