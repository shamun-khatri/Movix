import {
  FaFacebookF,
  FaLinkedin,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {

    const socialMediaLinks = {
        linkedin: "https://www.linkedin.com/in/shamun-khatri-9b592b218/",
        github: "https://github.com/shamun-khatri",
        facebook: "https://www.facebook.com/skkhatri11",
        twitter: "https://twitter.com/shamunkhatri",
      };

  return (
      <footer className="footer">
          <ContentWrapper>
              <ul className="menuItems">
                  <li className="menuItem">Terms Of Use</li>
                  <li className="menuItem">Privacy-Policy</li>
                  <li className="menuItem">About</li>
                  <li className="menuItem">Blog</li>
                  <li className="menuItem">FAQ</li>
              </ul>
              <div className="infoText">
              👨‍💻 Made with passion by Shamun Khatri 👨‍💻
              </div>
              <div className="socialIcons">
        {Object.entries(socialMediaLinks).map(([platform, url]) => (
          <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
            <span className="icon">
              {platform === "linkedin" && < FaLinkedin/>}
              {platform === "github" && <FaGithub />}
              {platform === "facebook" && <FaFacebookF />}
              {platform === "twitter" && <FaXTwitter />}
            </span>
          </a>
        ))}
      </div>
          </ContentWrapper>
      </footer>
  );
};

export default Footer;