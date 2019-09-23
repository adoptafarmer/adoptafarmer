import React from 'react';
import process from '../images/process.png';
import '../main.css'
class Process extends React.Component
{
    render()
    {
        return (
            <div className="container greentext margintop150">
                <div className="center">
                    <h4><b>Our Process</b></h4>
                </div>
                <div className="type_5"></div>
                <div className="row">
                    <div className="col l12 m12 s12">
                        <h4><b>Ongoing Farmers Visit</b></h4>
                        <ul className="ullist fontsize20 linespace20">
                            <li className="lilist">NGO Team visits the supported Farmers on weekly basis and on average each farmer will be reviewed monthly once.</li>
                            <li className="lilist">Conducting Monthly Farmers meet to identify best performing farmers and cross train other farmers.</li>
                            <li className="lilist">Provide guidance to add more income generating sources.</li>
                        </ul>
                    </div>
                    <div className="col l12 m12 s12 ">
                        <p className="fontsize20">Below is our complete 2 year <b>high level plan</b> to self sustain the distressed farmers:</p>
                        <div className = "container margintop50">
                            <img className="responsive-img filter1" src={process} />
                        </div>
                    </div>
                    <div className="col l12 m12 s12 margintop10">
                    <p className="fontsize20"><b>Please find the detailed Farmer’s support review from Operations team <a target="_blank" className="redcolor" href="https://drive.google.com/file/d/197gWYnlC4kQ_bmJh7P8jbJA7fRSRIqi6/view">here</a></b></p>
                    </div>
                </div>
                <hr className="type_6"/>
            </div>
        );
    }
}
export default Process;