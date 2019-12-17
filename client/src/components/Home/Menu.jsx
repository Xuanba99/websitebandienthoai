import React from 'react';
import {Link} from 'react-router-dom';
import { Icon, Button, Input, AutoComplete } from 'antd';
const { Option } = AutoComplete;
function onSelect(value) {
  console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          Found {item.query} on
          <a
            href={`https://s.taobao.com/search?q=${item.query}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.category}
          </a>
        </span>
        <span className="global-search-item-count">{item.count} results</span>
      </div>
    </Option>
  );
}
class Menu extends React.Component{
  state = {
    dataSource: [],
  };

  handleSearch = value => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  };

    render(){
      const { dataSource } = this.state;
        return(
          
            <div className="header">
              <div className="nameOfSite">
                <h2> <Link to="/">MOBILE KINGDOM</Link> </h2>
              </div>

              <div className="search">
                 <div className="global-search-wrapper" style={{ width: 300 }}>
                  <AutoComplete
                    className="global-search"
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={dataSource.map(renderOption)}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    placeholder="Nhập tên cần tìm.."
                    optionLabelProp="text"
                  >
                    <Input
                      suffix={
                        <Button
                          className="search-btn"
                          style={{ marginRight: -12 }}
                          size="large"
                          type="primary"
                        >
                          <Icon type="search" />
                        </Button>
                      }
                    />
                  </AutoComplete>
                </div>
              </div>
              <div className="main-menu">
                  
                  <ul className="menu">
                    <li><Link to="/">Trang chủ</Link></li>
                    <li>  <Link to="/cua-hang">Cửa hàng</Link>  </li>
                    <li>  <Link to="/gioi-thieu">Giới thiệu</Link> </li>
                    <li>  <Link to="/tin-tuc">Tin tức</Link>  </li>
                    <li><Link to="/lien-he">Liên hệ</Link> </li>
                    <li><Link to="/gio-hang"> <Icon className="shopping-cart" type="shopping-cart" /></Link> </li>
                    
                  </ul> 
              </div>
          </div>
        

        );
    }
}
export  default Menu;