import {connect} from "react-redux";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import React, {CSSProperties} from "react";

interface IProps {
    style?: CSSProperties
}

interface IState {

}

class Element extends React.Component<IProps, IState> {
    render() {
        const {style} = this.props
        return (
            <div style={{...style}}>
                CV
            </div>
        )
    }
}

const s2p = (state: IStore) => ({});

const d2p = (dispatch: (action: actionTypes) => void) => ({});

export default connect(s2p, d2p)(Element);
