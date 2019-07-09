import React from "react"
import { connect } from "react-redux"
import classes from "./Sidebar.module.css"

import SidebarItem from "./components/SidebarItem"

class Sidebar extends React.Component {
  componentDidMount = () => {
    if (window.innerWidth > 1200 && !this.props.sidebar.isSideBarVisible) {
      this.props.toggleSidebar()
    }
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount = () => {
    window.removeEventListener("resize")
  }

  handleResize = () => {
    if (window.innerWidth > 1200 && !this.props.sidebar.isSideBarVisible) {
      this.props.toggleSidebar()
    } else if (
      window.innerWidth <= 1200 &&
      this.props.sidebar.isSideBarVisible
    ) {
      this.props.toggleSidebar()
    }
  }

  render() {
    const visible = this.props.sidebar && this.props.sidebar.isSideBarVisible
    return (
      <>
        <div
          className={classes.modal}
          onClick={this.props.toggleSidebar}
          style={!visible ? { display: "none" } : null}
        />

        <div
          className={classes.Sidebar}
          style={!visible ? { display: "none" } : {}}
        >
          {this.userSpace()}

          <SidebarItem title="Dashboard" />
          <SidebarItem title="Manage Venue" />
          <SidebarItem title="Manage Coupon" />
          <SidebarItem title="Manage Booking" />
          <SidebarItem title="Payments" />
          <SidebarItem title="Bank Details" />
          <SidebarItem title="Support" />
        </div>
      </>
    )
  }

  userSpace = () => {
    const name = null

    return (
      <div
        style={{
          width: "100%",
          height: "110px",
          backgroundColor: "violet",
          marginBottom: "4px",

          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "white",
            margin: "10px",
            borderRadius: "40px"
          }}
        />
        <div
          style={{
            fontSize: "14px",
            fontWeight: "bolder",
            flexDirection: "column"
          }}
        >
          <div>Welcome,</div>
          <div>{name || "User"}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sidebar: state.sidebar
})

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch({ type: "TOGGLE_SIDEBAR" })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
