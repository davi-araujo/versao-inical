import React, { Component } from 'react';
import styles from './Stopwatch.module.css';
import Button from '../Button';

export default class Stopwatch extends Component {
  state = {
    isRunning: false,
    mm: 0,
    ss: 0,
    ms: 0
  };

  timerID = 0;

  clickHandler = () => {
    let {isRunning} = this.state;
    if (isRunning) {
      // Running => Stop
      clearInterval(this.timerID);
    } else {
      // Stop => Running
      let {mm, ss, ms} = this.state;

      this.timerID = setInterval(() => {
        ms++;
        if (ms >= 100) {
          ss++;
          ms = 0;
        }
        if (ss >= 60) {
          mm++;
          ss = 0;
        }
        this.setState({ mm, ss, ms });
      }, 10);
    }
    this.setState({ isRunning: !isRunning });
  }

  // 1 => 01
  format(num) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  render() {
    return (
      <div className={styles.stop_watch}>
        <div>        
          <span>{this.format(this.state.mm)}</span>:
          <span>{this.format(this.state.ss)}</span>:
          <span>{this.format(this.state.ms)}</span>
        </div>
        <Button className={styles.control}  
          type={"medium"}
          onClick={this.clickHandler}>
          {this.state.isRunning ? 'Pausar pomodoro' : 'Iniciar pomodoro'}
        </Button>
      </div>
    );
  }
}
