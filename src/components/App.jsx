import {useState} from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = e => {
    switch (e.target.textContent) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good ? Math.round((good * 100) / countTotalFeedback()) : 0;
  };

  
    return (
      <div>
        <section>
          <h1>Please leave feedback</h1>
          <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={handleBtnClick}
            />
        </section>
        <section>
          <h2>Statistics</h2>
            {countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
        </section>
      </div>
    );
  }

