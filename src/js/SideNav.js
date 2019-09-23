import React from 'react';
import '../css/SideNav.css';
import $ from 'jquery';
import logo from '../images/logo.png'
class SideNavi extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    sendDisplayType = (event) => {
        if(event.target.id!="")
        {
            this.props.updateDisplay(event.target.id);
            this.props.closer();
        }
    }
    componentDidMount()
    {
        $("#outside").click((event)=>{
            if(event.target.id=="outside")
            {
                this.props.closer();
            }
        });
        $("#close").click(()=>{
            this.props.closer();
        });
    }
    render()
    {
        var height = window.outerHeight + 25;
        const dynamicStyle = {
            height : `${window.outerHeight}px`,
            width : `${window.innerWidth}px`
        }
        const sideNavStyle = {
            width : `70%`,
            height : `${height}px`
        }
        const headerStyle = {
            height : `10%`
        }
        return (
            <div id="outside" className="sidenavi" style={dynamicStyle}>
                <div className="mySideNav" style={sideNavStyle}>
                        <div className="row center">
                            <div className="row">
                                <div className="col s9 center margintop10">
                                    <img className="responsive-img margintop10 paddingleft20" src={logo}/>
                                    {/* <h4 className="greentext1 paddingleft20"><b>adoptafarmer</b></h4> */}
                                </div>
                                <div id="close" className="col s3 fontsize margintop30">
                                    <span>⚔️</span>
                                </div>
                            </div>
                        </div>
                        <hr className="type_5"/>
                        <div className="col s12">
                            <div className="row hovereffect navitem">
                                <div className="col s4 top10 right-align fontsize">
                                    ⛳
                                </div>
                                <div onClick={this.sendDisplayType} className="col s8 left-align  white-space greentext">
                                    <h5><b id="mission">Our Mission</b></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col s12">
                            <div className="row hovereffect navitem">
                                <div className="col s4 top10 right-align fontsize">
                                    🌾
                                </div>
                                <div onClick={this.sendDisplayType} className="col s8 left-align  white-space greentext">
                                    <h5><b id="process"> Our Process</b></h5>
                                </div>
                            </div> 
                        </div>
                        <div className="col s12">
                            <div className="row hovereffect navitem">
                                <div className="col s4 top10 right-align fontsize">
                                    👳🏾
                                </div>
                                <div onClick={this.sendDisplayType} className="col s8 left-align  white-space greentext">
                                    <h5><b id="farmers"> Our Farmers </b></h5>
                                </div>
                            </div> 
                        </div>
                        <div className="col s12">
                            <div className="row hovereffect navitem">
                                <div className="col s4 top10 right-align fontsize">
                                    📸
                                </div>
                                <div onClick={this.sendDisplayType} className="col s8 left-align white-space greentext">
                                    <h5><b id="gallery"> Gallery</b></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col s12">
                            <hr className="type_6"/>
                        </div>
                    </div>                    
                </div>
        );
    }
}
export default SideNavi;