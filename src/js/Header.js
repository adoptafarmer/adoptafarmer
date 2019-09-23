import React from 'react';
import '../css/Header.css';
import '../main.css';
import $ from 'jquery';
import SideNav from './SideNav.js';
class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {showNav:false};
    }
    sendDisplayType = (event) => {
        if(event.target.id!=""){
            this.props.updateDisplay(event.target.id);
        }
    }
    closeSideNav = () => {
        this.setState({"showNav" : false})
    }
    openSideNav = () => {
        this.setState({"showNav" : true})
    }
    componentDidMount()
    {
    }
    render(){ 
        return (
            <div className="stay z-depth-3">
                <div className="row top10">
                    <div className="col l2 s8 hide-on-med-and-up top10 left-align">
                        <i id="mobile-menu" onClick={this.openSideNav} className="material-icons fontsize40">menu</i>
                        { this.state["showNav"] ? <SideNav updateDisplay={this.props.updateDisplay} closer = {this.closeSideNav}/> : null}
                    </div>
                    <div className="col l1 m2">
                        <p></p>
                    </div>
                    <div className="col l2 s4 m3 center">
                        <div className="row">
                            <div className="col l6 m6 s4 top10 right-align fontsize ">
                                🏠 
                            </div>
                            <div className="col l6 m6 s8 left-align nopaddingleft white-space greentext">
                                <h5><b id="home" onClick={this.sendDisplayType} > Home</b></h5>
                            </div>
                        </div> 
                    </div>
                    <div className="col l2 m2 center hide-on-med-and-down">
                        <div className="row">
                            <div className="col l4 m6 top10 right-align fontsize">
                                ⛳
                            </div>
                            <div onClick={this.sendDisplayType} className="col l8 m6 left-align nopaddingleft white-space greentext">
                                <h5><b id="mission">Our Mission</b></h5>
                            </div>
                        </div> 
                    </div>
                    <div className="col l2 m2 center hide-on-med-and-down">
                        <div className="row">
                            <div className="col l4 m6 top10 right-align fontsize">
                                🌾
                            </div>
                            <div onClick={this.sendDisplayType} className="col l8 m6 left-align nopaddingleft white-space greentext">
                                <h5><b id="process"> Our Process</b></h5>
                            </div>
                        </div> 
                    </div>
                    <div className="col l2 m2 center hide-on-med-and-down">
                        <div className="row">
                            <div className="col l4 m6 top10 right-align fontsize">
                                👳🏾
                            </div>
                            <div onClick={this.sendDisplayType} className="col l8 m6 left-align nopaddingleft white-space greentext">
                                <h5><b id="farmers"> Our Farmers </b></h5>
                            </div>
                        </div> 
                    </div>
                    <div className="col l2 m2 center hide-on-med-and-down">
                        <div className="row">
                            <div className="col l4 m6 top10 right-align fontsize">
                                📸
                            </div>
                            <div onClick={this.sendDisplayType} className="col l8 m6 left-align nopaddingleft white-space greentext">
                                <h5><b id="gallery"> Gallery</b></h5>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
