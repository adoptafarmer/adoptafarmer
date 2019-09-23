import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/Header.js';
import Hero from './js/Hero.js';
import Mission from './js/Mission.js';
import Process from './js/Process.js';
import Services from './js/Services.js';
import Gallery from './js/Gallery.js';
import SideNav from './js/SideNav.js';
// Root component of the app
class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { DISPLAY_TYPE : "home"};
    }
    updateDisplay = (type) => {
        console.log(`the display ${type}`);
        this.setState({"DISPLAY_TYPE" : type});
    };
    render(){
        let html;
        if(this.state["DISPLAY_TYPE"]==="home" || this.state["DISPLAY_TYPE"]==="mission"){
            html =  <div>
                        <Hero/>
                        <Mission/>
                    </div>;
        }
        else if(this.state["DISPLAY_TYPE"]==="process"){
            html =  <div>
                        <Process/>
                    </div>;
        }
        else if(this.state["DISPLAY_TYPE"]==="farmers"){
            html = <div>
                        <Services/>
                    </div>
        }
        else if(this.state["DISPLAY_TYPE"]==="gallery"){
            html = <div>
                        <Gallery/>
                    </div>
        }
        return (
                <div>
                    <Header updateDisplay={this.updateDisplay} />
                        {html}
                </div>
            );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);