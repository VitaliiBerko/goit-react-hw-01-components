import PropTypes from "prop-types"

export const ContainerTitle =({title, children})=>{
    // console.log(children);
    return <>
    <section class="statistics">
  <h2 class="title">{title}</h2>
  {children}
  </section>
    </>

}


ContainerTitle.propTypes ={
    children: PropTypes.node.isRequired
}
