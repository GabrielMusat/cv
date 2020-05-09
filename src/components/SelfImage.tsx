import React from "react";
import {motion} from "framer-motion";

interface IProps {
    size: number
}

const f: React.FC<IProps> = (props: IProps) =>(
    <motion.img
        initial={{width: 0, height: 0, borderRadius: 0, boxShadow: "0px 0px 0px black"}}
        animate={{width: props.size, height: props.size, borderRadius: props.size / 2, boxShadow: "0px 0px 4px black"}}
        transition={{duration: 0.6, delay: 1.3}}
        style={{borderRadius: props.size / 2, marginTop: -10, alignSelf: "center"}}
        src={require("../images/gabi.jpg")}
    />)

export default f
