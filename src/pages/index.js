import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="ols-site - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>奥越ライフサポートについて</h2>
                </header>
                <p>
                  奥越ライフサポートは＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊ Sed
                  lorem ipsum dolor sit amet nullam consequat feugiat consequat
                  magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor
                  tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit
                  amet aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>事業内容</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>支援計画</h3>
                <p>
                  支援計画について Sed lorem amet ipsum dolor et amet nullam
                  consequat a feugiat consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>経営理念</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>福祉事業所とは</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    A型作業所について
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>作業例</h2>
              <p>
                作業例。　
                Donec imperdiet consequat consequat. Suspendisse
                feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>野菜</strong> Vegetable
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>お惣菜</strong> Dish
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>掃除</strong> Clean
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>花作業</strong> Flower
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>その他</strong> Other
              </li>
            </ul>
            <p className="content">
              コンテンツをここに書く。Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    各種作業について
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>最後に</h2>
              <p>
                最後に、病気になっても諦めないでください。
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    アドバイス
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
