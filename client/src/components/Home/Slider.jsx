import React from 'react';
import Ad1 from '../../images/advantage1.jpg';
import Ad2 from '../../images/advantage2.jpg';
import Ad3 from '../../images/advantage3.jpg';
import Ad4 from '../../images/advantage4.jpg';
import { Row, Col,Icon } from 'antd';
 
class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state={
            currentImage: 1
        }
    }
    PrevImage=()=>{
        this.state.currentImage= (this.state.currentImage===1)? 4 : this.state.currentImage-1;
        this.setState(this.state);

    }
    NextImage=()=>{
        this.state.currentImage=(this.state.currentImage===4) ? 1: this.state.currentImage+1;
        this.setState(this.state);
    }

    render(){
         var Advantage="";
        if(this.state.currentImage==1){
            Advantage=  <img src={Ad1}/>;
        }else if(this.state.currentImage==2){
            Advantage=  <img src={Ad2}/>;
        }else if(this.state.currentImage==3){
            Advantage=  <img src={Ad3}/>;
        }else if(this.state.currentImage==4){
            Advantage=  <img src={Ad4}/>;
        }
        return (
            <Row className="slider-father">
                <Col  span={17}> 
                  <div className="slider">
                  <div>
                      {Advantage}
                  </div>
                  <div className="btnChangeimg">
                  <button className="btnslider prev" onClick={this.PrevImage}><Icon type="left" /></button>
                  <button className="btnslider next" onClick={this.NextImage}><Icon type="right" /></button>
                  </div>
                
              
                  </div>
              </Col>
                <Col span={7}>
                    <div className="advantage">
                        <img src="https://images.fpt.shop/unsafe/fit-in/385x88/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/11/22/637100031483524827_F-H2_385x88@2x.png"/>
                        <img className="ad-img2" src="https://images.fpt.shop/unsafe/fit-in/385x88/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/11/1/637081654200877009_Banner-S10e-H2-2X.png"/>
                        <img className="ad-img2" src="https://images.fpt.shop/unsafe/fit-in/385x88/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/11/1/637081654200877009_Banner-S10e-H2-2X.png"/>
                    </div>
                    
                </Col>
            </Row>
          
        );

    }
   
}

export default Slider;
