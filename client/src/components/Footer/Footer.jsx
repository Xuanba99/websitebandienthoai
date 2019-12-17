import React from 'react';
import { Row ,Col} from 'antd';
import { Link} from 'react-router-dom';
class Footer extends React.Component{
    render(){
        return(
            <div className="main-footer">
                    <div className="content-footer"> 
                            <div className="socialApp">   
                            </div>
                            <div className="help-footer">
                                <label>Hỗ trợ khách hàng</label>
                                <ul className="menu-footer">
                                    <li><a href="#">Chính sách đổi trả</a> </li>
                                    <li> <Link to="/gioi-thieu">Giới thiệu</Link> </li>
                                    <li><a href="#">Bảo hành</a> </li>
                                    <li><Link to="/cua-hang">Cửa hàng</Link> </li>
                                </ul>

                            </div>
                            

                            <div className="main-menu1"> 
                                <ul className="menu-footer">
                                    <li><Link to="/">Trang chủ</Link> </li>
                                    <li> <Link to="/cua-hang">Cửa hàng</Link> </li>
                                    <li> <Link to="/gioi-thieu">Giới thiệu</Link> </li>
                                    <li> <Link to="/lien-he">Liên hệ</Link> </li>
                                </ul> 
                            </div>

                            <div className="main-menu2">
                            <Row>
                                <Col span={12}>
                                <p>Tư vấn mua hàng (Miễn phí)</p>
                                 <h2>1800 6601</h2>
                                 <p>Hỗ trợ thanh toán:</p>

                                </Col>
                                <Col span={12}>
                                <p>Góp ý, khiếu nại dịch vụ (8h00-22h00)</p>
                                 <h2>1800 6616</h2>
                                 

                                </Col>
                            </Row>

                            </div>
                    </div>
                
            </div>
             

        );
    }
}
export  default Footer;