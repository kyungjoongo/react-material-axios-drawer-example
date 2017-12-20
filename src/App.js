import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route,} from 'react-router-dom';
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import {RaisedButton, CircularProgress, AppBar, Drawer, MenuItem} from 'material-ui'
import HomeComponent from "./Components/HomeComponent";

class App extends Component {
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

    showDrawer(){
        this.setState({open: true});
    }

    handleClose(){
        this.setState({open: false});
    }


    render() {
        return (
            <Router>
                <div>
                    <AppBar className='appBar'
                            title={this.state.title}
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            onLeftIconButtonClick={()=>this.showDrawer()}
                    />
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >
                        <MenuItem onClick={()=>this.handleClose()}><Link className='link' to={"/"}>Home</Link></MenuItem>
                        <MenuItem onClick={()=>this.handleClose()}><Link className='link' to={"/Component1"}>Component1</Link></MenuItem>
                        <MenuItem onClick={()=>this.handleClose()}><Link className='link' to={"/Component2"}>Component2</Link></MenuItem>
                    </Drawer>
                    <hr/>
                    {/*#################################################*/}
                    {/*#################라우터 정의#####################*/}
                    {/*#################################################*/}
                    <div className='RouteOutlet'>
                        <Route exact path="/" component={HomeComponent}/>
                        <Route path="/Component1" component={Component1}/>
                        <Route path="/Component2" component={Component2}/>
                    </div>
                </div>
            </Router>

        );
    }
}


export default App;
