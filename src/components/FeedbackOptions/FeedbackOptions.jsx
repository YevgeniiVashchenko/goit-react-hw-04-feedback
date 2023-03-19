import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackButtons}>
      {options.map(key => {
        return (
          <button type="button" className={css.btn} key={key} onClick={onLeaveFeedback}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};