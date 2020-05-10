import React from "react"
import {motion} from "framer-motion";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import {connect} from "react-redux";
import {IDims} from "../types";

interface IProps {
    name: string
    residency: string
    birthdate: string
    linkedin: string
    email: string
    github: string
    dims: IDims
}

const f: React.FC<IProps> = (props: IProps) => {
    const {name, residency, birthdate, linkedin, email, github, dims: {width: w, height: h}} = props
    return <div>{[[name, email], [birthdate, linkedin], [residency, github]].map(([left, right], i) => (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: (!i ? 0.06: 0.02)*h}}>
            <motion.div initial={{right: 0.1*w}} animate={{right: 0}} transition={{duration: 1, delay: i*0.3}} style={{position: "relative"}}>
                <motion.span
                    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: i*0.3}}
                    style={{fontWeight: "bold", fontSize: 0.024*h, color: "#eee"}}>{left}</motion.span>
            </motion.div>
            <motion.div initial={{left: 0.1*w}} animate={{left: 0}} transition={{duration: 1.5, delay: i*0.3}} style={{position: "relative"}}>
                <motion.span
                    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: i*0.3}}
                    style={{fontWeight: "bold", fontSize: 0.024*h, color: "#eee"}}>{right}</motion.span>
            </motion.div>
        </div>
    ))}</div>
}

const s2p = (state: IStore) => ({
    dims: state.dims
});

const d2p = (dispatch: (action: actionTypes) => void) => ({});

export default connect(s2p, d2p)(f);

