import React from 'react'

export default function Footer({footerInfo, cName, children}) {  //jaha se props aa rha hai waha destructure kr sakte hai
    // console.log(props.footerInfo.name)
    // console.log(props.footerInfo.course)

    // object destructuring
    /*
    let {footerInfo, cName} = props;
    console.log(footerInfo);
    console.log(cName)
    */

  return (
    <div>
        <h1>Footer Section {cName}</h1>
        {children}
        <p>{footerInfo.course}</p>
    </div>
  )
}
