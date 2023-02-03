import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <a 
            href="linkedin.com/in/kirti-yadav1681/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a 
            href="https://www.instagram.com/kirtii_1620/?igshid=ZDdkNTZiNTM%3D"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
        <div>
            <FaFacebookF />
        </div>
    </div>
  )
}

export default SocialMedia