import React from "react";
import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Product.scss";
import "./Home.scss";
import Table from "../components/Table";


    function Product() {


    return (
        <>
        <div className="seller-content seller-content-product">
            <div className="Notice">
            <div className="NoticeWrapper">
                <a>상품 조회/수정</a>
            </div>
            </div>
            <div className="SellerSubframe">
                <div className="product-list">
                    <div className="panel panel-seller">
                        <div className="panel-heading">
                            <div className="pull-left">
                                <h3 className="panel-title">상품목록 (총&nbsp;
                                    <span className="text-primary">0</span>
                                    개)
                                </h3>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="btn-list"></div>
                            <div className="product-list">
                                <Table></Table>
                            </div>
                        </div>
                        <div className="panel-footer"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    }

export default Product;
