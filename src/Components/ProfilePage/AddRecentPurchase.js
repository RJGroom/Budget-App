import React from 'react';

const AddRecentPurchase = () => {
    return (
        <div className="add-recent-purchase-container">
            <h3>Add Recent Purchase</h3>
            <form className="add-recent-purchase-form">
                <div>
                    <label>Description</label> <br />
                    <input type="text" name="purchase" placeholder="Place, Item, etc..." size="15" />
                </div>
                <div>
                    <label>Amount</label> <br />
                    <input type="number" name="purchaseAmount" placeholder="Enter amount" size="15" />
                </div>
                <input type="submit" value="Add" className="add-purchase-submit" /> <br />
            </form>
        </div>
    )
}

export default AddRecentPurchase;