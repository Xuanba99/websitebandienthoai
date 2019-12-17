import React from "react";
import Menu from "../Home/Menu";
import Footer from "../Footer/Footer";
import { Row, Col, Icon } from "antd";
import backgroundimg from "../../images/bgblog.jpg";
import "./readnew.css";

class Readnews extends React.Component {
  constructor(props) {
    super(props);
    this.URL = "/admin/blog/";

    this.state = {
      isLoaded: false,
      blogs: []
    };
  }
  render() {
    var IDblog = this.props.match.params.id;

    return (
      <div className="body1 readnowbg">
        <Menu />
        <Row className="advertise-main">
          <Col span={16} offset={4}>
            <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/78379809_567293300510930_2855175115988008960_n.png?_nc_cat=104&_nc_ohc=3YtUxxCME_EAQkhCuyRpTadSlfQfjwbYOZ0JVRSnCbvmJ9rRH4UZ5tPTA&_nc_ht=scontent.fsgn3-1.fna&oh=7941845198a418d9761a78e92d436798&oe=5E749602" />
          </Col>
        </Row>
        {this.state.blogs.map((blog, key) => {
          if (blog._id === IDblog) {
            return (
              <Row key={key}>
                <Col span={16} offset={4} className="body-news">
                  <Row className="header-news">
                    <Col span={22} offset={1}>
                      <h3>TIN TỨC</h3>
                      <h1>{blog.name}</h1>
                    </Col>
                  </Row>
                  <Row className="body-news">
                    <Col span={15} offset={1}>
                      <p>{blog.content}</p>
                    </Col>
                    <Col span={5} offset={1} className="readnew-banner">
                      <img src="https://media.giphy.com/media/NsTceS2EH3Mli/giphy.gif" />
                      <img src="https://media.giphy.com/media/EpqJGmgfBL8Zy/giphy.gif" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            );
          }
        })}

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
          blogs: json
        });
      });
  };
}
export default Readnews;
