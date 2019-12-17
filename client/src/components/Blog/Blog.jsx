import React from "react";
import Menu from "../Home/Menu";
import Footer from "../Footer/Footer";
import Itemblog from "./Itemblog";
import Blogmain from "./Blogmain";
import Advertise from "./Advertise";
import { Row, Col } from "antd";
import "./Blog.css";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.URL = "/admin/blog/";

    this.state = {
      blogs: [],
      isLoaded: false,
      advertise: []
    };
  }
  render() {
    return (
      <div className="body1">
        <Menu />
        <div className="advantage-blog">
          <Advertise
            advertise={this.state.advertise}
            isLoaded={this.state.isLoaded}
          />

          <hr style={{ marginTop: 20 }} />
          <Row>
            <Col span={8}>
              <Itemblog
                datablog={this.state.blogs}
                isLoaded={this.state.isLoaded}
              />
            </Col>

            <Col span={16}>
              <Blogmain
                datablog={this.state.blogs}
                isLoaded={this.state.isLoaded}
              />
            </Col>
          </Row>
        </div>

        <div className="footerBlog">
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
          blogs: json
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

export default Blog;
