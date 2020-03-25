import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>奥越ライフサポート</h1>
    <p>
      就労継続支援（A型）
      <br />
      福祉事務所については
      <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/fukusijimusyo/index.html">
        厚生労働省
      </a>
      へ
    </p>
  </header>
)

export default Header
