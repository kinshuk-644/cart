import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }

        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        console.log('this.state', this.state);
    }

    render() {
        const {price, title, qty} = this.state;
        
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>

                <div className='right-block'>
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs {price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>

                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img 
                        alt='increase' 
                        className='action-icons' 
                        src='https://as1.ftcdn.net/v2/jpg/02/51/03/82/1000_F_251038282_CLb3d8tk99bGoU9ILEYS8vY215fgRmGT.jpg' 
                        // onClick={this.increaseQuantity.bind(this)}
                        onClick={this.increaseQuantity}
                        />
                        
                        <img 
                        alt='decrease' 
                        className='action-icons' 
                        src='https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg' 
                        />
                        
                        <img 
                        alt='delete' 
                        className='action-icons' 
                        src='https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1640255704~hmac=7280aae68b1aba11bcbb853e0a8a823c' 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;