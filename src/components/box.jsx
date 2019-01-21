// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button  } from 'reactstrap';
import React, { Component } from 'react';
// import poster from '../assets/poster1.jpg';

class Box extends Component {
  render() {
    // console.log("props",this.props);
    return (
        <div style={{margin:"0 15px"}}>
            <img width="100%" 
            src={ require ('../assets/'+this.props.url)}
            // src={poster}
            />
            <p style={{color:"white", fontSize:'14px',whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis'}}>{this.props.caption}</p>
        </div>
    );
  }
}

export default Box;