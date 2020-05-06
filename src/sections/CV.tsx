import {connect} from "react-redux";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import React, {CSSProperties} from "react";
import {Paper, Typography} from "@material-ui/core";
import {motion} from "framer-motion";
import {config} from "../config";

interface IProps {
    style?: CSSProperties
}

interface IState {

}

class Element extends React.Component<IProps, IState> {
    render() {
        const {style} = this.props
        const {name, residency, birthdate, linkedin, email, github, technology} = config
        return (
            <div style={{...style}}>
                <div style={{display: "flex", alignSelf: "center", alignItems: "stretch", flexDirection: "column", width: '60%'}}>
                    {[[name, email], [birthdate, linkedin], [residency, github]].map(([left, right], i) => (
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: !i ? 50: 10}}>
                            <motion.div initial={{right: 100}} animate={{right: 0}} transition={{duration: 1, delay: i*0.3}} style={{position: "relative"}}>
                                <motion.span
                                    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: i*0.3}}
                                    style={{fontWeight: "bold", fontSize: 20, color: "white"}}>{left}</motion.span>
                            </motion.div>
                            <motion.div initial={{left: 100}} animate={{left: 0}} transition={{duration: 1.5, delay: i*0.3}} style={{position: "relative"}}>
                                <motion.span
                                    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: i*0.3}}
                                    style={{fontWeight: "bold", fontSize: 20, color: "white"}}>{right}</motion.span>
                            </motion.div>
                        </div>
                    ))}

                    <img height={300} width={300} style={{borderRadius: 250, marginTop: -20, alignSelf: "center"}} src={require("../gabi.jpg")}/>

                    <motion.div
                        style={{
                            display: "flex",
                            backgroundColor: "#777",
                            flexDirection: "column",
                            alignItems: "center",
                            borderRadius: 40,
                            margin: 40
                        }}>
                        <motion.span style={{color: "white", fontWeight: 'bold', fontSize: 30, margin: 20}}>Full stack and machine learning software engineer</motion.span>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap"}}>
                            {Object.entries(technology).map(([title, elements]) => (
                                <div key={title} style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10}}>
                                    <span style={{color: "white", marginTop: 20, marginBottom: 10}}>{title}</span>
                                    <div>
                                        {elements.map(f => (
                                            <img height={40} style={{margin: 3}} src={require("../icons/"+f+'.png')}/>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{margin: 30}}/>
                    </motion.div>

                </div>
            </div>
        )
    }
}

const s2p = (state: IStore) => ({});

const d2p = (dispatch: (action: actionTypes) => void) => ({});

export default connect(s2p, d2p)(Element);
