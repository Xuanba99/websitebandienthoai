import React from "react";
import { Link } from "react-router-dom";
import { formatCountdown } from "antd/lib/statistic/utils";
import axios from "axios";
import Item from "antd/lib/list/Item";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.URL = "/admin/";
    this.state = {
      blogs: [],
      isLoaded: false
    };
  }

  render() {
    // var trows = [];
    // for(var blog of this.state.blogs ){
    //     trows.push(
    //         <tr>
    //               <td><a href="#" onClick={this.getID} data-param={blog._id}>{blog._id}</a></td>
    //             <td>{blog.name}</td>
    //             <td>{blog.content}</td>
    //             <td>{blog.image}</td>
    //         </tr>
    //     );
    // }

    var { isLoaded, blogs } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>hello mọi nguoi day là admin</h2>
          <table border="1">
            <tr>
              <th>ID</th>
              <th>Tên blog</th>
              <th>Nội dung</th>
              <th>Ảnh đại diện</th>
            </tr>

            {blogs.map(blog => (
              <tr key={blog._id}>
                <td>{blog._id}</td>
                <td>{blog.name}</td>
                <td>{blog.content}</td>
                <td>{blog.image}</td>
              </tr>
            ))}

            {/* {trows} */}
          </table>
          <button type="button">
            <Link to="/them-bai-viet">Thêm bài viết</Link>
          </button>
        </div>
      );
    }
  }
  componentDidMount = () => {
    fetch("/admin")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          blogs: json
        });
      });
  };
  // getAll=()=>{
  //     axios.get(this.URL).then((response)=>{
  //         this.setState({
  //             blogs:response.data
  //         });
  //      });

  // }
}

export default Admin;
