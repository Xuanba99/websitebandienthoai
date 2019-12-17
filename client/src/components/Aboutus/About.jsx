import React from 'react';
import Menu from '../Home/Menu';
import Footer from '../Footer/Footer';
import { Row, Col } from 'antd';
import { Button, Radio, Icon } from 'antd';
import {Link} from 'react-router-dom';
import Avatar from '../../images/avatar.jpg';
import './About.css';

class About extends React.Component {
  
  render(){
    
    return (

        <div className='body1'>
             <Menu/>
             <div className="content-About">
              <Row className="about">
                  <Col span={8} offset={4}>
                    <h2>Chủ sở hữu</h2>
                   <h2>Thái Xuân Ba</h2>
                   <h3>Đại Học Văn Lang</h3>
                   <h3>Lớp: k23T01</h3>
                   <p>Đây là đồ án của mình tự làm. Với thời gian khoảng <br/> gần 1 tháng hiện tại còn thíu sót rất nhiều. Mình sẽ <br/>  cố gắng nâng cấp và phát triển nhiều đồ án<br/> khác nữa</p>
                   <div className="socialMedia">
                   <h3>Follow me</h3>
                     <a href="https://www.facebook.com/monster.gb.1" target="_blank"><img src="https://assets.pcmag.com/media/images/659661-hidden-facebook-features-only-power-users-know.jpg?thumb=y&width=412&height=412&boxFit=y"/></a>
                     <a href="https://www.youtube.com/channel/UCMFnHHX3gtF9ltuxK7O7FiQ?view_as=subscriber" target="_blank"><img src="https://cdn.tgdd.vn/Files/2019/11/11/1217858/youtube_800x450.jpg"/></a>
                     <a href="https://www.instagram.com/daddy19.3/" target="_blank"><img src="https://phongvu.vn/cong-nghe/wp-content/uploads/2018/08/instagram.jpg"/></a>

                   </div>
                   <div className="btnshoppingproduct">
                   <Button  className="btnAbout" type="danger"><Link to="/cua-hang"  ><Icon className="shopping-cart" type="shopping-cart" />Ghé mua hàng</Link> </Button>
                   </div>
                    
                  </Col>
                  <Col className="imgAbout" span={8}>
                   <img src={Avatar}/>
                  </Col>
              </Row>
          

             </div>
             <div className="footerAbout">
                <Footer />
             </div>
        </div>
    );
  }
}

export default About;
