import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.png'
import '../css/Hero.css';
import '../main.css';
import $ from 'jquery'; 
class Hero extends React.Component{
    constructor(props){
        super(props)
        this.hero = React.createRef()
      }

    getFloaters(x,y)
    {
        var node = ReactDOM.findDOMNode(this);
        var html = "<div style='position:absolute;width:30px;height:50px;margin-left:"+x+"px;margin-top:"+y+"px;z-index;-1'>";
        html = html + '🧠';
        html = html + '</div>';
        $(node).append(html);
    }
    componentDidMount () {
        //setTimeout(()=>{},
        var maxHeight = this.hero.current.offsetHeight;
        var maxWidth = this.hero.current.offsetWidth;
        var minHeight = 200;
        var minWidth = 20;
        // for(var ht = minHeight; ht < maxHeight ; ht = ht + 100)
        // {
        //     for(var st = minWidth; st < maxWidth; st = st + 100)
        //     {
        //         var elem = document.elementFromPoint(st, ht);
        //         var isItem = elem.classList.contains('noprint');
        //         console.log(`x : ${st} y : ${ht} ${ isItem ? false : true}`);
        //         console.log(isItem);
        //         if(isItem)
        //         {
        //             //this.getFloaters(st,ht);
        //         }
        //     }
        // }
    }
    render(){
        return(
            <div ref={this.hero} id="hero" className="margintop100 row">
                <div className="col l12 m12 s12 center cinzel green greentext z-depth-5">
                    <h5 className="onelinerpaddingtop">"Adopt Poor Farmers and support them towards Sustainable Agricultural Development"</h5>
                </div>
                <div className="col l6 m6 s12 center margintop100 noprint">
                    <img height="400px" width="400px" className="image-effects filters responsive-img" src={logo} />
                </div>
                <div className="col l6 m6 s12 margintop50 center">
                    <div className="container">
                        <div className="height250">
                            <h4 className="change-text cinzel noprint"></h4>
                        </div>
                        <a href="https://www.paypal.me/AdoptAFarmer" className=" noprint waves-effect waves-light btn-large  btnfonts cinzel">Donate 💰 Now</a>
                    </div>
                </div>
                <div className="col l12 m12 s12 center">
                    <div className="col l5 m5 s5 margintop100">
                        <hr className="hrwidth z-depth-5"></hr>
                    </div>
                    <div className="col l2 m2 s2 treesize">
                        🌳
                    </div>
                    <div className="col l5 m5 s5 margintop100">
                        <hr className="hrwidth z-depth-5"></hr>
                    </div>
                </div>
            </div>
        );
    }
}
export default Hero;