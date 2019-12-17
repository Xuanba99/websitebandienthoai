import React from "react";
import Menu from "../Home/Menu";
import Footer from "../Footer/Footer";
import ProductList from "../Home/ProductList";
import Adv from "./Advertise";
import "./Store.css";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.URL = "admin/productapi/";
    this.state = {
      products: [],
      isLoaded: false,
      advertise: []
    };
  }

  render() {
    return (
      <div className="body1">
        <Menu />
        <div>
          <div className="advantage-blog">
            <Adv
              advertise={this.state.advertise}
              isLoaded={this.state.isLoaded}
            />
          </div>

          <ProductList
            products={this.state.products}
            isLoaded={this.state.isLoaded}
          />
        </div>
        <div className="footerStore">
          <Footer />
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    fetch(this.URL)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          products: json
        });
      });
    fetch("/admin/advertise/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          advertise: json
        });
      });
  };
}

export default Store;
