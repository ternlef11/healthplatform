import React, { Component } from 'react';
import axios from 'axios';
import {Row, Container, Col} from 'react-bootstrap';

export default class GenContext extends Component {
constructor(props) {
    super(props);

    this.state = {
      appContext:'',
      genEmail:'',
      genPhone:'',
      genLocation:'',
      curContext:[],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/genContext/')
      .then(response=>{
        if (response.data.length>0) {
          this.setState({
            curContext: response.data.map(finduser=>finduser)
          })
          for (var i = 0; i<this.state.curContext.length;i++){
          //console.log(this.state.curContext[i]);
          this.setState({
            appContext:this.state.curContext[i].appContext,
            genEmail:this.state.curContext[i].genEmail,
            genPhone:this.state.curContext[i].genPhone,
            genLocation:this.state.curContext[i].genLocation
        })
        }
        }}
          )
    }



  render() {
    return (
<Container className="generalDetail">
  <Row className="justify-content-md-center">
    <Col><p className='contextstyle'>{this.state.appContext}</p></Col>
  </Row>
  <Row>
    <Col><p className='genContact'>{this.state.genEmail}</p></Col>
    <Col><p className='genContact'>{this.state.genPhone}</p></Col>
    <Col><p className='genContact'>{this.state.genLocation}</p></Col>
  </Row>
</Container>
    );
  }
}

