import React, {Component} from 'react';
import '../App.css';
import logo from './../logo.svg'
import axios from 'axios'
import {RingLoader, CircleLoader, PacmanLoader, ClimbingBoxLoader} from 'react-spinners';
import {RaisedButton, CircularProgress, AppBar, Drawer, MenuItem} from 'material-ui'
import {BrowserRouter as Router, Link, Route,} from 'react-router-dom';


class Component1 extends Component {
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


    getReddit() {
        axios.get(`http://www.reddit.com/r/reactjs.json`).then(res => {
            let __posts = res.data.data.children.map(obj => {
                return obj.data
            });


            console.log(__posts);

            this.setState({posts: __posts});
        });
    }

    getProverb() {

        this.setState({loading: true});
        axios.get(`http://35.201.153.132:3000/proverbJson`).then(res => {

            let _tmp = res.data.map(result => {
                return result;
            });

            this.setState({proverbList: _tmp});

            setTimeout(() => {
                this.setState({loading: false});
            }, 1500);

            console.log("aslfksdlkflskdf--->" + JSON.stringify(this.state.proverbList));

        })
    }

    componentDidMount() {
        this.getProverb();
    }

    clickedProverb(content) {
        alert(content);
    }

    render() {
        return (

            <div>
                <br/>
                <br/>
                <br/>
                <br/>

                <RaisedButton label='퐁듀' onClick={() => this.clickedProverb('sdkflskdf')} backgroundColor={'red'}
                              labelColor={'white'}/>{' '}
                <RaisedButton label='고경준천재' onClick={() => this.clickedProverb('sdlfksdlkfsldkf2222')}
                              backgroundColor={'green'} labelColor={'white'}/>

                <div>

                    <ul>
                        {this.state.proverbList.map(proverbOne =>
                            <li onClick={() => this.clickedProverb(proverbOne.content)}> {proverbOne.content}</li>
                        )}
                    </ul>
                </div>


                <div className='loader'>
                    {this.state.loading ? <CircularProgress color={'green'} size={50}  /> : null}
                </div>
            </div>
        );
    }
}

export default Component1;
