import React from "react"
import classes from "./DashBoardBody.module.css"
import { connect } from "react-redux"
import Sidebar from "./Sidebar"

class DashBoardBody extends React.Component {
  render() {
    const isSidebarOpen =
      this.props.sidebar && this.props.sidebar.isSideBarVisible
    return (
      <div className={classes.dashboardBody}>
        <Sidebar />
        <div
          className={classes.innerBody}
          style={isSidebarOpen ? { width: "calc(100vw - 250px)" } : null}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sidebar: state.sidebar
})
export default connect(mapStateToProps)(DashBoardBody)
