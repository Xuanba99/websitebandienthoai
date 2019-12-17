import { Row, Col } from 'antd';
import React from 'react';
import { Icon } from 'antd';
class Menusub extends React.Component{
    render(){
        return(
            <div className="menusub">
            <div className="item-menu">
                <ul className="sub-nav">
                    <li className="itemmm">
                         <a href="#"><Icon type="shake" className="iconmenu"/>ĐIỆN THOẠI</a> 
                            <div className="item-dienthoai">
                                <ul>
                                    <li>Iphone 7</li>
                                    <li>Iphone 8</li>
                                    <li>Iphone X</li>
                                    <li>Iphone XI</li>
                                </ul>
                            </div>
                    </li>
                    <li  className="itemmm">
                     <a href="#"><Icon type="desktop"  className="iconmenu"/> LAPTOP</a>
                       <div className="item-laptop">
                            <ul>
                                <li>Macbook air 17</li>
                                <li>Macbook pro 18 8</li>
                                <li>Macbook Pro 16inchX</li>
                            </ul>
                        </div>
                     </li>
                    <li  className="itemmm">  <a href="#"><Icon type="mobile"  className="iconmenu"/> TABLET</a></li>
                    <li  className="itemmm"> <a href="#"><Icon type="customer-service"  className="iconmenu"/>PHỤ KIỆN</a></li>
                </ul>
                
            </div>
                
              
            </div>




        );
    }
}
export default Menusub;