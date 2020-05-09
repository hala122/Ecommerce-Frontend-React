import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import addImage from '../../img/products/product-grey-7.jpg';
import axios from 'axios';


class CardItem extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <div class="item-medium-1">
                    {(this.props.discount === null) ? null : <div class="item-medium-1__alert">{this.props.discount}%</div>}
                    <div class="item-medium-1__image image" style={{ backgroundImage: `url(${addImage})` }}>
                        <a href="#" class="item-medium-1__action">Add to Cart</a>
                    </div>

                    <h4><span>Product Name :</span> {this.props.productName}</h4>
                    <h4><span>Price :</span> {this.props.price}</h4>
                    <h4><span>Category :</span> {this.props.category}</h4>
                    <h4><span>Description :</span></h4>
                    <p> {this.props.description}</p>
                    <div class="flex-row">
                        <div>
                            <h4><span>price after sale :</span>
                                {(this.props.isOnSale === null) ? <span>${this.props.price}</span> : <del>${this.props.price}</del>}
                                {(this.props.isOnSale === null) ? <span class="lable"></span> : <span class="lable">${this.props.price - (this.props.price * (this.props.discount / 100))}</span>}
                            </h4>
                        </div>

                        <div class="crud-actions">
                            <Link to={`/detailProduct/${this.props.id}`}><i class="far fa-eye"></i></Link>
                            {localStorage.getItem('userid')===(this.props.userId)?<><Link to={`/editProduct/${this.props.id}`}><i class="fas fa-edit"></i></Link>
                    <a onClick={()=>this.props.deleted(this.props.id)}><i class="fas fa-trash-alt"></i></a></>:null }

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CardItem;