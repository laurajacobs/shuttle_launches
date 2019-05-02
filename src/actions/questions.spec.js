import {SUBMIT_ANSWER, submitAnswer} from './question';

describe('SUBMIT ACTIONS',() => {
    it('should return the correct response for submit answer', () => {
        const mockResponse = {
            type: SUBMIT_ANSWER,
            value: 'abc'
        }

        const result = submitAnswer('abc');
        expect(result).toEqual(mockResponse);
    })
});