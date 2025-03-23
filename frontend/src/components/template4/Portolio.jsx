import React, { useEffect } from "react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
 

const Portfolio = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    const firstPage = () => {
      const tl = gsap.timeline();

      tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut",
      })
        .to(".boundingelem", {
          y: "0",
          ease: "expo.inOut",
          duration: 2,
          delay: -1,
          stagger: 0.2,
        })
        .from("#herofooter", {
          y: "-10",
          opacity: 0,
          duration: 1.5,
          delay: -1,
          ease: "expo.inOut",
        });
    };

    const circleMouseFollower = (xscale, yscale) => {
      window.addEventListener("mousemove", (e) => {
        document.querySelector(
          "#minicircle"
        ).style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xscale}, ${yscale})`;
      });
    };

    const circleChaptakaro = () => {
      let xscale = 1;
      let yscale = 1;
      let xprev = 0;
      let yprev = 0;
      let timer;

      window.addEventListener("mousemove", (e) => {
        clearTimeout(timer);

        xscale = gsap.utils.clamp(0.8, 1.2, e.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, e.clientY - yprev);

        xprev = e.clientX;
        yprev = e.clientY;

        circleMouseFollower(xscale, yscale);

        timer = setTimeout(() => {
          document.querySelector(
            "#minicircle"
          ).style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1,1)`;
        }, 100);
      });
    };

    const imagemove = () => {
      document.querySelectorAll(".elem").forEach((elem) => {
        let rotate = 0;
        let differ = 0;

        elem.addEventListener("mousemove", (e) => {
          const diff = e.clientY - elem.getBoundingClientRect().top;
          differ = e.clientX - rotate;
          rotate = e.clientX;

          gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: "power3",
            top: diff,
            left: e.clientX,
            rotate: gsap.utils.clamp(-20, 20, differ * 0.8),
          });
        });

        elem.addEventListener("mouseleave", () => {
          gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: "power3.out",
            duration: 0.5,
          });
        });
      });
    };

    circleChaptakaro();
    firstPage();
    imagemove();
  }, []);

  return (
    <div className="portfolio-container" id="main">
      <div id="minicircle" className="minicircle" />
      <div id="hero" className="hero">
        <div id="nav" className="nav">
          <a href="#" className="nav-link">
            Cynthia Ugwu
          </a>
          <h4>MENU+</h4>
        </div>

        <div id="heading" className="heading">
          <div className="bounding">
            <h1 className="boundingelem heading-text">Product</h1>
          </div>
          <div className="blocktext">
            <div className="bounding">
              <h1 className="boundingelem heading-text">Designer</h1>
            </div>
            <div className="bounding">
              <h5 className="boundingelem subheading-text">Based in Toronto</h5>
            </div>
          </div>
        </div>

        <div id="herofooter" className="herofooter">
          <a href="#">Previously worked at YML</a>
          <a href="#">Protopie Ambassador</a>
          <div id="iconset" className="iconset">
            <div className="circle">↓</div>
            <div className="circle">↓</div>
          </div>
        </div>
      </div>

      <div id="second" className="second">
        <div className="elem">
          <img src="./plug.png" alt="The plug" className="elem-img" />
          <h1>The Plug</h1>
          <h5>2022</h5>
        </div>

        <div className="elem">
          <img src="./ixperience.png" alt="ixperience" className="elem-img" />
          <h1>ixperience</h1>
          <h5>2022</h5>
        </div>

        <div className="elem">
          <img src="./hudu.png" alt="Hudu" className="elem-img" />
          <h1>Hudu</h1>
          <h5>2022</h5>
        </div>
      </div>

      <div id="about" className="about">
        <div id="textabout" className="textabout">
          <h5>About Me</h5>
          <p>
            I'm a product designer passionate about creating products that solve
            real problems. When I'm not sketching ideas, I'm binge-watching or
            gaming.
          </p>
          <a href="#" className="contact-link">
            Let's talk
          </a>
        </div>
      </div>

      <div id="subscribe" className="subscribe">
        <h5>Forgot to mention</h5>
        <h3>Subscribe to my YouTube channel →</h3>
      </div>

      <div id="footer" className="footer">
        <div id="footerleft" className="footerleft">
          <h5>2023 &copy;</h5>
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
      *{
    margin:0;
    padding:0;
    font-family: 'General Sans', sans-serif;
    box-sizing: border-box;
 }

html, body{
    width:100%;
    height: 100%;
}

#minicircle{
    transition:all cubic-bezier(0.19, 1, 0.22, 1) 1s;
    width: 10px;
    height: 10px;
    position: absolute;
    z-index: 9999;
    background-color: #fff;
    border-radius: 50%;
     
}

.bounding{
    width: fit-content;
    overflow: hidden;
    /* background-color: red; */
}

.bounding .boundingelem{
    transform: translateY(100%)
}
 
#main{
    width: 100%;
    background-color: black;
}

#hero{
    color: #fff;
    width: 100%;
    height: 130vh;
    background-color: black;
    position: relative;
}
#nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px 40px;
    color: #fff;
}

#nav a{
    color:#fff;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
}
#heading{
    margin-top: 90px;
}

#heading h1{
    margin-left: 30px;
    opacity: .6;
    line-height: 1;
    font-size: 10vw;
    font-weight: 50;
    text-transform: uppercase;
}

#heading #secondh1{
 margin-left: 190px;
}

.blocktext{
    display: flex;
    flex-direction: column;
    align-items: end;
     
    width: fit-content;
     
}
.blocktext h5{
     
    text-align: right !important;
    font-size: 17px;
    font-weight: 600;
    text-transform: uppercase;
}
#chotiheadings{
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 100px;
    padding-right: 30px;
}
#chotiheadings h5 {
    text-transform: uppercase;
    margin-top: 1vw;
    font-weight: 500;
    font-size: 1.3vw;
    text-align: right;
    
}

#herofooter{
    padding: 0 2vw;
    width: 100%;
    position: absolute;
    bottom: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#herofooter a{
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;

}

#herofooter #iconset{
    display: flex;
    gap: 5px;
}

#herofooter .circle{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    color: #000;
    font-weight: 600;
    border-radius: 50%;
    background-color: #888;
}

#second{
    color: #fff;
    padding-right: 10vw;
    padding-left: 2vw;
    padding-top: 150px;
    background-color: #000;
    width: 100%;
    height: 150vh;
}

.elem{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 3.5vw 3vw;
    padding-right: 0 ;
    border-top: 1px solid #888;
}

.elem h1{
    text-transform: uppercase;
    font-size: 7.6vw;
    color: #888;

}

.elemlast{
    border-bottom: 1px solid #888;
}

.elem h5{
    font-weight: 300;
}


.elem img{
    /* display: none; */
    /* padding-bottom: 10px; */
    opacity: 0;
    height: 130%;
    z-index: 999;
    position: absolute;
}

#about{
    display: flex;
    align-items: center;
    gap: 50px;
    color: #fff;
    padding: 10vw 10vw;
    padding-left: 40vw;
    width:100%;
    background-color: #000;
}

#textabout{
    width: 25rem;

}

#textabout h5{
    text-transform: uppercase;
    opacity: .6;
    margin-bottom: 10px;
}
#textabout p{
    line-height: 1.7;
    margin-bottom: 30px;
}

#about img{
    width: 200px;
}

#textabout a{
    padding: 10px 25px;
    border: 1px solid #fff;
    text-decoration: none;
    color: #fff;
    border-radius: 70px;
}


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
    html.has-scroll-smooth {
    overflow: hidden; }
  
  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; }
  
  .has-scroll-smooth body {
    overflow: hidden; }
  
  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh; }
  
  [data-scroll-direction="horizontal"] [data-scroll-container] {
    height: 100vh;
    display: inline-block;
    white-space: nowrap; }
  
  [data-scroll-direction="horizontal"] [data-scroll-section] {
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    height: 100%; }
  
  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 100%;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0; }
    .c-scrollbar:hover {
      transform: scaleX(1.45); }
    .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
      opacity: 1; }
    [data-scroll-direction="horizontal"] .c-scrollbar {
      width: 100%;
      height: 10px;
      top: auto;
      bottom: 0;
      transform: scaleY(1); }
      [data-scroll-direction="horizontal"] .c-scrollbar:hover {
        transform: scaleY(1.3); }
  
  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
    width: 7px;
    border-radius: 10px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab; }
    .has-scroll-dragging .c-scrollbar_thumb {
      cursor: -webkit-grabbing;
      cursor: grabbing; }
    [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
      right: auto;
      bottom: 0; }
      `}</style>
    </div>
  );
};

export default Portfolio;