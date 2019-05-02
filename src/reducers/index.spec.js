import {SUBMIT_ANSWER} from "../actions/question";
import reducer from '.';

describe('reducer', () => {
    const defaultState = {
        answers: []
    };

    it('should return state with the value from SUBMIT_ANSWER call', () => {
        const mockAction = {
            type: SUBMIT_ANSWER,
            value: 'abc'
        };
        const state = reducer(defaultState, mockAction);

        expect(state.answers.length).toEqual(1);
        expect(state.answers[0]).toBe('abc')

    })
});