import React from 'react';
import {connect} from 'react-redux';
import {Route, HashRouter} from 'react-router-dom';
import './App.css';
import Question from './components/Question';
import {callNextFiveLaunches} from './actions/launches';


class App extends React.Component {

    componentDidMount() {
        this.props.callNextFiveLaunches();
    }

    render() {

        console.log('callNextFiveLaunches', this.props.launches);

        return (
            <HashRouter>
                <Route path={'/'} component={Question}/>
            </HashRouter>
        );
    }
}

export default connect((state) => ({
    launches: state.launches
}), {callNextFiveLaunches})(App);