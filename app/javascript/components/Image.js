import React from "react"
import PropTypes from "prop-types"
import image from "../../assets/images/header.png"

class Image extends React.Component {
  render () {
    return (
      <div class="wallpaper">
          <img src={image} height="400" />
          </div>
    );
  }
}

export default Image
