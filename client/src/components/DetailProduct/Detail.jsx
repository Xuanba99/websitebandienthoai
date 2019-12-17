import React from "react";
import Menu from "../Home/Menu";
import Footer from "../Footer/Footer";
import "./detail.css";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";
import CursorZoom from "react-cursor-zoom";
import axios from "axios";
import session from "express-session";

class Detail extends React.Component {
  format_currency = price => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  constructor(props) {
    super(props);
    this.URL = "/admin/productapi/";

    this.state = {
      isLoaded: false,
      products: []
    };
  }

  render() {
    var IDproduct = this.props.match.params.id;

    return (
      <div className="body1">
        <Menu />
        {this.state.products.map((product, key) => {
          if (product._id === IDproduct) {
            return (
              <div className="detail-body" key={key}>
                <Row className="div-nameofproduct">
                  <Col span={24} className="div-nameofproduct1">
                    <h2>{product.name}</h2>
                  </Col>
                </Row>

                <Row className="detail-product-main">
                  <Col span={9} className="easyzoom">
                    <CursorZoom
                      image={{
                        src: `data:image/png;base64,${product.image}`,
                        width: 420,
                        height: 480
                      }}
                      zoomImage={{
                        src: `data:image/png;base64,${product.image}`,
                        width: 1800,
                        height: 1600
                      }}
                      cursorOffset={{ x: 120, y: -100 }}
                    />
                  </Col>
                  <Col span={9} className="sidebardetail">
                    <h1 className="price">
                      {this.format_currency(product.price)}
                    </h1>
                    <p className="shipnow">
                      <Icon className="dashboard" type="dashboard" /> SẢN PHẨM
                      GIAO HÀNG TRONG 1 GIỜ
                    </p>
                    <h2>Thông tin</h2>
                    <h3>RAM:</h3>
                    <p>{product.ram} GB</p>
                    <h3>Bộ nhớ trong:</h3>
                    <p>{product.memory} GB</p>

                    <h3>Chi tiết</h3>
                    <p>{product.detail}</p>
                    <form onSubmit={this.handleSubmit}>
                      <input
                        type="hidden"
                        name="txtID"
                        ref="txtID"
                        value={product._id}
                      />
                      <Link
                        className="text-btnmuangay"
                        to={"/gio-hang/" + product._id}
                      >
                        {" "}
                        <input
                          type="submit"
                          className="btnbuy-addtocart"
                          value="MUA NGAY"
                        />
                      </Link>
                      {/* <button className="btnbuy-addtocart"  type="submit"><Link to={'/gio-hang'+product._id+}><Icon type="shopping-cart" /> MUA NGAY</Link>  </button> */}
                    </form>
                    <h4>Gọi 1800 6601 để được tư vấn mua hàng (Miễn phí)</h4>
                  </Col>
                  <Col span={6} className="sidebardetailleft">
                    <h3>Trong hộp có:</h3>
                    <p>
                      <Icon className="iconcamket" type="gift" />
                      <a> Máy, Sạc, Cáp, Tai nghe, Sách hướng dẫn</a>
                    </p>
                    <h3>Techphone cam kết:</h3>
                    <p>
                      <Icon className="iconcamket" type="gift" /> Hàng chính
                      hãng
                    </p>
                    <p>
                      {" "}
                      <Icon className="iconcamket" type="check" /> Bảo hành 12
                      Tháng chính hãng
                    </p>
                    <p>
                      {" "}
                      <Icon className="iconcamket" type="car" /> Giao hàng miễn
                      phí toàn quốc trong 60 phút
                    </p>
                    <p>
                      {" "}
                      <Icon className="iconcamket" type="heat-map" /> Bảo hành
                      nhanh tại FPT Shop trên toàn quốc
                    </p>
                    <p>
                      <Icon type="dollar" className="iconcamket" /> Hoàn tiền
                      200% nếu máy nấu
                    </p>
                    <div className="advertise-detail">
                      <img src="https://media.giphy.com/media/dUezxCLov63G6uB6o2/giphy.gif" />
                      <img src="https://media.giphy.com/media/YreQO4O9DiPMEWq2lJ/giphy.gif" />
                      <img src="https://media.giphy.com/media/fXE5wvKXzJpiv2kUNy/giphy.gif" />
                    </div>
                  </Col>
                </Row>
              </div>
            );
          }
        })}

        <div className="footerDetail">
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
  };
}
export default Detail;
