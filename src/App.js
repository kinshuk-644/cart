import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase"
import "firebase/firestore"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        // {
        //   price: 99,
        //   title: 'Watch',
        //   qty: 1,
        //   img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        //   id: 1
        // },

        // {
        //   price: 999,
        //   title: 'Mobile Phone',
        //   qty: 10,
        //   img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80',
        //   id: 2
        // },

        // {
        //   price: 999,
        //   title: 'Laptop',
        //   qty: 4,
        //   img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80',
        //   id: 3
        // }
      ],

      loading: true
    }

    this.db = firebase.firestore();

    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  componentDidMount() {
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {
    //   console.log(snapshot);

    //   snapshot.docs.map((doc) => {
    //     console.log(doc.data());
    //   });

    //   const products = snapshot.docs.map((doc) => {
    //     const data = doc.data();

    //     data['id'] = doc.id;
    //     return data;
    //   });

    //   this.setState({
    //     products: products,
    //     loading: false
    //   })
    // })

    this.db
    .collection('products')
    .onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });

      const products = snapshot.docs.map((doc) => {
        const data = doc.data();

        data['id'] = doc.id;
        return data;
      });

      this.setState({
        products: products,
        loading: false
      })
    })
  }

  handleIncreaseQuantity = (product) => {
    console.log('Heyy pls increase the qty of ', product);

    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      // products: products
      products
    })

  }

  handleDecreaseQuantity = (product) => {
    console.log('Heyy pls decrease the qty of ', product);

    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0)
      return;

    products[index].qty -= 1;

    this.setState({
      // products: products
      products
    })

  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      if(product.qty > 0)
        cartTotal += product.qty * product.price;

      return '';
    });

    return cartTotal;
  }

  addProduct = () => {
    this.db 
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty: 3,
      title: 'washing machine'
    })
    .then((docRef) => {
      console.log('Product has been added', docRef);
    })
    .catch((error) => {
      console.log('Error : ', error);
    })
  }

  render() {
    const { products, loading } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={ {padding: 20, fontSize: 20} }>Add a product</button>

        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />

        {loading && <h1>Loading Products ...</h1>}

        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
