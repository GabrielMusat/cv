import {connect} from "react-redux";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import React, {CSSProperties} from "react";
import { InView } from 'react-intersection-observer';
import {motion} from "framer-motion";
import {config} from "../config";
import {IDims} from "../types";

interface IProps {
    style?: CSSProperties
    dims: IDims
}

interface IState {
    view: Record<string, boolean>
}

class Element extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            view: {}
        }
        Object.keys(config.jobs).forEach(jobName => this.setState({view: {...this.state.view, [jobName]: false}}))
    }

    changeView = (el: string, view: boolean) => {
        console.log(el, view)
        this.setState({view: {...this.state.view, [el]: view}})
    }


    render() {
        const {style, dims} = this.props
        const {name, residency, birthdate, linkedin, email, github, technology} = config
        return (
            <div style={{...style}}>
                <div style={{display: "flex", alignSelf: "center", alignItems: "stretch", flexDirection: "column", width: '60%'}}>
                    <div style={{display: "flex", alignSelf: "center", alignItems: "stretch", flexDirection: "column", width: '100%', minHeight: dims.height}}>
                        {[[name, email], [birthdate, linkedin], [residency, github]].map(([left, right], i) => (
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: !i ? 50: 10}}>
                                <motion.div initial={{right: 100}} animate={{right: 0}} transition={{duration: 1, delay: i*0.3}} style={{position: "relative"}}>
                                    <motion.span
                                        initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: i*0.3}}
                                        style={{fontWeight: "bold", fontSize: 20, color: "#eee"}}>{left}</motion.span>
                                </motion.div>
                                <motion.div initial={{left: 100}} animate={{left: 0}} transition={{duration: 1.5, delay: i*0.3}} style={{position: "relative"}}>
                                    <motion.span
                                        initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: i*0.3}}
                                        style={{fontWeight: "bold", fontSize: 20, color: "#eee"}}>{right}</motion.span>
                                </motion.div>
                            </div>
                        ))}

                        <motion.img
                            initial={{width: 0, height: 0, borderRadius: 0, boxShadow: "0px 0px 0px black"}}
                            animate={{width: 300, height: 300, borderRadius: 150, boxShadow: "0px 0px 4px black"}}
                            transition={{duration: 0.6, delay: 0.9}}
                            style={{borderRadius: 250, marginTop: -20, alignSelf: "center"}}
                            src={require("../images/gabi.jpg")}
                        />

                        <motion.div
                            initial={{top: window.innerHeight}}
                            animate={{top: 0}}
                            transition={{duration: 1, delay: 1.3}}
                            style={{
                                display: "flex",
                                position: "relative",
                                backgroundColor: "#eee",
                                flexDirection: "column",
                                alignItems: "center",
                                borderRadius: 40,
                                marginTop: 80,
                                boxShadow: "1px 1px 3px black"
                            }}>
                            <motion.span style={{color: "#333", fontWeight: 'bold', fontSize: 30, margin: 20}}>
                                Full stack and machine learning software engineer
                            </motion.span>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap"}}>
                                {Object.entries(technology).map(([title, elements]) => (
                                    <div key={title} style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10}}>
                                        <span style={{color: "#333", marginTop: 20, marginBottom: 10}}>{title}</span>
                                        <div>
                                            {elements.map(f => (
                                                <img alt={""} height={40} style={{margin: 3}} src={require("../icons/"+f+'.png')}/>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{margin: 30}}/>
                        </motion.div>
                    </div>

                    {Object.entries(config.jobs).map(([jobName, job], i) => (
                        <InView
                            style={{margin: 40, width: '80%', alignSelf: i % 2 === 0 ? "flex-start": "flex-end"}}
                            as={'div'}
                            onChange={(inView: boolean) => this.changeView(jobName, inView)}
                        >
                            <motion.div
                                animate={{left: this.state.view[jobName] ? 0:( i % 2 === 0 ? -1:1)*window.innerWidth}}
                                transition={{duration: 1}}
                                style={{
                                    display: "flex",
                                    position: "relative",
                                    backgroundColor: "#eee",
                                    flexDirection: "column",
                                    alignItems: i % 2 === 0 ? "flex-start": "flex-end",
                                    borderRadius: 20,
                                    boxShadow: "1px 1px 3px black"
                                }}
                            >
                                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                    <img alt={''} style={{margin: 20}} height={60} src={job.logo} />
                                    <span style={{color: "#333", fontWeight: 'bold', fontSize: 30}}>{job.corporation}</span>
                                    <span style={{color: "#333", fontSize: 20, marginLeft: 30, marginRight: 30}}>{job.timestamp}</span>
                                </div>

                                <span style={{color: "#333", fontSize: 20, marginBottom: 20, marginLeft: 20, marginRight: 20}}>
                                    {job.occupation}
                                </span>

                                {job.tasks.map((task) => (
                                    <span style={{color: "#333", marginLeft: 30, marginRight: 30, fontSize: 14, marginBottom: 5}}>{i % 2 === 0 ? ("- "+task):(task+" -")}</span>
                                ))}

                                <span style={{color: "blue", cursor: 'pointer', textDecoration: "underline" , marginLeft: 40, marginRight: 40, fontSize: 14, marginBottom: 15, marginTop: 30}}>show projects</span>
                            </motion.div>
                        </InView>
                    ))}
                </div>
            </div>
        )
    }
}

const s2p = (state: IStore) => ({
    dims: state.dims
});

const d2p = (dispatch: (action: actionTypes) => void) => ({});

export default connect(s2p, d2p)(Element);
