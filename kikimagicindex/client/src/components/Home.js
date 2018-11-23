import React, {Component} from 'react';
import AppNavBar from './AppNavBar';
import SideBar from './SideBar';
class Home extends React.Component {
    render(){
        return(
            <div>
                <AppNavBar></AppNavBar>
                <div id="strongerwrapper">
                <SideBar></SideBar>
                    <div id="wrapper">
                        Home
                        <div id="homemain">
                            <div>
                                <button class="btn btn-primary">Test Button 1</button>
                            </div>
                            <div>
                                <button class="btn btn-primary">Test Button 2</button>
                            </div>
                            <div>
                                <button class="btn btn-primary">Test Button 3</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;