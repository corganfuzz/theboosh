import React from 'react';
import { Link } from 'react-router';
import TweetBox from "./TweetBox.jsx";
import TweetsList from "./TweetsList";
import BooshStore from "../stores/BooshStore";

import BooshActions from "../actions/BooshActions";


let getAppState = () => {
    return { tweetsList: BooshStore.getAll() };
}


export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        BooshActions.getAllBooshes();
        BooshStore.addChangeListener(this._onChange)

    }

    componentWillUnmount () {
        BooshStore.removeChangeListener(this._onChange)
    }
    _onChange() {

        this.setState(getAppState());
    }



    render() {
        return (
            <div className="container">
                <Link to="/follow"> Who to follow </Link>
                <TweetBox  />
                <TweetsList tweets={this.state.tweetsList}/>
            </div>
        );
    }
}