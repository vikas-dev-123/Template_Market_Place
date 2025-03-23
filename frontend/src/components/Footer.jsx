import React from 'react';
const Footer = () => {
  return (
    <>

      <div id="subscribe" className="subscribe">
        <h5>Forgot to mention</h5>
        <h3>Subscribe to my YouTube channel →</h3>
      </div>

      <div id="footer" className="footer">
        <div id="footerleft" className="footerleft">
          <h5>2025 &copy;</h5>
          <h5>0:05 AM EST</h5>
        </div>
        <div id="footerright" className="footerright">
          <a href="#">Dribbble</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
      <style>{`
      #subscribe{
    background-color: #000;
    color: #fff;
    padding: 20px 30px;
    padding-bottom: 7vw;
}

#subscribe h5{
    text-transform: uppercase;
    opacity: .6;
}
#subscribe h3{
    text-transform: uppercase;
    font-size: 14px;
    margin-top: 10px;
}

#footer{
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:40px 30px;
}

#footerleft{
display: flex;
gap: 20px;
}
#footerright{
    display: flex;
    gap: 30px;
}
#footer a{
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color:#fff;
    text-decoration: none;
}
      `}</style>
  
    </>
  );
};

export default Footer;