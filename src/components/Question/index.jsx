import React from 'react';
import {connect} from 'react-redux';

import './styles.css';

import {submitAnswer} from '../../actions/question';
import {callNextFiveLaunches} from "../../actions/launches";

export class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const usersInput = e.target.value;
        this.setState({
            value: usersInput
        })
    }

    onSubmit() {
        this.props.submitAnswer(this.state.value);
    }

    render() {
        const {value} = this.state;
        const {launches} = this.props;

        return (
            <div className="question__container">
                <input
                    type='text' value={value}
                    placeholder={'Please type your answer here...'}
                    onChange={this.onChange}
                />
                {launches && launches.launches.map(l => {
                    return (<div key={l.name}>{l.name}</div>)
                })}
            </div>
        );
    }
};

export default connect((state) => ({
    launches: state.launches
}), {callNextFiveLaunches})(Question);