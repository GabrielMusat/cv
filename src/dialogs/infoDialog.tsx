import {connect} from "react-redux";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import React, {CSSProperties} from "react";
import {Dialog, Slide} from "@material-ui/core";
import {IDialog} from "../types";

interface IProps {
    style?: CSSProperties
    dialog: IDialog | null
    close: () => void
}

interface IState {

}

class Element extends React.Component<IProps, IState> {
    render() {
        const {style, close, dialog} = this.props
        return (
            <Dialog TransitionComponent={Slide} onClose={close} open={dialog != null} PaperProps={{style}}>
                {dialog &&
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: 20}}>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img height={40} style={{margin: 5}} src={require('../icons/' + dialog?.techName + '.png')}/>
                        <span style={{color: "#333",fontSize: 20, fontWeight: "bold"}}>{"how "+dialog?.techName + ' was used in ' + dialog?.project}</span>
                    </div>
                    <span style={{margin: 20}}>
                        {dialog?.techPurpose}
                    </span>
                </div>}
            </Dialog>
        )
    }
}

const s2p = (state: IStore) => ({
    dialog: state.nav.dialog
});

const d2p = (dispatch: (action: actionTypes) => void) => ({
    close: () => dispatch({type: "close-dialog"})
});

export default connect(s2p, d2p)(Element);
