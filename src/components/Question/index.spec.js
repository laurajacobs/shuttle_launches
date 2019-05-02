import Question from '.';

describe('reducer', () => {
    const defaultState = {
        answers: []
    };

    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const question = shallow((<Question onClick={mockCallBack}>Submit</Question>));
        Question.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});