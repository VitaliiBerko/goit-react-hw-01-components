import PropTypes  from "prop-types";

const Statistics =(props) => {
    const {title, stats} = props
    return (
        <section class="statistics">
  {title && <h2 class="title">Upload stats</h2>}

  <ul class="stat-list">
    <li class="item">
      <span class="label">{stats.label}</span>
      <span class="percentage">{stats.percentage}</span>
    </li>
    {/* <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li> */}
  </ul>
</section>
    )

}

export default Statistics;