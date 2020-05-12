import React, {CSSProperties} from "react";
import {motion} from "framer-motion";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import {connect} from "react-redux";
import {IDims, ITransition} from "../types";

interface IProps {
    style: CSSProperties
    job: string
    technology: Record<string, string[]>
    dims: IDims
    transition: ITransition
}

const f: React.FC<IProps> = (props: IProps) => {
    const {style, transition, job, technology, dims: {width: w, height: h}} = props
    return <motion.div
        initial={{
            top: h / 1.5,
            transform: `perspective(${Math.floor(0.5*h)}px) rotateX(-80deg) scale(0.3)`,
        }}
        animate={{
            top: 0,
            transform: `perspective(${Math.floor(0.5*h)}px) rotateX(0deg) scale(1)`
        }}

        transition={transition}
        style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "1px 1px 3px black",
            ...style
        }}>
        <motion.span style={{color: "#333", fontWeight: 'bold', fontSize: 0.04*h, marginTop: 0.03*h, marginBottom: 0.01*h}}>
            {job}
        </motion.span>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
        }}>
            {Object.entries(technology).map(([title, elements]) => (
                <div key={title} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: 0.04*w,
                    marginRight: 0.04*w,
                    marginTop: 0.01*h
                }}>
                    <span style={{color: "#333", marginTop: 0.03*h, marginBottom: 0.01*h, fontSize: 0.018*h}}>{title}</span>
                    <div>
                        {elements.map(f => (
                            <div className={"tooltip"}>
                                <img alt={""} height={0.04*h} style={{margin: 0.003*w}} src={require("../icons/" + f + '.png')}/>
                                <span className={"tooltiptext"}>{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div style={{margin: 0.025*h}}/>
    </motion.div>
}

const s2p = (state: IStore) => ({
    dims: state.dims
});

const d2p = (dispatch: (action: actionTypes) => void) => ({});

export default connect(s2p, d2p)(f);
