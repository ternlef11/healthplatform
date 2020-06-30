import React, { Component } from 'react';
import axios from 'axios';
import {Card, ListGroup, ListGroupItem, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class StudyCards extends Component {
constructor(props) {
    super(props);

    this.state = {
      wholedb:[],
      study1:[],
      study2:[],
      study3:[],
      study4:[],
      study5:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/contentM/')
      .then(response=>{
        if (response.data.length>0)   {
          this.setState({
            wholedb: response.data.map(finduser=>finduser)
          })
        }
        for (var i = 0; i<this.state.wholedb.length;i++){
          if (this.state.wholedb[i].cardNum==="1") {
            this.setState({
                study1:this.state.wholedb[i]})}
            if (this.state.wholedb[i].cardNum==="2") {
              this.setState({
                study2:this.state.wholedb[i]})}
            if (this.state.wholedb[i].cardNum==="3") {
              this.setState({
                study3:this.state.wholedb[i]})}
            if (this.state.wholedb[i].cardNum==="4") {
              this.setState({
                study4:this.state.wholedb[i]})}

            }})}


  render() {
    return (
<Container className='frontCards'>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{this.state.study1.studyName}</Card.Title>
    <Card.Text>
      {this.state.study1.studyContextBrief}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Deadline: {String(this.state.study1.participationDeadline).slice(8,10)+'.'+String(this.state.study1.participationDeadline).slice(5,7)+'.'+String(this.state.study1.participationDeadline).slice(0,4)}</ListGroupItem>
    <ListGroupItem>{String(this.state.study1.studyStart).slice(8,10)+'.'+String(this.state.study1.studyStart).slice(5,7)+'.'+String(this.state.study1.studyStart).slice(0,4)} to {String(this.state.study1.studyEnd).slice(8,10)+'.'+String(this.state.study1.studyEnd).slice(5,7)+'.'+String(this.state.study1.studyEnd).slice(0,4)}</ListGroupItem>
    <ListGroupItem>Location: {this.state.study1.studyLocation}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Link to="/BRCA01" className="nav-link">BRCA01 register</Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{this.state.study2.studyName}</Card.Title>
    <Card.Text>
      {this.state.study2.studyContextBrief}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Deadline: {String(this.state.study2.participationDeadline).slice(8,10)+'.'+String(this.state.study2.participationDeadline).slice(5,7)+'.'+String(this.state.study2.participationDeadline).slice(0,4)}</ListGroupItem>
    <ListGroupItem>{String(this.state.study2.studyStart).slice(8,10)+'.'+String(this.state.study2.studyStart).slice(5,7)+'.'+String(this.state.study2.studyStart).slice(0,4)} to {String(this.state.study2.studyEnd).slice(8,10)+'.'+String(this.state.study2.studyEnd).slice(5,7)+'.'+String(this.state.study2.studyEnd).slice(0,4)}</ListGroupItem>
    <ListGroupItem>Location: {this.state.study2.studyLocation}</ListGroupItem>
  </ListGroup>
  <Card.Body>
   <Link to="/BRCA01" className="nav-link">BRCA02 register</Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{this.state.study3.studyName}</Card.Title>
    <Card.Text>
      {this.state.study3.studyContextBrief}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Deadline: {String(this.state.study3.participationDeadline).slice(8,10)+'.'+String(this.state.study3.participationDeadline).slice(5,7)+'.'+String(this.state.study3.participationDeadline).slice(0,4)}</ListGroupItem>
    <ListGroupItem>{String(this.state.study3.studyStart).slice(8,10)+'.'+String(this.state.study3.studyStart).slice(5,7)+'.'+String(this.state.study3.studyStart).slice(0,4)} to {String(this.state.study3.studyEnd).slice(8,10)+'.'+String(this.state.study3.studyEnd).slice(5,7)+'.'+String(this.state.study3.studyEnd).slice(0,4)}</ListGroupItem>
    <ListGroupItem>Location: {this.state.study3.studyLocation}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Link to="/BRCA01" className="nav-link">BRCA03 register</Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{this.state.study4.studyName}</Card.Title>
    <Card.Text>
      {this.state.study4.studyContextBrief}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Deadline: {String(this.state.study4.participationDeadline).slice(8,10)+'.'+String(this.state.study4.participationDeadline).slice(5,7)+'.'+String(this.state.study4.participationDeadline).slice(0,4)}</ListGroupItem>
    <ListGroupItem>{String(this.state.study4.studyStart).slice(8,10)+'.'+String(this.state.study4.studyStart).slice(5,7)+'.'+String(this.state.study4.studyStart).slice(0,4)} to {String(this.state.study4.studyEnd).slice(8,10)+'.'+String(this.state.study4.studyEnd).slice(5,7)+'.'+String(this.state.study4.studyEnd).slice(0,4)}</ListGroupItem>
    <ListGroupItem>Location: {this.state.study1.studyLocation}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Link to="/BRCA01" className="nav-link">BRCA04 register</Link>
  </Card.Body>
</Card>
</Container>

    );
  }
}

