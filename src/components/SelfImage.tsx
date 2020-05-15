import React, {CSSProperties} from "react";
import {motion} from "framer-motion";
import {ITransition} from "../types";

interface IProps {
    style?: CSSProperties
    size: number
    mainPhoto: any
    transition: ITransition
}

const f: React.FC<IProps> = (props: IProps) =>(
    <motion.img
        initial={{width: 0, height: 0, borderRadius: 0, boxShadow: "0px 0px 0px black"}}
        animate={{width: props.mainPhoto ? props.size:0, height: props.mainPhoto ? props.size:0, borderRadius: props.size / 2, boxShadow: "0px 0px 4px black"}}
        transition={props.transition}
        style={{borderRadius: props.size / 2, marginTop: -10, alignSelf: "center", ...props.style}}
        src={props.mainPhoto}
    />)

export default f
