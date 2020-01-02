import React from "react"
import PropTypes from "prop-types"

class Home extends React.Component {
  render () {
    return (
      <div class="twitter">
          <a class="twitter-timeline" data-lang="ja" data-width="300" data-height="500" data-theme="dark" data-link-color="#E81C4F" href="https://twitter.com/mochopuyon?ref_src=twsrc%5Etfw">Tweets by mochopuyon</a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

      </div>
    );
  }
}

export default Home
