import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react';
import Box from './box';
import { Link } from 'react-router-dom';

class Poster extends Component {
  constructor(props) {
    super(props);
    this.state = {posters: []};
  }
  componentDidMount() {
    var data = require('../JSON/page'+this.props.location.search.split('p=')[1]+'.json'); 
    // console.log("props:",data.page['content-items'].content);
    var c=1,temp=[];
    for(var i of data.page['content-items'].content){
      temp.push(i);
      if(c%3==0){
        this.state.posters.push([...temp]);
        temp=[];
      }
      c++;
    }
    this.setState({title:data.page.title,posters:this.state.posters});
    console.log('title:',data.page);
    
  }
  
  render() {
    console.log("tet",this.state.posters);
    return (
      <div style={{padding:"0 15px", background:"#000", minHeight:"100vh"}}>
        <Container>
          <div>
           <img width="100%" style={{position: 'fixed', top:0,zIndex: 100}}  src={ require ('../assets/nav_bar.png')}/>
          </div>
          <div style={{position:"relative",height:'75px', color:'white', zIndex:150}}>
          <p>
          <Link to={`/`} style={{textDecoration:"none"}}>
          <img width="20px" style={{display:"inline-block", paddingBottom:"10px"}} src={require ('../assets/Back.png')}/>
          </Link> 
            <span style={{fontSize:"25px", display:"inline-block",padding:"15px 0 0 15px"}}>{this.state.title}</span>
          </p>
          </div>
        {this.state.posters.map((poster)=>{
          // debugger;
      return <Row>
              <Col xs="4" style={{padding:0}}>
                {poster.length>0 && <Box caption={poster[0]['name']} url={poster[0]['poster-image']}/>}

                 
              </Col>
              <Col xs="4" style={{padding:0}}>
                {poster.length>1 && <Box caption={poster[1]['name']} url={poster[1]['poster-image']}/>}
              </Col>
              <Col xs="4" style={{padding:0}}>
                {poster.length>2 && <Box caption={poster[2]['name']} url={poster[2]['poster-image']}/>}
              </Col>
            </Row>
  })}
      </Container>
      </div>
    );
  }
}

export default Poster;