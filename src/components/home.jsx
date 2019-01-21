import React, { Component } from 'react';
import { Card, Button} from 'reactstrap';
import { Link } from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <div style={{background:'black',minHeight:'100vh'}}>
       <h1 style={{color:"white"}} className="text-center">Gallery</h1>
       <div>
      <Card style={{background:'#555',color:"#fff", margin:"15px" }} body className="text-center">
            <Link to={`/poster?p=1`} style={{textDecoration:"none",color:"#fff"}}>
              <Button>
                Go To Page 1
              </Button>
            </Link>
      </Card>
      <Card style={{background:'#555',color:"#fff", margin:"15px"  }}  body className="text-center">
            <Link to={`/poster?p=2`} style={{textDecoration:"none",color:"#fff"}}>
              <Button>
                Go To Page 2
              </Button>
            </Link>
      </Card>
      <Card style={{background:'#555',color:"#fff", margin:"15px"  }}  body className="text-center">
            <Link to={`/poster?p=3`} style={{textDecoration:"none",color:"#fff"}}>
              <Button>
                Go To Page 3
              </Button>
            </Link>
        </Card>
    </div>
      </div>
    );
  }
}

export default Home;
