import React from 'react';
import '../css/Mission.css';
import $ from 'jquery';
import donor from '../images/donor.png';
class Mission extends React.Component
{
    constructor()
    {
        super();
        this.state = {missionContents : [this.missionContent[0]] , ismounted : true};
    }
    missionContent = [
        {   id:"approach",
            data:"🌿 Visit Farmers to review their self-sustenance ideas, provide counselling and suggest suitable options. Rather than one time donation, we support the farmers until they become self-sustain."
        },
        {
            id:"plan",
            data:"🌿 Fund 90% for each Farmer’s self sustenance Idea and request the Farmer to contribute 10% to create responsibility."
        },
        {
            id:"goal",
            data:"🌿 Develop a working model to make Poor Farmers self-sustain. Involve in Policy advocation at District or State level that supports small farmers."
        }
    ];
    intervalIds = [];
    timeoutIds = [];
    fresh = () => {
        $("#bar1").width("0%");
        $("#bar2").width("0%");
        $("#plan").addClass("hide");
        $("#goal").addClass("hide");
        if(this.state["ismounted"]){
            this.setState({"missionContents" : [this.missionContent[0]]});
        }
    }
    finish = () => {
        $("#bar1").width("100%");
        $("#bar2").width("100%");
        $("#plan").removeClass("hide");
        $("#goal").removeClass("hide");
        if(this.state["ismounted"]){
            this.setState({"missionContents" : this.missionContent});
        }
    }
    animateMission = () =>
    {
        var startWidth1=0;
        var startWidth2=0;
        this.timeoutIds = [];
        this.intervalIds = [];
        this.fresh();
        var bar1 = setInterval(()=>{
            startWidth1 = startWidth1 + 2;
            $("#bar1").width(startWidth1+"%");
            if(startWidth1 == 100){
                clearInterval(bar1);
            }
        },100);
        this.intervalIds.push(bar1);
        var plan = setTimeout(()=>{
            $("#plan").removeClass("hide");
            if(this.state["ismounted"]){
                this.setState({"missionContents" : [this.missionContent[0],this.missionContent[1]]});
            }
        },5000);
        this.timeoutIds.push(plan);
        var bar2Timeout = setTimeout(()=>{
            var bar2 = setInterval(()=>{
                startWidth2 = startWidth2 + 2;
                $("#bar2").width(startWidth2+"%");
                if(startWidth2 == 100){
                    clearInterval(bar2);
                }
            },100);
            this.intervalIds.push(bar2);
        },6000);
        this.timeoutIds.push(bar2Timeout);
        var goal = setTimeout(()=>{
            $("#goal").removeClass("hide");
            if(this.state["ismounted"]){
                this.setState({"missionContents" : this.missionContent});
            }
        },11000);
        this.timeoutIds.push(goal);
    }
    global = undefined;
    stopAnimation = () => {
        for(var i=0;i < this.intervalIds.length; i++){
            clearInterval(this.intervalIds[i]);
        }
        for(var i=0;i< this.timeoutIds.length; i++){
            clearTimeout(this.timeoutIds[i]);
        }
        clearInterval(this.global);
    }
    componentWillUnmount()
    {
        this.setState({"ismounted":false});
        this.stopAnimation();
        window.removeEventListener("focus", this.windowFocus);
        window.removeEventListener("blur", this.windowBlur);
    }
    startAnimation = () =>{
        this.animateMission();
        this.global = setInterval(()=>{
            this.animateMission();
        },20000);
    }
    windowFocus = () => {
        this.startAnimation();
    }
    windowBlur = () => {
        this.stopAnimation();
        this.finish();
    }
    componentDidMount()
    {
        this.startAnimation();
        window.addEventListener("focus", this.windowFocus);
        window.addEventListener("blur", this.windowBlur);
    }
    render(){
        //console.log(this.state["missonContents"]);
        const missionCarousel = this.state["missionContents"].map((missionContent)=>{
            ///console.log(missionContent);
             return <b><p id={missionContent.id} className="fontsize20">{missionContent.data}</p></b>
        });
        return (
                <div className="container greentext">
                    <div className="center">
                        <h4><b>Our Mission</b></h4>
                    </div>
                    <div className="type_5"/>
                    <div className="row margintop50">
                        <div className="col l2 m3 s3 margintop50">
                            <div id="approach" className="center marginleft-15">
                                <h5><b>Our Approach</b></h5>
                                <span className="fontsize50">🎯</span>
                            </div>
                        </div>
                        <div className="col l3 m2 s2 margintop100">
                            <div id="bar1" className="bar">

                            </div>
                        </div>
                        <div className="col l2 m3 s3">
                            <div id="plan" className="center hide">
                                <h5><b>Our Support Plan</b></h5>
                                <span className="fontsize50">📋</span>
                            </div>
                        </div>
                        <div className="col l3 m2 s2 margintop100">
                            <div id="bar2" className="bar">

                            </div>
                        </div>
                        <div className="col l2 m2 s2 margintop50">
                            <div id="goal" className="center hide">
                                <h5><b>Our Goal</b></h5>
                                <span className="fontsize50">🏆</span>
                            </div>
                        </div>
                        <div className="col l12 m12 s12 margintop50 card">
                            {
                                missionCarousel
                            }
                        </div>
                    </div>
                    <div className="main-content left-align">
                        <h4> <b>Our Story</b> </h4>
                        <h5 className = "linespace20">
                            We have been seeing lot of farmer suicides in the news headlines and we thought <b>“Can we do something to save Farmers”</b>, which led us to <b>Adopt-A-Farmer</b> initiative.
                        </h5>
                        <ul className="ullist fontsize20 linespace20">
                            <li className="lilist">We believe that coming up with a good action plan is lot more worth than one time monetary donations and that’s where we all need to come together to serve this noble initiative.</li>
                            <li className="lilist">A small start, but so far we have about <b>64</b> farmer families, across four villages, <b>50+</b> of them self-sustained and earning Rs. 5000 monthly income.</li>
                            <li className="lilist">We are building a <b>Network</b> of:</li>
                            <ul className="ullist">
                                <li className="lilistdeep1">Small Farmers</li>
                                <li className="lilistdeep1">NGOs</li>
                                <li className="lilistdeep1">Rural Development Professionals</li>
                                <li className="lilistdeep1">Enthusiastic Professionals and Volunteers</li>
                            </ul>
                        </ul>
                        <h4> <b>Next Steps...</b> </h4>
                        <ul className="ullist fontsize20 linespace20">
                            <li className="lilist"> <b>Scale and improve </b> existing process to expand to other Villages, Mandals and Districts.</li>
                            <li className="lilist"> Work with local Organizations, Agricultural offices and Government.</li>
                        </ul>
                        <h4> <b>Donor Opportunities</b></h4>
                        <p className="fontsize20"> We offer <b>three levels of donor support</b> to our farmers with the following benefits:</p>
                        <div className="container">
                            <img className="responsive-img donorimg" src={donor}/>
                        </div>
                        <p className="fontsize20"> Please volunteer for farmer case studies, field trips, <b>spread the word </b> and impact a larger population.</p>
                        <p className="fontsize20"> <b> Please Donate to help us achieve our goal of supporting 100+ farmers.</b></p>
                        <div className="center">
                            <a href="https://www.paypal.me/AdoptAFarmer" className=" noprint waves-effect waves-light btn-large btnfonts cinzel">Donate 💰 Now</a>
                        </div>
                    </div>
                    <hr className="type_6"/>
                </div>
        );
    }
}
export default Mission;