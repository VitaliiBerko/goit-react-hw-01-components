import Statistics from './Statistics';
import PropTypes from 'prop-types';

function StatisticsList({ stats }) {
  // console.log(stats);
  return (
    <ul class="stat-list">
      {stats.map(item => (
        <li key={item.id}>
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

export default StatisticsList;

StatisticsList.proppTypes ={
  stats: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number
    }
  ))
}
