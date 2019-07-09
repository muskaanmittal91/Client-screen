import React from "react"
import classes from "./TopNavBar.module.css"
import { connect } from "react-redux"

class TopNavBar extends React.Component {
  render() {
    const logoLink =
      "https://diylogodesigns.com/wp-content/uploads/2016/04/london-summer-festival-event-logo-design.png"
    return (
      <div className={classes["fixed-top"]}>
        {/* Left */}
        <div className={classes.horizontalFlexLeft}>
          <div
            className={classes.toggleMenuIcon}
            onClick={this.props.toggleSidebar}
          >
            <i className="fas fa-bars" />
          </div>
          <div className={classes.logoWrapper}>
            <img src={logoLink} className={classes.logo} alt="Logo" />
          </div>
        </div>

        {/* Right */}
        <div className={classes.horizontalFlexRight}>
          <div className={classes.userBox} />
          <div className={classes.notifIcon}>
            <i className="fa fa-bell" aria-hidden="true">
            </i>
          </div>
          <div>(Logout Button)</div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch({ type: "TOGGLE_SIDEBAR" })
})

export default connect(
  null,
  mapDispatchToProps
)(TopNavBar)
