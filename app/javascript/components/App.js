import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Image from "./Image"
import TitleImage from "./Title"
import Home from "./Home"
import Introduction from "./Introduction"
import Index from "./Index"
import Blog from "./Blog"

class App extends React.Component {

  render () {
    return (
    <BrowserRouter>

      <div class="header-contents-wrapper">
        <TitleImage/>
       <ul>
        <li><Link to='/'>ホーム</Link></li>
        <li><Link to='/posts/introduction' >自己紹介</Link></li>
        <li><a href="https://twitter.com/mochopuyon/">Twitter</a></li>
        <li><a href='https://www.pixiv.net/member.php?id=33824198'>pixiv</a></li>
        <li><Link to='/posts/index' >ご意見</Link></li>
        <li><Link to='/posts/blog' >ブログ</Link></li>
       </ul>

       <Image/>

       <Route exact path='/' component={Home}/>
       <Route path='/posts/introduction' component={Introduction}/>
       <Route path='/posts/index' component={Index}/>
       <Route path='/posts/blog' component={Blog}/>
      </div>



    </BrowserRouter>
    );
  }
}



export default App
