import React from 'react'

const Footer = () => {

    const footerLinks = (element)=>{
        const allFooterLinks = document.querySelectorAll(".footerLinks");
        switch (element) {
            case 0:
                allFooterLinks.forEach((item, index)=> index===0 ? item.style.opacity=1:item.style.opacity=0.2);
                break;
            case 1:
                allFooterLinks.forEach((item, index)=> index===1 ? item.style.opacity=1:item.style.opacity=0.2);
                break;
            case 2:
                allFooterLinks.forEach((item, index)=> index===2 ? item.style.opacity=1:item.style.opacity=0.2);
                break;
            case 3:
                allFooterLinks.forEach((item, index)=> index===3 ? item.style.opacity=1:item.style.opacity=0.2);
                break;
            case 4:
                allFooterLinks.forEach((item, index)=> index===4 ? item.style.opacity=1:item.style.opacity=0.2);
                break;
            case 5:
                allFooterLinks.forEach((item, index)=> index===5 ? item.style.opacity=1:item.style.opacity=0.2);
                break;
        
            default:
                allFooterLinks.forEach((item)=>  item.style.opacity=1);
                break;
        }
    }

    const linksBackToNormal=()=>{
        const allFooterLinks = document.querySelectorAll(".footerLinks");
        allFooterLinks.forEach((item)=>  item.style.opacity=1);

    }

  return (
    <>
          <footer>
        <h1>Let's 
            <br />
            #ConnectOnCutting?
        </h1>
        <aside onMouseLeave={linksBackToNormal}>
            <a href="/" className="footerLinks" onMouseOver={()=>footerLinks(0)} data-cursorpointerMini = {true}>Home</a>
            <a href="/story" className="footerLinks" onMouseOver={()=>footerLinks(1)} data-cursorpointerMini = {true}>Story</a>
            <a href="/media" className="footerLinks" onMouseOver={()=>footerLinks(2)} data-cursorpointerMini = {true}>Media</a>
            <a href="/franchise" className="footerLinks" onMouseOver={()=>footerLinks(3)} data-cursorpointerMini = {true}>Franchise</a>
            <a href="/event" className="footerLinks" onMouseOver={()=>footerLinks(4)} data-cursorpointerMini = {true}>Event</a>
            <a href="/chaiwalacares" className="footerLinks" onMouseOver={()=>footerLinks(5)} data-cursorpointerMini = {true}>Chaiwala Cares</a>
        </aside>
        <div>
            <h5>Email</h5>
            <a href="'mailto: Info@mbachaiwala.com">Info@mbachaiwala.com</a>
            <a href="'mailto: franchise@mbachaiwala.com">franchise@mbachaiwala.com</a>
        </div>
        <div>
            <h5>Phone</h5>
            <a href="'tel: +919392724792">+919392724792</a>
        </div>
        <p>© COPYRIGHT 2023 MBA CHAIWALA. MADE BY</p>
   </footer>
    <div className='footer'></div>
    </>
  )
}

export default Footer
