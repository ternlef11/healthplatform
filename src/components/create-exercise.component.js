
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Row, Container, Col} from 'react-bootstrap';

export default class CreateBRCA01 extends Component {
  constructor(props) {
    super(props);

    this.onChangeID = this.onChangeID.bind(this);
    this.onChangeDemographic = this.onChangeDemographic.bind(this);
    this.onChangeEpidemiological = this.onChangeEpidemiological.bind(this);
    this.onChangeHistory = this.onChangeHistory.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.onChangeConsent = this.onChangeConsent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      role:'',
      user_id:'',
      demographic: '',
      epidemiological: '',
      history: '',
      firstConsultation: new Date(),
      comments:'',
      consent: false,
      trial3: [],
      thestudy:[],
      study1:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/registers/')
      .then(response=>{
        if (response.data.length>0) {
          this.setState({
            trial3: response.data.map(idfind=>idfind.user_id),
            user_id: response.data[0].user_id
          })
      }
    })
    axios.get('http://localhost:5000/contentM/')
      .then(response=>{
        if (response.data.length>0) {
          this.setState({
            thestudy: response.data.map(alldet=>alldet)
          })
      }
      for (var i = 0; i<this.state.thestudy.length;i++){
          if (this.state.thestudy[i].cardNum==="1") {
            this.setState({
                study1:this.state.thestudy[i]})}
    }})
  }

  onChangeID(e) {
    this.setState({
      user_id: e.target.value
    })
  }

  onChangeDemographic(e) {
    this.setState({
      demographic: e.target.value
    })
  }

  onChangeEpidemiological(e) {
    this.setState({
      epidemiological: e.target.value
    })
  }

  onChangeHistory(e) {
    this.setState({
      history: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onChangeComments(e) {
    this.setState({
      comments: e.target.value
    })
  }

  onChangeConsent(e) {
    this.setState(prevState=>({
      consent: !prevState.consent
    })
  )}

  onSubmit(e) {
    e.preventDefault();
    const BRCA01det = {
      role: 'participant',
      user_id: this.state.user_id,
      demographic: this.state.demographic,
      epidemiological: this.state.epidemiological,
      history: this.state.history,
      comments: this.state.comments,
      firstConsultation: this.state.date,
      consent: this.state.consent
    }

    console.log(BRCA01det);

    axios.post('http://localhost:5000/BRCA01/add', BRCA01det)
      .then(res => console.log(res.data));

    //window.location = '/';
  }

  render() {
    return (
    <div className='registerorganise'>
      <h3>BRCA01 Study Details</h3>
      <Container className="studyDetail">
        <Row className="justify-content-md-center">
          <Col><p className='contextstyle'>{this.state.study1.studyContext}</p></Col>
        </Row>
        <Row>
          <Col>{this.state.study1.studyEmail}</Col>
          <Col>{this.state.study1.studyContactNumber}</Col>
          <Col>{this.state.study1.studyLocation}</Col>
          <Col>{this.state.study1.studyDocument1}</Col>
          <Col>{this.state.study1.studyDocument2}</Col>
        </Row>
      </Container>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.user_id}
              onChange={this.onChangeID}>
              {
                this.state.trial3.map(function(idcheck) {
                  return <option
                    key={idcheck}
                    value={idcheck}>{idcheck}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>Demographic: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.demographic}
              onChange={this.onChangeDemographic}
              />
        </div>
        <div className="form-group">
          <label>Epidemiological: </label>
          <input
              type="text"
              className="form-control"
              value={this.state.epidemiological}
              onChange={this.onChangeEpidemiological}
              />
        </div>
        <div className="form-group">
          <label>History: </label>
          <input
              type="text"
              className="form-control"
              value={this.state.history}
              onChange={this.onChangeHistory}
              />
        </div>
        <div className="form-group">
          <label>Comments: </label>
          <input
              type="text"
              className="form-control"
              value={this.state.comments}
              onChange={this.onChangeComments}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <div className="form-group">
          <label> Consent: </label>
          <input type="checkbox"
          className="form-control"
          value={this.state.consent}
          onChange = {this.onChangeConsent}
          />
          <div>

          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Participate in study" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
