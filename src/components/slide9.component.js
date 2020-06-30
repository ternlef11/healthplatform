
import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {Card, CardImg} from 'react-bootstrap';
import slide_9 from '../ICR_BI_interview2_final.png-1.png';
import '../brcastyle.css';
import Confetti from 'react-confetti';


export default class Slide9 extends Component {


  render() {

    return (
    <div className="slidezone">
      <Card className="justify-content-md-center" style={{ display: 'flex', flexDirection: 'row'}}>
        <CardImg className="slideformat" variant="top" src={slide_9} />
            <Confetti
      width={1920}
      height={800}
    />
      </Card>
    </div>
    )
  }
}
