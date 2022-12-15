import Statistics from "./Statistics"
import PropTypes from 'prop-types';



function StatisticsList({stats}) {
  
  <section class="statistics">
 
  <h2 class="title">Upload stats</h2>

    return(<ul class="stat-list">
    {stats.map(item => (
    <li key={item.id}>
        <Statistics 
        // title={"Upload stats"}      
      label={item.label}
      percentage={item.percentage}
    />
    </li>))}      
</ul>)

</section>
    

}

export default StatisticsList;
