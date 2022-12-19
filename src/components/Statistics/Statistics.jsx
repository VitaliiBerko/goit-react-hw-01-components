import PropTypes from 'prop-types';
import s from 'components/Statistics/statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            style={{ backgroundColor: getRandomHexColor() }}
            key={id}
          >
            <>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.proppTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
