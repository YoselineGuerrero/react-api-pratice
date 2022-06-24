import '../mainPage.css';
import React from 'react';
import GitHubLogo from '../GitHub-logo-green.png';

const footer_links = [
  {
    name:'Portfolio',
    link: 'https://yoselineguerrero.github.io/dev-portfolio/'
  }, {
    name:'Code for this Site',
    link: 'https://github.com/YoselineGuerrero/react-api-pratice'
  }, {
    name:'GitHub Profile',
    link: 'https://github.com/YoselineGuerrero'
  }, {
    name:'LinkedIn',
    link: 'https://www.linkedin.com/in/yoseline-guerrero-a78526175/'
  },
]

export default function Footer(){
  return(
    <div id='footer'>
      <div id='footer-img'>
        <img src={GitHubLogo} width="35px"  alt=''></img>
        <span id='footer-title'>© 2022 Yoseline Guerrero</span>
      </div>
      <div id='footer-a'>
        {footer_links.map((link) => (
          <a id='footer-links' key={link.name} href={link.link} target='_blank' rel="noreferrer">{link.name}</a>
        ))}
      </div>
      <div id='footer-img-small'>
        <img src={GitHubLogo} width="35px"  alt=''></img>
        <span id='footer-title'>© 2022 Yoseline Guerrero</span>
      </div>
    </div>
  );
}