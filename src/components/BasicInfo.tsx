import React, {CSSProperties} from "react"
import {motion} from "framer-motion";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import {connect} from "react-redux";
import {IDims, ITransition} from "../types";
import {config} from "../config";
import {Button, IconButton} from "@material-ui/core";

interface IProps {
    style: CSSProperties,
    basicInfo: typeof config.basicInfo
    dims: IDims
    transition: ITransition
}

const f: React.FC<IProps> = (props: IProps) => {
    const {basicInfo, style, transition, dims: {width: w, height: h}} = props
    return <motion.div
        initial={{
            right: w/4,
            transform: `perspective(500px) rotateY(-80deg) scale(0.4)`
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
            boxShadow: "1px 1px 3px black",
            backgroundColor: "#eee",
            ...style
        }}>
        <span style={{alignSelf: "center", color: "#333", fontWeight: "bold", fontSize: 0.03*h, margin: 0.01*h}}>Basic info</span>
        {Object.entries(basicInfo).filter(el => !["github", "linkedin", "pdfResume"].includes(el[0])).map(([k, v]) => (
            <div style={{display: "flex", flexDirection: "column", marginLeft: 0.007*w, marginRight: 0.007*w, marginTop: 0.015*h}}>
                <span style={{fontWeight: "bold", fontSize: 0.017*h, color: "#333"}}>{k+':'}</span>
                <span style={{fontSize: 0.017*h, color: "#333", marginLeft: 0.005*w, marginRight: 0.005*w}}>{v}</span>
            </div>
        ))}
        <div style={{display: "flex", flexDirection: "row", margin: 0.02*h, marginBottom: 0.01*h}}>
            {Object.entries(basicInfo).filter(el => ["github", "linkedin"].includes(el[0])).map(([k, v]) => (
                <IconButton style={{padding: 0, marginRight: 0.01*w}} href={v} target={'_blank'}>
                    <img alt={''} height={0.06*h} src={require('../icons/'+k+'.png')}/>
                </IconButton>
            ))}
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 0.007*w, marginRight: 0.007*w, marginTop: 0.007*h}}>
            <span style={{fontWeight: "bold", fontSize: 0.017*h, color: "#333"}}>{'pdf resume:'}</span>
            <IconButton style={{padding: 0, marginLeft: 0.007*w}} href={basicInfo.pdfResume} target={'_blank'}>
                <img alt={''} style={{margin: 0.005*h}} height={0.06*h} src={require('../icons/pdf.png')}/>
            </IconButton>
        </div>
    </motion.div>
}

const s2p = (state: IStore) => ({
    dims: state.dims
});

const d2p = (dispatch: (action: actionTypes) => void) => ({});

export default connect(s2p, d2p)(f);

