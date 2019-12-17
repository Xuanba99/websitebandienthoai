import React from 'react';
import { Row, Col } from 'antd';
import Item from './Itemhotproduct';
class Hotproduct extends React.Component{
    render(){
        return(
            <div className="list-product">
               <h1>BÁN CHẠY NHẤT</h1>
            <div className="space-item" >
                <Row gutter={16}> 
                    <Item products={this.props.products} isLoaded={this.props.isLoaded}/>
                    
                </Row>

            </div>
         
        </div>


        );
    }
}
export default Hotproduct;