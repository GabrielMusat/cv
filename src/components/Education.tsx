import {connect} from "react-redux";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import React, {CSSProperties} from "react";
import {motion} from "framer-motion";
import {IDims, ITransition} from "../types";
import {config} from "../config";

interface IProps {
    style?: CSSProperties
    dims: IDims
    education: typeof config.education
    languages: typeof config.languages
    transition: ITransition
}

const f: React.FC<IProps> = (props: IProps) => {
    const {education, languages, style, transition, dims: {width: w, height: h}} = props
    return <motion.div
        initial={{
            left: w/4,
            transform: `perspective(500px) rotateY(80deg) scale(0.4)`
        }}
        animate={{
            left: 0,
            transform: "perspective(500px) rotateY(0deg) scale(1)"
        }}
        transition={transition}
        style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "space-between",
            boxShadow: "1px 1px 3px black",
            backgroundColor: "#eee",
            ...style
        }}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", flex: 1}}>
            <span style={{alignSelf: "center", color: "#333", fontWeight: "bold", fontSize: 0.03*h, margin: 0.01*h}}>Education</span>
            {education.map((grade, i) => (
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", marginTop: 0.01*h}}>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <span style={{color: "#333", fontSize: 0.015*h}}>{grade.timestamp}</span>
                        <img style={{marginLeft: 0.01*h, marginRight: 0.01*h}} alt={''} height={0.02*h} src={grade.university}/>
                    </div>
                    <span style={{color: "#333", fontWeight: "bold", fontSize: 0.015*h, margin: 0.01*h}}>{grade.title}</span>
                </div>
            ))}
        </div>
        <div  style={{display: "flex", flexDirection: "column", alignItems: "center", flex: 1}}>
            <span style={{color: "#333", fontWeight: "bold", fontSize: 0.03*h, margin: 0.01*h}}>Languages</span>
            <div style={{display: "flex", flexDirection: "row"}}>
                {languages.map((language) => (
                    <img style={{margin: 0.01*h}} alt={''} height={0.06*h} src={require('../icons/'+language+'.png')}/>
                ))}
            </div>
        </div>
    </motion.div>
}

const s2p = (state: IStore) => ({
    dims: state.dims
});

const d2p = (dispatch: (action: actionTypes) => void) => ({});

export default connect(s2p, d2p)(f);
