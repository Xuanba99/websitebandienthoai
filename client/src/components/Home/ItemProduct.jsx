import React from 'react';
import { Row, Col,Icon } from 'antd';
import {Link} from 'react-router-dom';
import { formatCountdown } from 'antd/lib/statistic/utils';
import axios from 'axios';

class ItemProduct extends React.Component {
    format_currency=(price)=>{
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.");
    }
    
    render(){
        var products = this.props.products;
        var isLoaded = this.props.isLoaded;
     
      
          if(!isLoaded){
              return <div>Loading <Icon type="loading" /></div>
          }else{
            return (
                <div>
                {products.map(product=>(
                    <Col className="gutter-row" span={8} key={product._id}>
                        <div className="gutter-box">
                            <h3>{product.name}</h3> 
                            <Row>
                                <Col span={9} offset={1}><h4 className="price-product">{this.format_currency(product.price)} vnđ</h4>
                                <p>RAM: {product.ram}</p>
                                <p>Bộ nhớ trong: {product.memory}</p>
                                <p>Hãng: {product.hang}</p>
                                
                                
                                <button className="btnDetail">  
                                <Link to={"chi-tiet/"+product._id} onClick={this.getID} data-param={product._id}><Icon type="plus-circle"/> CHI TIẾT</Link>
                                </button> 
                               
                            
                                </Col>
                                <Col span={9}>
                                <Link to={"chi-tiet/"+product._id} onClick={this.getID} data-param={product._id}><img className="img-item" src={`data:image/png;base64,${product.image}`}/></Link>
                                </Col>
                            </Row>
                     </div> 
                     </Col>
                ))} 
             
                
                </div>
              );

          }
        
       
    }
   
     
   
 
}


export default ItemProduct;
