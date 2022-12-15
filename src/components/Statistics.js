import PropTypes  from "prop-types";

const Statistics =(props) => {
    const {label, percentage}=props
    
    return (
      <div><span class="label">{label}</span>
      <span class="percentage">{percentage}</span></div>     


//         <section class="statistics">
//   {title && <h2 class="title">Upload stats</h2>}

//   {/* <ul class="stat-list"> */}
   
//       {/* <li class="item"> */}
//       <span class="label">{label}</span>
//       <span class="percentage">{percentage}</span>
//     {/* </li> */}
    
//     {/* <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li> */}
//   {/* </ul> */}
// </section>
    )

}

export default Statistics;