import React from 'react';

const Footer = () => {
    return (
        <div className='mt-40'>
            <footer className="footer p-10 bg-black text-neutral-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover hover:text-orange-600">Mobile App Development</a>
    <a className="link link-hover hover:text-orange-600">Artificial Intelligence</a>
    <a className="link link-hover hover:text-orange-600">Data Analytics</a>
    <a className="link link-hover hover:text-orange-600">Cyber Security</a>
    <a className="link link-hover hover:text-orange-600">Software Quality Testing</a>
    <a className="link link-hover hover:text-orange-600">Augmented Analytics</a>
  </div> 
  <div>
    <span className="footer-title hover:text-orange-600">Company</span> 
    <a className="link link-hover hover:text-orange-600">About us</a>
    <a className="link link-hover hover:text-orange-600">Contact</a>
    <a className="link link-hover hover:text-orange-600">Jobs</a>
    <a className="link link-hover hover:text-orange-600">Press kit</a>
  </div> 
  <div>
    <span className="footer-title hover:text-orange-600">Legal</span> 
    <a className="link link-hover hover:text-orange-600">Terms of use</a>
    <a className="link link-hover hover:text-orange-600">Privacy policy</a>
    <a className="link link-hover hover:text-orange-600">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;