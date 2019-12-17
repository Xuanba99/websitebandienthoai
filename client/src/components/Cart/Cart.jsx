import React from "react";
import Menu from "../Home/Menu";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./Cart.css";
import axios from "axios";
class Cart extends React.Component {
  format_currency = price => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  constructor(props) {
    super(props);
    this.URL = "/admin/productapi/";
    var date = new Date().getTime();
    this.state = {
      isLoaded: false,
      products: [],
      dateorder: date,
      sum: 0
    };
  }

  sumMoney = () => {
    var soluong = this.refs.orderQuantity.value;

    this.state.products.map((product, key) => {
      if (product._id === this.props.match.params.id) {
        this.setState({
          sum: product.price * soluong
        });
      }
    });
  };
  SubmitOrder = () => {
    var orderitem = {
      nameofproduct: this.refs.orderName.value,
      priceofproduct: this.refs.orderPrice.value,
      quantity: this.refs.orderQuantity.value,
      total: this.refs.txtSum.value,
      cusname: this.refs.txtCusName.value,
      cusphone: this.refs.txtCusPhone.value,
      cusaddress: this.refs.txtCusAddress.value,
      cusmail: this.refs.txtCusEmail.value,
      dateorder: this.state.dateorder,
      status: "PENDING"
    };
    axios.post("/user/order", orderitem).then(response => {
      if (response.data == true) {
        alert(
          "Đã đặt hàng thành công. Nhân viên sẽ liên hệ với bạn trong 20p tới!"
        );
      } else {
        alert("sorrry baby");
      }
    });
  };
  render() {
    var IDproduct = this.props.match.params.id;
    if (this.state.sum === 0) {
      this.state.sum = "";
    }

    return (
      <div>
        <Menu />
        <div className="cart-title">
          <h2 className="cart-h2">GIỎ HÀNG CỦA BẠN (0 sản phẩm)</h2>
          <h3 className="cart-h2 carth2">
            <Link to="/cua-hang">Mua thêm sản phẩm khác</Link>{" "}
          </h3>
        </div>
        <div className="cart-content">
          <div className="cart-border">
            <div className="cart-product">
              {this.state.products.map((product, key) => {
                if (product._id === IDproduct) {
                  return (
                    <div key={key} className="product-cart">
                      <table>
                        <tr className="name-cart-product">
                          <th width={6500}>Tên sản phẩm</th>
                          <th width="1500">Hình ảnh</th>
                          <th width={4000}>Giá</th>
                          <th width={1000}>Số lượng</th>
                        </tr>
                        <tr>
                          <td>
                            {" "}
                            <input
                              type="text"
                              readOnly="true"
                              className="quantity namecart"
                              ref="orderName"
                              value={product.name}
                            />{" "}
                          </td>
                          <td>
                            <img
                              className="cart-img"
                              src={`data:image/png;base64,${product.image}`}
                            />
                          </td>
                          <td>
                            {" "}
                            <input
                              type="text"
                              ref="orderPrice"
                              readOnly="true"
                              className="quantity namecart"
                              value={this.format_currency(product.price)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              ref="orderQuantity"
                              className="quantity"
                              name="txtQuantity"
                            />
                          </td>
                        </tr>
                      </table>

                      <div className="cart-total">
                        <div>
                          <button
                            onClick={this.sumMoney}
                            className="btnTinhtien"
                          >
                            Tính tiền
                          </button>
                          <h2 className="cart-h3-total">
                            Tổng:{" "}
                            <input
                              value={this.format_currency(this.state.sum)}
                              className="quantity namecart"
                              type="text"
                              ref="txtSum"
                            />{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div className="cart-info">
              <h2>Thông tin khách hàng</h2>
              <table>
                <tr>
                  <td>Họ và tên:</td>
                  <td>
                    <input
                      className="cart-text"
                      type="text"
                      ref="txtCusName"
                      placeholder="Nhập họ và tên"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Số điện thoại:</td>
                  <td>
                    <input
                      className="cart-text"
                      type="text"
                      ref="txtCusPhone"
                      placeholder="Nhập số điện thoại"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Địa chỉ:</td>
                  <td>
                    <input
                      className="cart-text"
                      type="text"
                      ref="txtCusAddress"
                      placeholder="Nhập địa chỉ nhận hàng"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <input
                      className="cart-text"
                      type="text"
                      ref="txtCusEmail"
                      placeholder="Nhập email"
                    />
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    <input
                      className="cart-btnBuy"
                      type="submit"
                      value="Đặt hàng"
                      onClick={this.SubmitOrder}
                    />
                    <input
                      className="cart-btnCancel"
                      type="submit"
                      value="Huỷ"
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <Footer />
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
export default Cart;
