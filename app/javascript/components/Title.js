import React from "react"
import PropTypes from "prop-types"
import titleimage from "../../assets/images/mochimochi.png"

class Title extends React.Component {
  render () {
    return (
      <div class ="title">
        <img src={titleimage} height="100" />
      </div>
    );
  }
}

export default Title
