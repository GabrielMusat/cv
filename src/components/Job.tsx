import React, {CSSProperties} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Button, IconButton} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {InView} from "react-intersection-observer";
import {config} from "../config";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import {IDialog, INotification} from "../types";
import {connect} from "react-redux";


let notifyFlag = true

interface IProps {
    style?: CSSProperties
    side: "left" | "right"
    job: typeof config.jobs.job1
    openDialog: (data: IDialog) => void
    notify: (notification: INotification) => void
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

    shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean {
        if (notifyFlag && nextState.view) {
            notifyFlag = false
            setTimeout(() => this.props.notify({message: "TIP: you can click on a technology Icon inside a job to see how it was implemented", variant: "info"}), 2000)
        }
        return true
    }

    render() {
        const {style, side, job, openDialog} = this.props
        const {view, selected} = this.state
        return (
            <InView
                style={{alignSelf: side === "left" ? "flex-start": "flex-end", ...style}}
                as={'div'}
                onChange={(inView: boolean) => this.setState({view: inView})}
            >
                <motion.div
                    animate={{
                        left: view ? 0:(side === "left" ? -1:1)*window.innerWidth/2,
                        transform: view ? "perspective(500px) rotateY(0deg) scale(1)": `perspective(500px) rotateY(${(side === "left" ? "-":"")}80deg) scale(0.5)`,
                    }}
                    transition={{duration: 1}}
                    style={{
                        display: "flex",
                        position: "relative",
                        backgroundColor: "#eee",
                        flexDirection: "column",
                        alignItems: side === "left"  ? "flex-start": "flex-end",
                        borderRadius: 20,
                        boxShadow: "1px 1px 3px black",
                        transformStyle: "preserve-3d"
                    }}
                >
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img alt={''} style={{margin: 15}} height={60} src={job.logo} />
                        <span style={{color: "#333", fontWeight: 'bold', fontSize: 30}}>{job.corporation}</span>
                        <span style={{color: "#333", fontSize: 20, marginLeft: 30, marginRight: 30}}>{job.timestamp}</span>
                        <span style={{color: "#333", fontSize: 20, marginLeft: 20, marginRight: 20}}>{job.occupation}</span>
                    </div>

                    <div style={{width: '90%', height: 1, background: "linear-gradient(90deg, #eee 0%, #aaa 35%, #aaa 65%, #eee 100%)", alignSelf: 'center', marginBottom: 30}}></div>


                    {job.projects.map((project) => (
                        <div key={project.name} style={{display: "flex", flexDirection: side === 'left'? "row":"row-reverse", alignItems: "center", marginLeft: 20, marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: side === 'left'? "flex-start":"flex-end"}}>
                                <span style={{color: "#333", fontSize: 18, fontWeight: "bold", marginLeft: 10, marginRight: 10}}>{project.name}</span>
                                <span style={{color: "#333", fontSize: 14, marginLeft: 10, marginRight: 10}}>{project.subtitle}</span>
                            </div>

                            {project.technologies.map((tech) => (
                                <IconButton key={project.name+'_'+tech.name} style={{ cursor: "pointer", padding: 0}}
                                            onClick={() => openDialog({project: project.name, techName: tech.name, techPurpose: tech.purpose})}>
                                    <img style={{margin: 5}} height={30} src={require('../icons/'+tech.name+'.png')}/>
                                </IconButton>
                            ))}
                        </div>
                    ))}

                    <Button style={{alignSelf: "center"}} onClick={() => this.setState({selected: !selected})}>
                        <span style={{color: "#333", marginLeft: 7, marginRight: 7, fontSize: 12}}>Tasks</span>
                        {selected ? <ExpandLess style={{color: 'black'}}/>:<ExpandMore style={{color: 'black'}}/>}
                    </Button>
                    <AnimatePresence>
                        {selected
                            ?<div style={{display: 'flex', flexDirection: "column", alignItems: "center", alignSelf: "center"}}>
                                {[...job.tasks, ""].map((task, j) =>
                                    <motion.span
                                        initial={{height: 0, opacity: 0}}
                                        animate={{height: 20, opacity: 1}}
                                        exit={{height: 0, opacity: 0}}
                                        transition={{delay: 0.05*j}}
                                        style={{color: "#333", marginLeft: 30, marginRight: 30, fontSize: 14}}
                                    >
                                        {task}
                                    </motion.span>)}</div>
                            :null
                        }
                    </AnimatePresence>
                </motion.div>
            </InView>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
});

const mapDispatchToProps = (dispatch: (action: actionTypes) => void ) => ({
    openDialog: (data: IDialog) => dispatch({type: "open-dialog", data}),
    notify: (notification: INotification) => dispatch({type: "notify", notification})
});

const ConnectedElement = connect(mapStateToProps, mapDispatchToProps)(Element);


export default ConnectedElement;
