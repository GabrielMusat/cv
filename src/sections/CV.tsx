import {connect} from "react-redux";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import React, {CSSProperties} from "react";
import {config} from "../config";
import {IDims, INotification} from "../types";

import PersonalData from "../components/BasicInfo";
import SelfImage from "../components/SelfImage";
import Technologies from "../components/Technologies";
import Job from "../components/Job";
import Education from "../components/Education";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {motion} from "framer-motion";

interface IProps {
    style?: CSSProperties
    dims: IDims
    notify: (notification: INotification) => void
}

interface IState {
}

class Element extends React.Component<IProps, IState> {
    componentDidMount() {
        const timeout: NodeJS.Timeout = setTimeout(() => this.props.notify({message: "You can scroll down to see job experience", variant: "info"}), 10000)
        window.addEventListener("scroll", () => clearTimeout(timeout))
    }

    render() {
        const {style, dims: {width: w, height: h}} = this.props
        const {basicInfo, technology, languages, education, job, jobs, mainPhoto} = config
        return (
            <div style={{...style}}>
                <div style={{display: "flex", alignSelf: "center", alignItems: "stretch", flexDirection: "column", width: 0.7*w}}>
                    <div style={{display: "flex", alignSelf: "center", alignItems: "stretch", justifyContent: "space-between", flexDirection: "column", width: '100%', minHeight: h}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1}}>
                            <PersonalData transition={{duration: 1.2, delay: 0.1}} style={{borderRadius: 0.03*h, marginTop: 0.05*h, marginBottom: 0.05*h, width: 0.15*w}} basicInfo={basicInfo}/>
                            <SelfImage transition={{duration: 0.6, delay: 0.7}} style={{alignSelf: "flex-end", marginBottom: 0.05*h}} size={h*0.3} mainPhoto={mainPhoto}/>
                            <Education transition={{duration: 1.2, delay: 0.1}} style={{borderRadius: 0.03*h, marginTop: 0.05*h, marginBottom: 0.05*h, width: 0.15*w}} languages={languages} education={education}/>
                        </div>
                        <Technologies transition={{duration: 1.2, delay: 0}} style={{alignSelf: "center", backgroundColor: "#eee", borderRadius: 0.05*h}} job={job} technology={technology}/>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.4}} style={{alignSelf: "center"}}>
                            <ExpandMore style={{color: '#eee', margin: 0.02*h, fontSize: 0.05*h, cursor: "pointer"}} onClick={() => window.scrollTo(0, h)}/>
                        </motion.div>
                    </div>

                    <span style={{color: '#eee', fontSize: 0.07*h, fontWeight: "bold", alignSelf: "center"}}>Professional experience</span>

                    {jobs.map((job, i) => (
                        <Job style={{margin: 0.04*h, width: '80%'}} job={job} side={i % 2 === 0 ? 'left': 'right'}/>
                    ))}
                    <ExpandLess style={{color: '#eee', margin: 0.02*h, fontSize: 0.05*h, cursor: "pointer", alignSelf: "center"}} onClick={() => window.scrollTo(0, 0)}/>
                </div>
            </div>
        )
    }
}

const s2p = (state: IStore) => ({
    dims: state.dims
});

const d2p = (dispatch: (action: actionTypes) => void) => ({
    notify: (notification: INotification) => dispatch({type: "notify", notification})
});

export default connect(s2p, d2p)(Element);
