import {connect} from "react-redux";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import React, {CSSProperties} from "react";
import {Typography} from "@material-ui/core";
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
        const {name, residency, birthdate, linkedin, email, github} = config
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

                </div>
            </div>
        )
    }
}

const s2p = (state: IStore) => ({});

const d2p = (dispatch: (action: actionTypes) => void) => ({});

export default connect(s2p, d2p)(Element);
