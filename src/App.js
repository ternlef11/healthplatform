import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardImg} from 'react-bootstrap';
import ICRlogo from './ICRlogo.png';
import CGCVlogo from './CanGeneCanVar.png';
import CRUlogo from './CanResUK.png';
import './brcastyle.css';

import Navbar from "./components/navbar.component";
import StudyCards from "./components/studycontext.component";
import GenContext from "./components/gencontext.component";

import ExercisesList from "./components/exercises-list.component";
import CreateBRCA01 from "./components/create-exercise.component";
import CreateRegister from "./components/create-user.component";
import ContentManage from "./components/create-content.manager.component";
import Slide8 from "./components/slide8.component";
import Slide9 from "./components/slide9.component";

function App() {
  return (
    <Router>
    <Navbar />
      <div className='manipulateFront'>

        <Card className="justify-content-md-center" style={{ display: 'flex', flexDirection: 'row'}}>
        <CardImg style={{ width: '18rem', height:'4rem'}} variant="top" src={ICRlogo} />
        <CardImg style={{ width: '15rem', height:'6rem'}} variant="top" src={CGCVlogo} />
        <CardImg style={{ width: '16rem', height:'6rem'}} variant="top" src={CRUlogo} />
        </Card>
        <div className='title_context_study_cont'>
          <div className='title_cont'>
            <div className='title_act'>
              <h1 className='title'>BRCA-DIRECT</h1>
            </div>
          </div>
          <GenContext />
        </div>
        <br/>
        <StudyCards />
      </div>
        <br/>
        <Route path="/excercise" exact component={ExercisesList} />
        <Route path="/BRCA01" component={CreateBRCA01} />
        <Route path="/register" component={CreateRegister} />
        <Route path="/contentM" component={ContentManage} />
        <Route path="/slide8" component={Slide8} />
        <Route path="/slide9" component={Slide9} />
    </Router>
  );
}

export default App;
