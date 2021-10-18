import React from "react";

// <ListaItem/>
// <PropietariosForm onSubmit={this.handleSubmit}/>
class ProductItem extends React.Component{
    render(){
        return(
            <div className="col-12 border">
                <h6 className="text-center py-1">Product List</h6>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 col-sm-12 py-3 border" id="caja">
                        <div className="row">
                            <div className="col-12">
                                <p>buffalo - Striploin</p>
                            </div>
                            <div className="col-12">
                                <strong>$39.11</strong>
                            </div>
                            <div className="col-3 offset-3">
                                <strong>DETAILS</strong>
                            </div>
                            <div className="col-5">
                                <button className="text-white bg-dark">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 py-3 border" id="caja">
                        <div className="row">
                            <div className="col-12">
                                <p>Bacardi Brezzer - Tropical</p>
                            </div>
                            <div className="col-12">
                                <strong>$257.92</strong>
                            </div>
                            <div className="col-3 offset-3">
                                <strong>DETAILS</strong>
                            </div>
                            <div className="col-5">
                                <button className="text-white bg-dark">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 py-3 border" id="caja">
                        <div className="row">
                            <div className="col-12">
                                <p>Wine - Gato Negro Cabernet</p>
                            </div>
                            <div className="col-12">
                                <strong>$51.01</strong>
                            </div>
                            <div className="col-3 offset-3">
                                <strong>DETAILS</strong>
                            </div>
                            <div className="col-5">
                                <button className="text-white bg-dark">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 py-3 border" id="caja">
                        <div className="row">
                            <div className="col-12">
                                <p>Cabbage - Nappa</p>
                            </div>
                            <div className="col-12">
                                <strong>$250.90</strong>
                            </div>
                            <div className="col-3 offset-3">
                                <strong>DETAILS</strong>
                            </div>
                            <div className="col-5">
                                <button className="text-white bg-dark">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 py-3 border" id="caja">
                        <div className="row">
                            <div className="col-12">
                                <p>Sping Loaded Cup Dispenser</p>
                            </div>
                            <div className="col-12">
                                <strong>$175.85</strong>
                            </div>
                            <div className="col-3 offset-3">
                                <strong>DETAILS</strong>
                            </div>
                            <div className="col-5">
                                <button className="text-white bg-dark">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 py-3 border" id="caja">
                        <div className="row">
                            <div className="col-12">
                                <p>Bread - Mait</p>
                            </div>
                            <div className="col-12">
                                <strong>$82.61</strong>
                            </div>
                            <div className="col-3 offset-3">
                                <strong>DETAILS</strong>
                            </div>
                            <div className="col-5">
                                <button className="text-white bg-dark">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 py-3 border" id="caja">
                        <div className="row">
                            <div className="col-12">
                                <p>Glass clear 8 Oz</p>
                            </div>
                            <div className="col-12">
                                <strong>$201.10</strong>
                            </div>
                            <div className="col-3 offset-3">
                                <strong>DETAILS</strong>
                            </div>
                            <div className="col-5">
                                <button className="text-white bg-dark">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 py-3 border" id="caja">
                        <div className="row">
                            <div className="col-12">
                                <p>Sour Puss Rasspberry</p>
                            </div>
                            <div className="col-12">
                                <strong>$134.99</strong>
                            </div>
                            <div className="col-3 offset-3">
                                <strong>DETAILS</strong>
                            </div>
                            <div className="col-5">
                                <button className="text-white bg-dark">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 py-3 border" id="caja">
                        <div className="row">
                            <div className="col-12">
                                <p>Pork - Chop, Frenched</p>
                            </div>
                            <div className="col-12">
                                <strong>$199.16</strong>
                            </div>
                            <div className="col-3 offset-3">
                                <strong>DETAILS</strong>
                            </div>
                            <div className="col-5">
                                <button className="text-white bg-dark">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductItem;