import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Menu from "./Menu";
import Footer from "../Footer/Footer";
import Menusub from "./Menusub";
import Slider from "./Slider";
import Avantage from "./Advantage";
import Advantage from "./Advantage";
import ProductList from "./ProductList";
import Hotproduct from "./Hotproduct";
import Hotnews from "./Hotnews";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.URL = "/admin/productapi/";
    this.state = {
      isLoaded: false,
      products: [],
      blogs: []
    };
  }

  render() {
    return (
      <div className="body">
        <Menu />
        <Menusub />
        <Slider />
        <Advantage />

        <div className="content">
          <Row className="newphone">
            <Col span={6} offset={2}>
              <h1>ĐIỆN THOẠI MỚI NHẤT</h1>
            </Col>
          </Row>

          <ProductList
            products={this.state.products}
            isLoaded={this.state.isLoaded}
          />
          <Hotproduct
            products={this.state.products}
            isLoaded={this.state.isLoaded}
          />
        </div>
        <div className="space-item">
          <Row gutter={16}>
            <Hotnews blogs={this.state.blogs} isLoaded={this.state.isLoaded} />
          </Row>
        </div>
        <div>
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
    fetch("/admin/blog/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          blogs: json
        });
      });
  };
}

export default Home;
