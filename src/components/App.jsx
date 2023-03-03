import {Component} from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = e => {
    this.setState(prevState => {
      let newState = { ...prevState };
      for (const key in newState) {
        if (key === e.target.textContent) {
          newState[key] += 1;
        }
      }
      return newState;
    });
  };

  countTotalFeedback() {
    let value = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);

    return value;
  }

  countPositiveFeedbackPercentage() {
    let value = 0;

    if (!this.state.good) {
      return 0;
    }

    value = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);

    return Math.round((this.state.good * 100) / value);
  }

  render() {
    return (
      <div>
        <section>
          <h1>Please leave feedback</h1>
          <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleBtnClick}
            />
        </section>
        <section>
          <h2>Statistics</h2>
            {this.countTotalFeedback() ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
        </section>
      </div>
    );
  }
}

