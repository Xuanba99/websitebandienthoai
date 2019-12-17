import React from 'react';
import { Row, Col } from 'antd';
import Item from './Itemhotproduct';
import {Link} from 'react-router-dom';
class Hotnews extends React.Component{

    render(){
        var blogs = this.props.blogs;
        var isLoaded = this.props.isLoaded;
        return(
            <div>
                <h1>TIN TỨC MỚI NHẤT</h1>
                {
                    blogs.slice(blogs.length-3, blogs.length).map(blog =>(

                        <Col span={8} key={blog._id}  >
                        <div className="space-blog"> 
                            <Row>
                                <Col span={24} className="padding-news-name">
                                <h3><Link to={"doc-tin/"+blog._id}>{blog.name}</Link> </h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                <img className="hotnewsimg" src={`data:image/png;base64,${blog.image}`}/>
                                </Col>
                            </Row>
                            </div>
                         </Col>
                    ))
                }
              
            </div>
           
          


        );
    }
}
export default Hotnews;