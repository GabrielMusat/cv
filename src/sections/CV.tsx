import {connect} from "react-redux";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import React, {CSSProperties} from "react";
import {config} from "../config";
import {IDims} from "../types";

import PersonalData from "../components/PersonalData";
import SelfImage from "../components/SelfImage";
import Technologies from "../components/Technologies";
import Job from "../components/Job";

interface IProps {
    style?: CSSProperties
    dims: IDims
}

interface IState {

}

class Element extends React.Component<IProps, IState> {
    render() {
        const {style, dims} = this.props
        const {name, residency, birthdate, linkedin, email, github, technology} = config
        return (
            <div style={{...style}}>
                <div style={{display: "flex", alignSelf: "center", alignItems: "stretch", flexDirection: "column", width: '60%'}}>
                    <div style={{display: "flex", alignSelf: "center", alignItems: "stretch", flexDirection: "column", width: '100%', minHeight: dims.height}}>
                        <PersonalData {...{name, residency, birthdate, linkedin, email, github}}/>
                        <SelfImage size={300} />
                        <Technologies style={{backgroundColor: "#eee", borderRadius: 40, marginTop: 80}} technology={technology}/>
                    </div>

                    {Object.entries(config.jobs).map(([_, job], i) => (
                        <Job style={{margin: 40, width: '80%'}} job={job} side={i % 2 === 0 ? 'left': 'right'}/>
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
