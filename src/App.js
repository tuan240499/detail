import React from 'react';
import './App.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';

class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Iphone 11",
        "src": [
            "https://pngimg.com/uploads/iphone_11/iphone_11_PNG14.png",
            "https://pngimg.com/uploads/iphone_11/iphone_11_PNG19.png",
            "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-11-red-back.png?v=11",
            "https://pngimg.com/uploads/iphone_11/iphone_11_PNG20.png"
          ],
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 23,
        "colors":["violet","black","red","white"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;
