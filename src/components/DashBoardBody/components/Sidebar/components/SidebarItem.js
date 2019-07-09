import React from "react"
import { connect } from "react-redux"
import { changeBody } from "../../actions"
import classes from "./SidebarItem.module.css"

class SidebarItem extends React.Component {
  render() {
    const { title, imageClass, children } = this.props

    return (
      <div
        className={classes.SideBarItem}
        style={title || imageClass || children ? {} : { borderLeft: "0px" }}
      >
        {imageClass && !children ? <i className={imageClass} aria-hidden="true" /> : null}
        {title && !children ? <div> {title} </div> : null}
        {children}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  changeBody: body => dispatch(changeBody(body))
})

export default connect(
  null,
  mapDispatchToProps
)(SidebarItem)
