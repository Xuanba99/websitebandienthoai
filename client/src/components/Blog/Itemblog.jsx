import React from 'react';
import { Row, Col,Icon } from 'antd';
import { Link } from 'react-router-dom';
class Itemblog extends React.Component {
    
    // constructor(props){
    //     super(props);
    //     this.URL=' http://localhost:1903/admin/';
    //     this.state={
    //         blogs:[],
    //         isLoaded:false
    //     }  
    // }
     
    render(){
        // var {isLoaded,blogs}=this.state;
        var blogs = this.props.datablog;
        var isLoaded = this.props.isLoaded;
        if(!isLoaded){
            return <div>Loading <Icon type="loading" /></div>
        }else {
            return(
                <div> 
                {blogs.map(blog=>(
                    <Row className="content-blog" key={blog._id}>
                        <Col className="img-blog" span={11}>
                            <a href={'detail/{blog._id }'}> 
                            <img src={`data:image/png;base64,${blog.image}`} alt="smartphone"/>
                            </a>
                        </Col>
                        <Col span={12} offset={1}>
                        <a href={'detail/{blog._id }'}> 
                        <h3><Link to={"doc-tin/"+blog._id}>{blog.name}</Link> </h3>
                        </a>
                        </Col>
                        
                  </Row> 
                ))}
                </div>
                
            );
        }
         
    }
    // componentDidMount=()=>{
    //     fetch(this.URL)
    //     .then (res=>res.json())
    //     .then(json=>{
    //         this.setState({
    //             isLoaded:true,
    //             blogs:json,
    //         })
    //     })
         
        
    // }

}
export default Itemblog;
 