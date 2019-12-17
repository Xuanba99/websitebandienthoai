import React from 'react';
import { Icon,Row,Col } from 'antd';
import './css/contact.css';


class Introcontact extends React.Component{
    render(){
        return(
            <div>
            <Row>
            <h2>Thông tin liên hệ</h2>
                <Col span={12}>Địa chỉ <br/>
                Email <br/>
                Số điện thoại <br/>
                Theo dõi chúng tôi tại <br/>
                
                </Col>
                <Col  span={12}>
                    Chúng tôi chỉ có trên mạng<br/>
                    Xuanba1903@gmail.com <br/>
                    0328 265 710 <br/>
                    <button  class="btnSocial facebook">  <Icon class="iconsocial" type="facebook"/></button>
                    <button  class="btnSocial youtube">   <Icon  class="iconsocial" type="youtube"/></button>
                    <button  class="btnSocial instagram">   <Icon  class="iconsocial" type="instagram"/></button>
                   
                   
                    
                </Col>
              
            </Row>
           
          </div>
        );
    }
}
export default Introcontact;
