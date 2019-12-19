import React from "react"
import headerStyles from "./styles/header.module.css"

const HeaderLink = ({text, index}) => 
    (<h4>
        {"0"}{index}{". "}{text}
    </h4>);

export default () => 
    (<div className={headerStyles.container}>
        <HeaderLink index={1} text={"about"}/>
    </div>);