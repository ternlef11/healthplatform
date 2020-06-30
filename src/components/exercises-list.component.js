
import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class searchUser extends Component {
  constructor(props) {
    super(props);
    this.searchUserID = this.searchUserID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user_id:'N/A',
      user_email:'N/A',
      first_name:'N/A',
      last_name:'N/A',
      user_address:'N/A',
      user_phone:'N/A',
      demographic:'N/A',
      epidemiological:'N/A',
      history:'N/A',
      comments:'N/A',
      firstConsultation:'N/A',
      consent:'N/A',
      participatedb:[],
      register_list: [],
      userdb:[],
      foundrow: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/registers/')
      .then(response=>{
        if (response.data.length>0) {
          this.setState({
            userdb: response.data.map(finduser=>finduser),
            register_list: response.data.map(finduser=>finduser.user_id),
            user_id: response.data[0].user_id,
          })
      }
    })

    }

  searchUserID(e) {
    this.setState({
      user_id: e.target.value
    })
  }
onSubmit(e) {
    e.preventDefault();
    this.searcherIDdet = {
      user_id: this.state.user_id,
    }

axios.get('http://localhost:5000/BRCA01/')
      .then(response=>{
        if (response.data.length>0) {
          this.setState({
            participatedb: response.data.map(newstuff=>newstuff),
          })
        }
      })

    for (var x = 0; x<this.state.participatedb.length;x++){
      if (this.state.participatedb[x].user_id===this.searcherIDdet.user_id){
        if (this.state.participatedb[x].consent==='true'){
          this.setState({
            demographic:this.state.participatedb[x].demographic,
            epidemiological:this.state.participatedb[x].epidemiological,
            history:this.state.participatedb[x].history,
            comments:this.state.participatedb[x].comments,
            firstConsultation:this.state.participatedb[x].firstConsultation,
            consent:this.state.participatedb[x].consent
        })
      }break
  }else{
        this.setState({
            demographic:'N/A',
            epidemiological:'N/A',
            history:'N/A',
            comments:'N/A',
            firstConsultation:'N/A',
            consent: 'false'

      }
    )}
}

    for (var i = 0; i<this.state.userdb.length;i++){
      if (this.state.userdb[i].user_id===this.searcherIDdet.user_id){
        this.setState({
          first_name:this.state.userdb[i].first_name,
          last_name:this.state.userdb[i].last_name,
          user_email:this.state.userdb[i].user_email,
          user_address:this.state.userdb[i].user_address,
          user_phone:this.state.userdb[i].user_phone
      })
      this.forceUpdate()
    }
  }
}
    //window.location = '/';

  render() {
    return (
    <div className='registerorganise'>
      <h3>Participant Details</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.user_id}
              onChange={this.searchUserID}
              >
              {
                this.state.register_list.map(function(finduser) {
                  return <option
                    key={finduser}
                    value={finduser}>{finduser}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <input type="submit" value="Participant info" className="btn btn-primary" />
        </div>
      </form>
      <div>
      <h2><u>Email:</u> {this.state.user_email}</h2>
      <h2><u>First name:</u> {this.state.first_name}</h2>
      <h2><u>Last name:</u> {this.state.last_name}</h2>
      <h2><u>Address:</u> {this.state.user_address}</h2>
      <h2><u>Phone:</u> {this.state.user_phone}</h2>
      <h2><u>Consent:</u> {this.state.consent}</h2>
      <h2><u>Demographic:</u> {this.state.demographic}</h2>
      <h2><u>History:</u> {this.state.history}</h2>
      <h2><u>Epidemiological:</u> {this.state.epidemiological}</h2>
      <h2><u>Comments:</u> {this.state.comments}</h2>
      <h2><u>First consulation:</u> {this.state.firstConsultation}</h2>
      </div>
    </div>
    )
  }
}
