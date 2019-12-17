import React from 'react';
import { Icon } from 'antd';
class Advertise extends React.Component{
    
    
    render(){
        var advertise = this.props.advertise;
        var isLoaded = this.props.isLoaded;
        if(!isLoaded){
            return <div>Loading <Icon type="loading" /></div>
        }else{
            return(
                <div>
                    {advertise.slice(advertise.length-1,advertise.length).map(adv =>(
                        <div key={adv._id}>
                        <img src={`data:image/png;base64,${adv.image}`}  alt="quảng cáo xe cub"/>
                        </div>
                        
                    ))}
                    
                </div>
    
    
            );

        }
        
    }
}
export default Advertise;