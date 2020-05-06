import React, {CSSProperties} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {IconButton} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {InView} from "react-intersection-observer";
import {config} from "../config";

interface IProps {
    style?: CSSProperties
    side: "left" | "right"
    job: typeof config.jobs.job1
}

interface IState {
    view: boolean
    selected: boolean
}

class Element extends React.Component<IProps, IState> {
    state = {
        view: false,
        selected: false
    }
    render() {
        const {style, side, job} = this.props
        const {view, selected} = this.state
        return (
            <InView
                style={{alignSelf: side === "left" ? "flex-start": "flex-end", ...style}}
                as={'div'}
                onChange={(inView: boolean) => this.setState({view: inView})}
            >
                <motion.div
                    animate={{left: view ? 0:(side === "left" ? -1:1)*window.innerWidth}}
                    transition={{duration: 1}}
                    style={{
                        display: "flex",
                        position: "relative",
                        backgroundColor: "#eee",
                        flexDirection: "column",
                        alignItems: side === "left"  ? "flex-start": "flex-end",
                        borderRadius: 20,
                        boxShadow: "1px 1px 3px black"
                    }}
                >
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img alt={''} style={{margin: 20}} height={60} src={job.logo} />
                        <span style={{color: "#333", fontWeight: 'bold', fontSize: 30}}>{job.corporation}</span>
                        <span style={{color: "#333", fontSize: 20, marginLeft: 30, marginRight: 30}}>{job.timestamp}</span>
                    </div>

                    <div style={{display: "flex", flexDirection: side === "left"  ?"row": "row-reverse", alignItems: "center"}}>
                        <span style={{color: "#333", fontSize: 20, marginLeft: 20, marginRight: 20}}>{job.occupation}</span>
                        <IconButton onClick={() => this.setState({selected: !selected})}>
                            {selected ? <ExpandLess style={{color: 'black'}}/>:<ExpandMore style={{color: 'black'}}/>}
                        </IconButton>
                    </div>
                    <AnimatePresence>
                        {selected
                            ?<div style={{display: 'flex', flexDirection: "column", alignItems: side === "left"  ? "flex-start": "flex-end"}}>
                                {job.tasks.map((task, j) =>
                                    <motion.span
                                        initial={{height: 0, opacity: 0}}
                                        animate={{height: 16, opacity: 1}}
                                        exit={{height: 0, opacity: 0}}
                                        transition={{delay: 0.05*j}}
                                        style={{color: "#333", marginLeft: 30, marginRight: 30, fontSize: 14, marginBottom: 5}}
                                    >
                                        {side === "left"  ? ("- "+task):(task+" -")}
                                    </motion.span>)}</div>
                            :null
                        }
                    </AnimatePresence>

                    <span style={{color: "blue", cursor: 'pointer', textDecoration: "underline" , marginLeft: 40, marginRight: 40, fontSize: 14, marginBottom: 15, marginTop: 30}}>show projects</span>
                </motion.div>
            </InView>
        )
    }
}


export default Element;
