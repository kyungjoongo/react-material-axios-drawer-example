import React, {Component} from 'react';
import '../App.css';
import {RaisedButton} from 'material-ui'
import logo from './../logo.svg'


class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            proverbList: [],
            loading: false,
            title : '고경준 천재',
            open : false
        }
    }


    render() {
        return (
            <div className='test001'>
                <img src={logo} className="App-logo2" alt="logo"/><br/>
                <RaisedButton backgroundColor={'yellow'} label={'고경준천재님'}/>

            </div>
        );
    }
}

export default HomeComponent;
