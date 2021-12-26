import React from 'react';

class CartItem extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }

    //     // this.increaseQuantity = this.increaseQuantity.bind(this);
    //     // this.testing();
    // }

    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {

    //         // setState acts like a synchronous call
    //         this.setState({qty: this.state.qty + 10});
            
    //         this.setState({qty: this.state.qty + 10});

    //         this.setState({qty: this.state.qty + 10});

    //         console.log('state', this.state);
    //     })
    // }

    // increaseQuantity = () => {
    //     // this.state.qty += 1; // react doesnt change state with this
    //     console.log('this.state', this.state);

    //     // setState form 1
    //     // this.setState({
    //     //     title: "some new title",
    //     //     qty: this.state.qty + 1
    //     // });

    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // });

    //     // this.setState({
    //     //     qty: this.state.qty + 5
    //     // });

    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // });

    //     // setState form 2 - if prevState required use this
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     }, () => {
    //         console.log('this.state', this.state);
    //     });

    //     // console.log(this.state); // asynchronous behaviour of setState

    //     // this.setState((prevState) => {
    //     //     return {
    //     //         qty: prevState.qty + 1
    //     //     }
    //     // });

    //     // this.setState((prevState) => {
    //     //     return {
    //     //         qty: prevState.qty + 1
    //     //     }
    //     // });
    // }

    // decreaseQuantity = () => {
    //     const {qty} = this.state;

    //     if(qty == 0)
    //         return;

    //     // setState form 2 - if prevState required use this
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }

    render() {
        console.log('this.props', this.props);
        const {price, title, qty} = this.props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity } = this.props;
        
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
                        onClick={() => onIncreaseQuantity(product)}
                        />
                        
                        <img 
                        alt='decrease' 
                        className='action-icons' 
                        src='https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg'
                        onClick={() => onDecreaseQuantity(product)} 
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