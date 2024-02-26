
import { SocialIcon } from 'react-social-icons';
import "../../assets/css/footer.css"
function Footer() {
  return (
    <div className="main-footer">
    <div className="row">
      {/* Column1 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>COMPANY</h4>
          <li className='fot'>About us</li>
          <li className='fot'>Team</li>
          <li className='fot'>Careers</li>
          <li className='fot'>Blog</li>
        </ul>
      </div>
      {/* Column2 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>CONTACT</h4>
          <li className='fot'>Help and Support</li>
          <li className='fot'>Partner with us</li>
          <li className='fot'>Ride with us </li>
        </ul>
      </div>
      {/* Column3 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>LEGAL</h4>
          <li className='fot'>Terms & Conditions</li>
          <li className='fot'>Privacy Policy</li>
          <li className='fot'>Cookie Policy</li>
          <li className='fot'>Security</li>
          <li className='fot'>Sitemap</li>
        </ul>
      </div>
      <div className="col">
        <ul className="list-unstyled">
          <h4>SOCIAL LINKS </h4>
          <li className='fot1'><SocialIcon  url="https://twitter.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://instagram.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://linkedin.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://facebook.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://youtube.com/jaketrent"/></li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row_sm">
      <p className="col-sm">
      By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © netfi™ Ltd. All rights reserved.
      </p>
    </div>
</div>
  )
}

export default Footer