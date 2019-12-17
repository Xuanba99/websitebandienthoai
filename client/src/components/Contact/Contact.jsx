import React from "react";
import Menu from "../Home/Menu";
import Footer from "../Footer/Footer";
import Imagecontact from "../../images/contact.jpg";
import Introcontact from "./Introcontact";
import "./css/contact.css";
import axios from "axios";

import { Row, Col } from "antd";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.URL = "/user/";
    this.state = {
      // name:"",
      // email:"",
      // errorName:"",
      // errorEmail:"",
      feedbacks: []
    };
  }

  handleSubmit = () => {
    var feedback = {
      name: this.refs.txtName.value,
      email: this.refs.txtEmail.value,
      problem: this.refs.txtProblem.value,
      content: this.refs.txtContent.value
    };
    axios.post(this.URL, feedback).then(response => {
      if (response.data == true) {
        alert("gửi thành công");
      } else {
        alert("sorrry baby");
      }
    });
  };

  render() {
    return (
      <div className="body1">
        <Menu />
        <div className="contentcontact">
          <img src={Imagecontact} />
        </div>
        <h2 className="title">
          FEEDBACK TO US, WE TRY SUPPORT YOU IS THE BEST WAY
        </h2>

        <div className="form">
          <Row>
            <Col span={12}>
              <form onSubmit={this.handleSubmit}>
                <h3 className="giveus">
                  Give us your problem or anything you want
                </h3>
                <table>
                  <tr>
                    <label>Tên của bạn</label>
                    <td>
                      <input
                        type="text"
                        className="txtContact"
                        name="name"
                        ref="txtName"
                        placeholder="Nguyễn Văn A"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    {/* <td style={{color:"red"}}>{this.state.errorName}</td> */}
                  </tr>
                  <br />
                  <tr>
                    <label>Địa chỉ email</label>
                    <td>
                      <input
                        type="text"
                        className="txtContact"
                        name="email"
                        ref="txtEmail"
                        placeholder="nguyenvana@gmail.com"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    {/* <td style={{color:"red"}}>  {this.state.errorEmail}</td> */}
                  </tr>
                  <br />
                  <tr>
                    <label>Vấn đề của bạn</label>
                    <td>
                      <input
                        type="text"
                        className="txtContact"
                        ref="txtProblem"
                        placeholder="Vd:Đặt hàng không được"
                      />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <label>Nội dung</label>
                    <td>
                      <textarea
                        rows="5"
                        cols="54"
                        ref="txtContent"
                        placeholder="Nội dụng cần ghi"
                      ></textarea>
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td></td>
                    <td>
                      <input
                        className="btnsubmit"
                        type="submit"
                        onClick={this.addFeedback}
                        value="GỬI"
                      />
                    </td>
                  </tr>
                </table>
              </form>
            </Col>
            <Col span={12}>
              <Introcontact />
            </Col>
          </Row>
        </div>
        <div className="footerContact">
          <Footer />
        </div>
      </div>
    );
  }
  // componentDidMount(){
  //     this.getAll();
  // }
  // getAll=()=>{
  //     axios.get(this.URL).then((response)=>{
  //         this.setState({
  //             feedbacks:response.data
  //         });
  //      });

  // }
}

export default Contact;
