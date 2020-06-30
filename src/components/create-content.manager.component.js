import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateContentM extends Component {
  constructor(props) {
    super(props);

    this.onChangeContext = this.onChangeContext.bind(this);
    this.ongenEmail = this.ongenEmail.bind(this);
    this.ongenPhone = this.ongenPhone.bind(this);
    this.ongenLocation = this.ongenLocation.bind(this);

    this.onChangecardNum = this.onChangecardNum.bind(this);
    this.onstudyName = this.onstudyName.bind(this);
    this.onparticipationDeadline = this.onparticipationDeadline.bind(this);
    this.onstudyStart = this.onstudyStart.bind(this);
    this.onstudyEnd = this.onstudyEnd.bind(this);
    this.onstudyContextBrief = this.onstudyContextBrief.bind(this);
    this.onstudyContext = this.onstudyContext.bind(this);
    this.onstudyLocation = this.onstudyLocation.bind(this);
    this.onstudyAffiliates = this.onstudyAffiliates.bind(this);
    this.onstudyEmail = this.onstudyEmail.bind(this);
    this.onstudyContactNumber = this.onstudyContactNumber.bind(this);
    this.onstudyDocument1 = this.onstudyDocument1.bind(this);
    this.onstudyDocument2 = this.onstudyDocument2.bind(this);
    this.onstudyDocument3 = this.onstudyDocument3.bind(this);
    this.onstudyDocument4 = this.onstudyDocument4.bind(this);
    this.onstudyDocument5 = this.onstudyDocument5.bind(this);

    this.onSubmitgen = this.onSubmitgen.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      appContext:'',
      genEmail:'',
      genPhone:'',
      genLocation:'',
      curContext:[],
      cardNum:'1',
      studyName: '',
      participationDeadline: new Date(),
      studyStart: new Date(),
      studyEnd: new Date(),
      studyContextBrief:'',
      studyContext:'',
      studyLocation: '',
      studyAffiliates:'',
      studyEmail:'',
      studyContactNumber:'',
      studyDocument1:'',
      studyDocument2: '',
      studyDocument3:'',
      studyDocument4: '',
      studyDocument5:'',
      contentM_new: [],
      useriddel:[]
    }
  }

componentDidMount() {
    axios.get('http://localhost:5000/genContext/')
      .then(response=>{
        if (response.data.length>0) {
          this.setState({
            curContext: response.data.map(finduser=>finduser)
          })
          }
        }
        )
        for (var i = 0; i<this.state.curContext.length;i++){
        this.setState({
          appContext:this.state.curContext[i].appContext,
          genEmail:this.state.curContext[i].genEmail,
          genPhone:this.state.curContext[i].genPhone,
          genLocation:this.state.curContext[i].genLocation
        })
      }
      axios.get('http://localhost:5000/contentM/')
      .then(response=>{
        if (response.data.length>0) {
          this.setState({
            contentM_new: response.data.map(allstuff=>allstuff)
    }
    )
    }
  }
  )
    }



  onChangeContext(e) {
    this.setState({
      appContext: e.target.value
    })
  }

    ongenEmail(e) {
    this.setState({
      genEmail: e.target.value
    })
  }

    ongenPhone(e) {
    this.setState({
      genPhone: e.target.value
    })
  }

    ongenLocation(e) {
    this.setState({
      genLocation: e.target.value
    })
  }

  onChangecardNum(e) {
    this.setState({
      cardNum: e.target.value
    })
  }

  onstudyName(e) {
    this.setState({
      studyName: e.target.value
    })
  }


  onparticipationDeadline(date) {
    this.setState({
      participationDeadline: date
    })
  }

    onstudyStart(date) {
    this.setState({
      studyStart: date
    })
  }

    onstudyEnd(date) {
    this.setState({
      studyEnd: date
    })
  }

  onstudyContextBrief(e) {
    this.setState({
      studyContextBrief: e.target.value
    })
  }

  onstudyContext(e) {
    this.setState({
      studyContext: e.target.value
    })
  }

  onstudyLocation(e) {
    this.setState({
      studyLocation: e.target.value
    })
  }

  onstudyAffiliates(e) {
    this.setState({
      studyAffiliates: e.target.value
    })
  }

  onstudyEmail(e) {
    this.setState({
      studyEmail: e.target.value
    })
  }

  onstudyContactNumber(e) {
    this.setState({
      studyContactNumber: e.target.value
    })
  }

  onstudyDocument1(e) {
    this.setState({
      studyDocument1: e.target.value
    })
  }

  onstudyDocument2(e) {
    this.setState({
      studyDocument2: e.target.value
    })
  }

  onstudyDocument3(e) {
    this.setState({
      studyDocument3: e.target.value
    })
  }

  onstudyDocument4(e) {
    this.setState({
      studyDocument4: e.target.value
    })
  }

  onstudyDocument5(e) {
    this.setState({
      studyDocument5: e.target.value
    })
  }


  onSubmitgen(e) {
    e.preventDefault();

    const genContextdet = {
      appContext: this.state.appContext,
      genEmail: this.state.genEmail,
      genPhone: this.state.genPhone,
      genLocation: this.state.genLocation,
    }


    axios.delete('http://localhost:5000/genContext/delete');

    axios.post('http://localhost:5000/genContext/add', genContextdet)
      .then(res => console.log(res.data));this.forceUpdate();

    //window.location = '/';
  }

    onSubmit(e) {
    e.preventDefault();

    const contentMdet = {
      cardNum: this.state.cardNum,
      studyName: this.state.studyName,
      participationDeadline: this.state.participationDeadline,
      studyStart: this.state.studyStart,
      studyEnd: this.state.studyEnd,
      studyContextBrief: this.state.studyContextBrief,
      studyContext: this.state.studyContext,
      studyLocation: this.state.studyLocation,
      studyAffiliates: this.state.studyAffiliates,
      studyEmail: this.state.studyEmail,
      studyContactNumber: this.state.studyContactNumber,
      studyDocument1: this.state.studyDocument1,
      studyDocument2: this.state.studyDocument2,
      studyDocument3: this.state.studyDocument3,
      studyDocument4: this.state.studyDocument4,
      studyDocument5: this.state.studyDocument5
    };

        for (var i = 0; i<this.state.contentM_new.length;i++){
          if (this.state.contentM_new[i].cardNum===contentMdet.cardNum){
            this.state.useriddel.push(this.state.contentM_new[i]._id)
      }}


      for (var y = 0; y<this.state.useriddel.length;y++){
        axios.delete('http://localhost:5000/contentM/'+this.state.useriddel[y])
        .then(response => { console.log(response.data)})};



    axios.post('http://localhost:5000/contentM/add', contentMdet)
      .then(res => console.log(res.data));


    //window.location = '/';
  }

  render() {
    return (
    <div className='registerorganise'>
      <h3>BRCA01-DIRECT Content Manager</h3>
      <form onSubmit={this.onSubmitgen}>
      <div className="form-group">
        <label>Platform description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.appContext}
              onChange={this.onChangeContext}
              />
        </div>
        <div className="form-group">
        <label>General Email: </label>
          <input  type="email"
              required
              className="form-control"
              value={this.state.genEmail}
              onChange={this.ongenEmail}
              />
        </div>
        <div className="form-group">
        <label>General Phone: </label>
          <input  type="number"
              required
              className="form-control"
              value={this.state.genPhone}
              onChange={this.ongenPhone}
              />
        </div>
        <div className="form-group">
        <label>General Location: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.genLocation}
              onChange={this.ongenLocation}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Update General Context" className="btn btn-primary" />
        </div>
      </form>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Card: </label>
          <select ref="userInput" required className="form-control" value={this.state.cardNum} onChange={this.onChangecardNum}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className="form-group">
          <label>Study name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.studyName}
              onChange={this.onstudyName}
              />
        </div>
        <div className="form-group">
          <label>Participation deadline: </label>
          <div>
            <DatePicker
              selected={this.state.participationDeadline}
              onChange={this.onparticipationDeadline}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Study start: </label>
          <div>
            <DatePicker
              selected={this.state.studyStart}
              onChange={this.onstudyStart}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Study end: </label>
          <div>
            <DatePicker
              selected={this.state.studyEnd}
              onChange={this.onstudyEnd}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Brief study context: </label>
          <input
              type="text"
              className="form-control"
              value={this.state.studyContextBrief}
              onChange={this.onstudyContextBrief}
              />
        </div>
        <div className="form-group">
          <label>Study context: </label>
          <input
              type="text"
              className="form-control"
              value={this.state.studyContext}
              onChange={this.onstudyContext}
              />
        </div>
        <div className="form-group">
          <label>Study location: </label>
          <input
              type="text"
              className="form-control"
              value={this.state.studyLocation}
              onChange={this.onstudyLocation}
              />
        </div>
        <div className="form-group">
          <label>Study affiliates:</label>
          <input
              type="text"
              className="form-control"
              value={this.state.studyAffiliates}
              onChange={this.onstudyAffiliates}
              />
        </div>
        <div className="form-group">
          <label>Study Email:</label>
          <input
              type="email"
              className="form-control"
              value={this.state.studyEmail}
              onChange={this.onstudyEmail}
              />
        </div>
        <div className="form-group">
          <label>Study Phone:</label>
          <input
              type="number"
              className="form-control"
              value={this.state.studyContactNumber}
              onChange={this.onstudyContactNumber}
              />
        </div>
        <div className="form-group">
          <label>Document 1:</label>
          <input
              type="file"
              className="form-control"
              value={this.state.studyDocument1}
              onChange={this.onstudyDocument1}
              />
        </div>
        <div className="form-group">
          <label>Document 2:</label>
          <input
              type="file"
              className="form-control"
              value={this.state.studyDocument2}
              onChange={this.onstudyDocument2}
              />
        </div>
        <div className="form-group">
          <label>Document 3:</label>
          <input
              type="file"
              className="form-control"
              value={this.state.studyDocument3}
              onChange={this.onstudyDocument3}
              />
        </div>
        <div className="form-group">
          <label>Document 4:</label>
          <input
              type="file"
              className="form-control"
              value={this.state.studyDocument4}
              onChange={this.onstudyDocument4}
              />
        </div>
        <div className="form-group">
          <label>Document 5:</label>
          <input
              type="file"
              className="form-control"
              value={this.state.studyDocument5}
              onChange={this.onstudyDocument5}
              />
        </div>


        <div className="form-group">
          <input type="submit" value="Update content" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
