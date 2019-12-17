import React from 'react';
class Addblog extends React.Component{
    render(){
        return(
            <form action="/" method="POST" role="form" encType="multipart/form-data">
            <table>
                    
                <tr>
                    <td>Name</td>
                    <td><input type="text" name="txtName" /></td>           
                </tr>
                <tr>
                    <td>Content</td>
                    <td><input type="text"   name="txtContent" /></td>
                </tr>
                <tr>
                    <td>Image</td>
                    <td><input type="file"  name="fileImage"  /></td>
                </tr>
                <tr>
                    <td> </td>
                    <td><input type="submit" value="Add new"  /></td>
                </tr>
            </table>          
        </form>
        );
    }
}
export default Addblog;