import React from 'react';
import '../main.css';
import galleries from './GalleryImages.js';
class Gallery extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    cache = {};
    dummy = './Farmer1.jpg';
    importAll = (r) =>{
        r.keys().forEach((key)=>{
            this.cache[key] = r(key);
            this.dummy = r(key);
        });
    }
    componentDidMount()
    {
        //this.importAll(require.context('../images/gallery/', false, /\.jpg$/),"mount");
    }
    render()
    {
        this.importAll(require.context('../images/gallery/', false, /\.jpg$/),"render");
        const gallery = galleries.map((gallery) => {
            return (
                <a className="spotlight" href={this.cache[gallery.src]} data-title={gallery.title} data-description={gallery.description}>
                    <div className="col l3 m3 s6 center">
                        <img className="responsive-img imagefilter imgGallery filter1"  src={this.cache[gallery.src]}/>
                    </div>
                </a>
            );
        });
        return (
            <div className="container margintop150">
                <div className="greentext center">
                    <h4> <b>Gallery</b></h4>
                 </div>
                 <h5 className="type_5"/>
                 <div className="row">
                    <div className="spotlight-group" data-title="Untitled" data-animation="fade" data-fullscreen="false" data-maximize="false" data-minimize="false">
                        {gallery}
                    </div>
                </div>
                <hr className="type_6"/>
            </div>
        );
    }
}
export default Gallery;