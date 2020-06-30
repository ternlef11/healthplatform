
import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {Card, CardImg} from 'react-bootstrap';
import slide_8 from '../ICR_BI_interview2_S.P.png-1.png';
import '../brcastyle.css';

export default class Slide8 extends Component {



  render() {
    return (
    <div className="slidezone">
      <Card className="justify-content-md-center" style={{ display: 'flex', flexDirection: 'row'}}>
        <CardImg className="slideformat" variant="top" src={slide_8} />
      </Card>
    </div>
    )
  }
}
