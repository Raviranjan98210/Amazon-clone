import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div class="footer__aboutSection">
        <h3 className="footer__colTitle">Get to Know Us</h3>
        <ul className="footer__colItems">
          <li>
            <a
              href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer"
              target="_blank"
            >
              About Us
            </a>
          </li>
          <li>
            <a href="https://amazon.jobs/" target="_blank">
              Careers
            </a>
          </li>
          <li>
            <a
              href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer"
              target="_blank"
            >
              Press Releases
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.in/b?ie=UTF8&node=8872558031&ref_=footer_cares"
              target="_blank"
            >
              Amazon Cares
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.in/Online-Charity/b?ie=UTF8&node=4594605031&ref_=footer_smile"
              target="_blank"
            >
              Gift a Smile
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__connectSection">
        <h3 className="footer__colTitle">Connect with Us</h3>
        <ul className="footer__colItems">
          <li>
            <a
              href="http://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6"
              target="_blank"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="http://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="http://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__makeMoneySection">
        <h3 className="footer__colTitle">Make Money with Us</h3>
        <ul className="footer__colItems">
          <li>
            <a
              href="https://www.amazon.in/b/?_encoding=UTF8&ld=AZINSOANavDesktopFooter&node=2838698031&ref_=nav_footer_sell"
              target="_blank"
            >
              Sell on Amazon
            </a>
          </li>
          <li>
            <a
              href="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT"
              target="_blank"
            >
              Sell under Amazon Accelerator
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.in/gp/redirect.html?_encoding=UTF8&location=https%3A%2F%2Faffiliate-program.amazon.in%2F%3Fref_%3Dfooter_assoc%26utm_campaign%3Dassocshowcase%26utm_medium%3Dfooter%26utm_source%3DGW&source=standards&token=4D7ADB5A094B04230C576B761FB8EC3D657E2376"
              target="_blank"
            >
              Become an Affliate
            </a>
          </li>
          <li>
            <a
              href="http://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter"
              target="_blank"
            >
              Fullfilment by Amazon
            </a>
          </li>
          <li>
            <a href="https://advertising.amazon.in/?ref=Amz.in" target="_blank">
              Adevertise Your Products
            </a>
          </li>
          <li>
            <a href="https://www.amazonpay.in/merchant" target="_blank">
              Amazon on Merchants
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__supportSection">
        <h3 className="footer__colTitle">Let Us Help You</h3>
        <ul className="footer__colItems">
          <li>
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid"
              target="_blank"
            >
              COVID-19 and Amazon
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.in/gp/css/homepage.html?ie=UTF8&ref_=footer_ya"
              target="_blank"
            >
              Your Account
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.in/gp/css/returns/homepage.html?ie=UTF8&ref_=footer_hy_f_4"
              target="_blank"
            >
              Returns Centre
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=201083470&ref_=footer_swc"
              target="_blank"
            >
              100% Purchase Protection
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.in/b?ie=UTF8&node=6967393031&ref_=footer_mobapp"
              target="_blank"
            >
              Amazon App Download
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.in/gp/BIT/theamazonapp/ref=footer_assistant_download_copy"
              target="_blank"
            >
              Amazon Assistant Download
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200507590&ref_=footer_gw_m_b_he"
              target="_blank"
            >
              Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
