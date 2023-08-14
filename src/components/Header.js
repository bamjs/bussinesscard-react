import profileImage from "../asserts/profile.png";
import "./Header.css";
import mailIcon from "../asserts/mail.svg";
import linkedinIcon from "../asserts/linkedin.svg"
const Header = () => {
  return (
    <div>
      <img src={profileImage} alt="profile"></img>
      <h2>Muthyala Sai Samantha</h2>
      <h4>Front End Developer</h4>
      <h6>muthyala.js@gmail.com</h6>
      <span className="header--buttons">
        <button className="button">
          <img src={mailIcon} className="header--mailicon"></img>
          <span className="header--text">Email</span>
        </button>
        <button className="button" style={{backgroundColor:"#5093E2"}}>
            <img src={linkedinIcon}></img>
            <span  className="header--text">LinkedIn</span>
        </button>
      </span>
    </div>
  );
};
export default Header;
