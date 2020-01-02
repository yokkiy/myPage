import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Image from "./Image"

class Header extends React.Component {
  render () {
    return (
    <BrowserRouter>

      <div class="header-contents-wrapper">

       <ul>
        <li><Link to='/'>ホーム</Link></li>
        <li><Link to='/posts/introduction'>自己紹介</Link></li>
        <li><a href="https://twitter.com/mochopuyon/">Twitter</a></li>
        <li><a href='https://www.pixiv.net/member.php?id=33824198'>pixiv</a></li>
        <li><Link to='/posts/index'>ご意見</Link></li>
        <li><Link to='/posts/blog'>ブログ</Link></li>
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

function Home(){
return(

  <div class="twitter">
      <a class="twitter-timeline" data-lang="ja" data-width="300" data-height="500" data-theme="dark" data-link-color="#E81C4F" href="https://twitter.com/mochopuyon?ref_src=twsrc%5Etfw">Tweets by mochopuyon</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  </div>

);


}

function Introduction(){
 return(
  <div class="Introduction">
      <p>自己紹介ページです</p>
  </div>
);
}

function Index(){
 return(
  <h1>工事中</h1>
);
}

function Blog(){
 return(
  <h1>ブログ更新ページ予定地</h1>
);
}

export default Header
