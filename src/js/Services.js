import React from 'react';
import '../main.css';
class Services extends React.Component
{
    render()
    {
        return(
            <div className="container margintop150"> 
                 <div className="greentext center">
                    <h4> <b>Services</b></h4>
                 </div>
                 <h5 className="type_5"/>
                 <div className="row greentext">
                     <div className="col l12 m12 s12">
                        <h4><b>Donor Opportunities</b></h4>
                        <ul className="ullist fontsize20 linespace20">
                            <li className="lilist">
                                Few of the donors have expressed interest in doing <b>‘Godanam’</b> (Donating a Cow). We have identified 3 prospective farmers who are able to use the cow for natural farming – please contact us if you are interested.
                            </li>
                            <li className="lilist">
                                We have identified <b>12 new</b> prospective and needy farmers that need your continued support.
                            </li>
                        </ul>
                     </div>
                     <div className="col l12 m12 s12">
                         <h4><b>Impact of the programs by Adopt-A-Farmer (AAF) Initiative:</b></h4>
                         <ul className="ullist fontsize20 linespace20">
                             <li className="lilist"><b>90% of the Farmers</b> are successfully engaged in the activity that AAF has supported.</li>
                             <li className="lilist">10% of the Farmers who have discontinued the activity have transferred their assets to a new farmer suicide family, there be <b>ensuring 100% use of the funds.</b></li>
                             <li className="lilist">95% of the Farmers we have supported are the ones which have not received support from any Government scheme or individual in the past.</li>
                             <li className="lilist">Among the Farmer families with more than one year of intervention, 99% families have gained confidence in rebuilding their lives and 60% of them have come out of poverty.</li>
                             <li className="lilist">Almost 90% of the Farmer families with more than 6 months of intervention feel that they gained more respect and dignity in the society due to their new lifestyle, increased confidence supported by AAF.</li>
                         </ul>
                         <p className="fontsize20"> <b> Please find the detailed Farmer’s support review document from Operations team <a className="redcolor" target="_blank" href="https://drive.google.com/file/d/197gWYnlC4kQ_bmJh7P8jbJA7fRSRIqi6/view">here</a></b></p>
                     </div>
                     <div className="col l12 m12 s12">
                        <h4><b>Farmer’s success Stories</b></h4>
                        <hr/>
                        <h5 className="margintop8"><b>Our Top performing Farmers in 2018</b></h5>
                        <p className="fontsize20 linespace20 justify">
                            Aalakuntla Kanakamma(Age:40) from Guravannapet village suicide on 03-01-2013 due to Farming Debts. They have 4 daughters and did not get any support from Government. Adopt-A-Farmer team reviewed & supported her husband Maisaiah for a Buffalo (with 50,000 Rs.), which added them to get monthly standard income. As part of Vegetables garden promotion by AAF, he got the vegetable seeds & moringa tree which also added them some more benefit. With AAF support & his hard work he successfully came out of poverty in 1.5 years, and Now he is able to buy another Buffalo. This makes the Donors as well as Farmer family Happy.
                        </p>
                     </div>
                     <div className="col l12 m12 s12">
                        <h5><b>Our Top performing Farmers in 2017</b></h5>
                        <p className="fontsize20 linespace20 justify">
                        Once She was hopeless with her Husband suicide due to farming debts, Now with Adopt A Farmer support & guidance she improved her income 2-3 times and 3 of her kids are back to normal state. Also the Buffalo got 2 female babies which will boost their income to another level. Thank you all for bringing back prosperity in our Farmers lives🙏
                        </p>
                     </div>
                     <div className="col l12 m12 s12">
                        <p className="fontsize20"><b>Please check detailed farmer updates <a target="_blank" href="https://docs.google.com/spreadsheets/d/1XYh_CEw3XB233x9-HKfup9SXOahF9OacW8PBsPwcONc/edit#gid=0" className="redcolor">here</a></b></p>
                        <p className="fontsize20"><b>Please Donate to help us achieve our goal of supporting 100+ farmers.</b></p>
                     </div>
                     <div className="col l12 m12 s12 center">
                        <a href="https://www.paypal.me/AdoptAFarmer" className=" noprint waves-effect waves-light btn-large pulse btnfonts cinzel">Donate 💰 Now</a>
                     </div>
                 </div>
                 <hr className="type_6"/>
            </div>
        );
    }
}
export default Services;