import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
    <BrowserRouter>
      <div class="header-contents-wrapper">
       <ul>
        <li><Link to='/'>ホーム</Link></li>
        <li><Link to='/posts/introduction'>自己紹介</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Home</Link></li>
       </ul>



       <Route exact path='/' />
       <Route path='/posts/introduction' />
      </div>



    </BrowserRouter>
    );
  }
}

export default Header
