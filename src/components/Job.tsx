import React, {CSSProperties} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Button, IconButton} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {InView} from "react-intersection-observer";
import {config} from "../config";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import {IDialog, IDims, INotification} from "../types";
import {connect} from "react-redux";


let notifyFlag = true

interface IProps {
    style?: CSSProperties
    side: "left" | "right"
    job: typeof config.jobs[0]
    dims: IDims
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
        const {style, side, job, openDialog, dims: {width: w, height: h }} = this.props
        const {view, selected} = this.state
        return (
            <InView
                style={{alignSelf: side === "left" ? "flex-start": "flex-end", ...style}}
                as={'div'}
                onChange={(inView: boolean) => this.setState({view: inView})}
            >
                <motion.div
                    animate={{
                        left: view ? 0:(side === "left" ? -1:1)*w/1.8,
                        transform: view ? `perspective(${0.3*w}px) rotateY(0deg) scale(1)`: `perspective(${0.3*w}px) rotateY(${(side === "left" ? "-":"")}70deg) scale(0.4)`,
                    }}
                    transition={{duration: 1}}
                    style={{
                        display: "flex",
                        position: "relative",
                        backgroundColor: "#eee",
                        flexDirection: "column",
                        alignItems: side === "left"  ? "flex-start": "flex-end",
                        borderRadius: 0.02*h,
                        boxShadow: "1px 1px 3px black",
                        transformStyle: "preserve-3d"
                    }}
                >
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img alt={''} style={{margin: 0.015*w}} height={0.07*h} src={job.logo} />
                        <div style={{marginLeft: 0.015*w, marginRight: 0.015*w, display: "flex", flexDirection: "column"}}>
                            <span style={{color: "#333", fontWeight: 'bold', fontSize: 0.025*h}}>{job.corporation}</span>
                            <span style={{color: "#333", fontSize: 0.015*h, marginTop: 0.01*h}}>{job.timestamp}</span>
                        </div>
                        <span style={{color: "#333", fontSize: 0.025*h, marginLeft: 0.015*w, marginRight: 0.015*w}}>{job.occupation}</span>
                    </div>

                    <div style={{width: '90%', height: 1, background: "linear-gradient(90deg, #eee 0%, #aaa 35%, #aaa 65%, #eee 100%)", alignSelf: 'center', marginBottom: 0.03*h}}/>

                    {job.projects.map((project) => (
                        <div key={project.name} style={{display: "flex", flexDirection: side === 'left'? "row":"row-reverse", alignItems: "center", alignSelf: "stretch", marginLeft: 0.007*w, marginRight: 0.007*w, marginBottom: 0.01*h}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: '25%', marginLeft: 0.007*h, marginRight: 0.007*h}}>
                                <span style={{color: "#333", fontSize: 0.023*h, fontWeight: "bold", marginLeft: 0.007*h, marginRight: 0.007*h}}>{project.name}</span>
                                <span style={{color: "#333", fontSize: 0.017*h, marginLeft: 0.007*w, marginRight: 0.007*w}}>{project.subtitle}</span>
                                { project.link && <a href={project.link} target={'_blank'} style={{
                                    color: "blue",
                                    fontSize: 0.017 * h,
                                    marginLeft: 0.007 * w,
                                    marginRight: 0.007 * w
                                }}>{"link to " + project.name}</a>}
                            </div>

                            {project.technologies.map((tech) => (
                                <IconButton key={project.name+'_'+tech.name} style={{ cursor: "pointer", padding: 0}}
                                            onClick={() => openDialog({project: project.name, techName: tech.name, techPurpose: tech.purpose})}>
                                    <img alt={''} style={{margin: 0.003*w}} height={0.03*h} src={require('../icons/'+tech.name+'.png')}/>
                                </IconButton>
                            ))}
                        </div>
                    ))}

                    <Button style={{alignSelf: "center"}} onClick={() => this.setState({selected: !selected})}>
                        <span style={{color: "#333", marginLeft: 0.005*w, marginRight: 0.005*w, fontSize: 0.016*h}}>Tasks</span>
                        {selected ? <ExpandLess style={{color: 'black', fontSize: 0.016*h}}/>:<ExpandMore style={{color: 'black', fontSize: 0.016*h}}/>}
                    </Button>
                    <AnimatePresence>
                        {selected
                            ?<div style={{display: 'flex', flexDirection: "column", alignItems: "center", alignSelf: "center"}}>
                                {[...job.tasks, ""].map((task, j) =>
                                    <motion.span
                                        initial={{height: 0, opacity: 0}}
                                        animate={{height: 0.023*h, opacity: 1}}
                                        exit={{height: 0, opacity: 0}}
                                        transition={{delay: 0.05*j}}
                                        style={{color: "#333", fontSize: 0.016*h}}
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
    dims: state.dims
});

const mapDispatchToProps = (dispatch: (action: actionTypes) => void ) => ({
    openDialog: (data: IDialog) => dispatch({type: "open-dialog", data}),
    notify: (notification: INotification) => dispatch({type: "notify", notification})
});

const ConnectedElement = connect(mapStateToProps, mapDispatchToProps)(Element);


export default ConnectedElement;
