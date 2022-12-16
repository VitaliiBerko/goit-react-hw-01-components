import PropTypes  from "prop-types";

const Statistics =(props) => {
    const {label, percentage}=props
    
    return (
      <><span class="label">{label}</span>
      <span class="percentage">{percentage}</span></> 
    )

}

export default Statistics;


Statistics.propTypes ={
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}