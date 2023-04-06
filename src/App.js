import "./Styles/App.scss"
import "./Styles/Intro.scss"
import "./Styles/section.scss"
import "./Styles/Footer.scss"
import "./Styles/Misc.scss"
import "./Styles/MediaQuery.scss"
import IntroVideo from "./Components/IntroVideo";
import Section from "./Components/Section";
import Loader from "./Components/Loader";
import freshTopicImg from "./Assets/academy.png";
import freshTopic2Img from "./Assets/story.png";
import tedTalksImg from "./Assets/in-the-news.gif";
import franchiseImg from "./Assets/franchise.gif";
import mapImg from "./Assets/locations.png";
import coursesImg from "./Assets/image2.png";
import albumImg from "./Assets/mba-cares.gif";
import baratImg from "./Assets/image1.png";
import chaiwalaImg from "./Assets/image3.png";
import data from "./Data/data.json";
import Footer from "./Components/Footer"
import Misc from "./Components/Misc"
import { useEffect, useState } from "react"


const yellow = "#fff100", pink='#ed1e79', white="#fff", brown="#6d3d0f";

function App() {

  const {freshTopic, freshTopic2, tedTalks, franchise, map, courses, album, barat, chaiwala} = data;
  const [loading, setLoading] = useState(true);
  const dotCurser = (e)=>{
    const cursor = document.querySelector(".cursor");
    cursor.style.top= `${e.pageY - 14}px`;
    cursor.style.left= `${e.pageX - 14}px`;

    const element = e.target;

    if(element.getAttribute("data-cursorpointer")){
      cursor.classList.add('cursorHover')
    }else if(element.getAttribute("data-cursorpointerMini")){
      cursor.classList.add('cursorHoverMini')
      
    }else{
      cursor.classList.remove('cursorHover')
      cursor.classList.remove('cursorHoverMini')

    }
  }
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  useEffect(()=>{
    window.addEventListener('mousemove',dotCurser)
    return ()=>{
      window.addEventListener('mousemove',dotCurser)
    }
  }, [])

  return (
    <>
      {loading && <Loader/>}
      <IntroVideo/>
      {/* FreshTopic -1 */}
      <Section h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn} 
        imgScr={freshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* FreshTopic -2*/}
      <Section h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn} 
        imgScr={freshTopic2Img}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* Ted Talks*/}
      <Section h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn} 
        imgScr={tedTalksImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      {/* franchise*/}
      <Section h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn} 
        imgScr={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      {/* Map*/}
      <Section h3={map.heading}
        text={map.text}
        imgScr={mapImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={brown}
        btnColor={yellow}
        hasBtn={false}
      />
      {/* Courses*/}
      <Section h3={courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imgSize={"30%"}
        imgScr={coursesImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      {/* album*/}
      <Section h3={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgScr={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      {/* barat*/}
      <Section h3={barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imgScr={baratImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* ChaiWala*/}
      <Section h3={chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imgScr={chaiwalaImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Footer/>
      <Misc/>
    </>
  );
}

export default App;
