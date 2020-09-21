import React, { Component } from 'react';
    
  class Product extends Component {

    onAddToCart2= ()=> { 
        alert(this.props.name );
    }

    render()  {
          return(
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img alt=""/>
                        <div className  ="caption">
                            <h3>{this.props.name}</h3>
                            <p>
                                {this.props.price} VNĐ
                            </p>
                            <p>
                                <a className="btn btn-primary" onClick={ this.onAddToCart2} >Mua ngay</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          )
      }
    }
    export default Product;
