import React from "react";
import {menu} from './data/menu';

class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "piza",
            description: "this is the vdjdnvd dvs dv sfd",
            price: 234,
            image : "https://thispersondoesnotexist.com/image"
        }
    }
    render(){
        const card_border_color = {borderColor: '#FF5400'}
        const bg = {backgroundColor: "#FF5400" }
        const text_color = {color: '#FF5400'}
        return (
            <>
            <div className="col-sm-12 col-md-4 col-lg-3">
                <div className="card rounded-0 border shadow-sm text-center my-2" style={card_border_color}>
                    <img src={this.state.image} className="card-img-top rounded-0" alt="menu item"/>
                    <div className="card-body">
                        <h5 className="card-title " >SUSHI</h5>
                        <span style={text_color}><i class="bi-star "></i> (5.0)</span>
                        <p className="card-text">
                            this is for testing purposes and does not imitate the real menu. this is a menu ITEM
                        </p>
                        <a href="#" className="rounded-0 btn text-white" style={bg}>
                            add to your order
                            {/* if the item is in the cart, show the increment and decrement btn */}
                            {/* <span className="" > + </span>
                            <span className="mx-3">0</span>
                            <span className="" > - </span> */}

                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
                <div className="card rounded-0 border shadow-sm text-center my-2" style={card_border_color}>
                    <img src={this.state.image} className="card-img-top rounded-0" alt="menu item"/>
                    <div className="card-body">
                        <h5 className="card-title " >SUSHI</h5>
                        <span style={text_color}><i class="bi-star "></i> (5.0)</span>
                        <p className="card-text">
                            this is for testing purposes and does not imitate the real menu. this is a menu ITEM
                        </p>
                        <a href="#" className="rounded-0 btn text-white" style={bg}>
                            add to your order
                            {/* if the item is in the cart, show the increment and decrement btn */}
                            {/* <span className="" > + </span>
                            <span className="mx-3">0</span>
                            <span className="" > - </span> */}

                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
                <div className="card rounded-0 border shadow-sm text-center my-2" style={card_border_color}>
                    <img src={this.state.image} className="card-img-top rounded-0" alt="menu item"/>
                    <div className="card-body">
                        <h5 className="card-title " >SUSHI</h5>
                        <span style={text_color}><i class="bi-star "></i> (5.0)</span>
                        <p className="card-text">
                            this is for testing purposes and does not imitate the real menu. this is a menu ITEM
                        </p>
                        <a href="#" className="rounded-0 btn text-white" style={bg}>
                            add to your order
                            {/* if the item is in the cart, show the increment and decrement btn */}
                            {/* <span className="" > + </span>
                            <span className="mx-3">0</span>
                            <span className="" > - </span> */}

                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
                <div className="card rounded-0 border shadow-sm text-center my-2" style={card_border_color}>
                    <img src={this.state.image} className="card-img-top rounded-0" alt="menu item"/>
                    <div className="card-body">
                        <h5 className="card-title " >SUSHI</h5>
                        <span style={text_color}><i class="bi-star "></i> (5.0)</span>
                        <p className="card-text">
                            this is for testing purposes and does not imitate the real menu. this is a menu ITEM
                        </p>
                        <a href="#" className="rounded-0 btn text-white" style={bg}>
                            add to your order
                            {/* if the item is in the cart, show the increment and decrement btn */}
                            {/* <span className="" > + </span>
                            <span className="mx-3">0</span>
                            <span className="" > - </span> */}

                        </a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default MenuItem;