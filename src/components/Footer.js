import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>福井県の福祉作業所</h2>
      <p>
        福井県の県民のみなさまや市町社会福祉協議会、市民活動団体（ボランティア、NPO等）との協働を通じて、地域の福祉課題の解決、改善に努めています。
      </p>
      <ul className="actions">
        <li>
          <a href="http://www.f-shakyo.or.jp/">福建社会福祉行儀会へ</a>
        </li>
      </ul>
    </section>
    <section>
      <h2>奥越ライフサポート：連絡先</h2>
      <dl className="alt">
        <dt>住所</dt>
        <dd>
          福井県勝山市沢町２丁目７−２７ ハッピー市民市場内 &bull; 〒911-0801
          &bull; JAPAN
        </dd>
        <dt>TEL</dt>
        <dd>(0779) 64-4001</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://dorahei.com">ols@okuetsu-life-support.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/codebushi/ols-site"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
