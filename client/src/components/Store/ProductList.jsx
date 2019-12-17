import React from 'react';
import { Row, Col } from 'antd';
import Item from './ItemProduct';

class ProductList extends React.Component {
    render(){
          
        return (
            <div className="list-product">
               
                <div className="space-item" >
                    <Row gutter={16}> 
                        <Item products={this.props.products} isLoaded={this.props.isLoaded}/>
                        
                    </Row>

                </div>
             
            
             
            </div>
        );
        
    }
  
}

export default ProductList;
