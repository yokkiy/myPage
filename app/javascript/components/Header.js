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



       <Route exact path='/' component={Home}/>
       <Route path='/posts/introduction' component={Introduction}/>
      </div>



    </BrowserRouter>
    );
  }
}

function Home(){
return(

  <body>
      <a class="twitter-timeline" data-lang="ja" data-width="300" data-height="500" data-theme="dark" data-link-color="#E81C4F" href="https://twitter.com/mochopuyon?ref_src=twsrc%5Etfw">Tweets by mochopuyon</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  </body>

);


}

function Introduction(){
 return(
  <div class="Introduction">
      <p>自己紹介ページです</p>
  </div>
);
}

export default Header
