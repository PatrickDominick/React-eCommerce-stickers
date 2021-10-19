import React, { Component } from "react";

import PageTitle from "../pageTitle";
import PurchaseDetail from "./purchaseDetail";
import Purchases from "./purchases";

class PurchaseHistory extends Component {
    render() {
        return (
            <div className= "purchase-history">
                <PageTitle className="purchase-history__page-title" title="Purchase History" />
                <Purchases />
                <PurchaseDetail className="purchase-history__detail"/>
                <div className="purcase-history__border-bottom"></div>
            </div>
        )
    }
}

export default PurchaseHistory;