import React from 'react';
import {motion} from 'framer-motion'
const Section = ({h3, text, hasBtn=true, btnTxt, imgScr, imgSize="70%", backgroundColor, headingColor, textColor
                , btnBgColor, btnColor}) => {


  const headingOptions ={
    initial:{
        y:"-100%",
        opaCity:"0"
    },
    whileInView:{
        y:0,
        opaCity:1
    }
  }

  const textOption ={
    initial:{
        y:"100%",
        opaCity:"0"
    },
    whileInView:{
        y:0,
        opaCity:1
    },
    transition:{
        delay:0.3,
    }
  }

  const buttonOption={
    initial:{
        y:"100%",
        opaCity:"0"
    },
    whileInView:{
        y:0,
        opaCity:1
    },
    transition:{
        delay:0.3,
        ease:"easeIn"
    }
  }
  const imgOption={
    initial:{
        scale:0.1,
        opaCity:"0"
    },
    whileInView:{
        scale:1,
        opaCity:1
    },
    transition:{
        delay:0.3,
    }
  }


  return (
    <section className='section' style={{
        backgroundColor:backgroundColor,
    }}>
        <div>
            <motion.h3 style={{
                color:headingColor,
            }}
            data-cursorpointer={true}
            {...headingOptions}
            >{h3}</motion.h3>
            <motion.p style={{
                color:textColor,
            }}
            data-cursorpointer={true}
            {...textOption}
            >{text}</motion.p>

            { hasBtn && <motion.button style={{
                color:btnColor,
                backgroundColor:btnBgColor,
            }}
            data-cursorpointer={true}
            {...buttonOption}
            >{btnTxt}</motion.button>}

            <motion.div {...imgOption}>
                <img src={imgScr} alt="imgScr" style={{
                    width:imgSize,
                }} />
            </motion.div>
        </div>
    </section>
  )
}

export default Section
