import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route,} from 'react-router-dom';
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import {AppBar, Drawer, MenuItem} from 'material-ui'
import HomeComponent from "./Components/HomeComponent";
import CardExampleWithAvatar from "./Components/CardExampleWithAvatar";
import MovieComponent from "./Components/MovieComponent";

const iconStyles = {
    marginRight: 5,
    marginTop: 5

};

/*const data = {
    type : 'MOVIE_List',
    payload : [
        {id : '1', name : 'pulp fiction'}
    ]
}*/




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

    handleClose(title){
        this.setState({
            open: false,
            title : title
        });

        window.scrollTo(0, 0)

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
                        <MenuItem onClick={()=>this.handleClose('Home')}><Link className='link' to={"/"}>Home</Link></MenuItem>
                        <MenuItem onClick={()=>this.handleClose('Component1')}><Link className='link' to={"/Component1"}>Component1</Link></MenuItem>
                        <MenuItem onClick={()=>this.handleClose('Component2')}><Link className='link' to={"/Component2"}>Component2</Link></MenuItem>
                        <MenuItem onClick={()=>this.handleClose('CardExample')}><Link className='link' to={"/CardExampleWithAvatar"}>CardExampleWithAvatar</Link></MenuItem>
                        <MenuItem onClick={()=>this.handleClose('Movie')}><Link className='link' to={"/MovieComponent"}>MovieComponent</Link></MenuItem>
                    </Drawer>



                    {/*<FontIcon className="material-icons" style={iconStyles}>home</FontIcon>*/}
                    {/*#################################################*/}
                    {/*#################라우터 정의#####################*/}
                    {/*#################################################*/}
                    <div className='RouteOutlet'>
                        <Route exact path="/" component={HomeComponent}/>
                        <Route path="/Component1" component={Component1}/>
                        <Route path="/Component2" component={Component2}/>
                        <Route path="/CardExampleWithAvatar" component={CardExampleWithAvatar}/>
                        <Route path="/MovieComponent" component={MovieComponent}/>
                    </div>
                </div>
            </Router>

        );
    }
}


export default App;
