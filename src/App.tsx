import React, {CSSProperties} from 'react';
import {IStore} from "./store";
import {actionTypes} from "./store/actionTypes";
import {connect} from "react-redux";
import {IDims, INotification, IStage} from "./types";
import "./animations.css"
import "./App.css"
import CV from "./sections/CV";
import InfoDialog from "./dialogs/infoDialog"
import CustomSnackbar from "./components/CustomSnackbar";


interface IProps {
    dims: IDims
    stage: IStage
    closeNotification: () => void
    notification: null | INotification
    selectStage: (stage: IStage) => void
}

interface IState {
}

const duration: number = 3

class App extends React.Component<IProps, IState> {

    componentDidMount() {
        const {selectStage} = this.props
        selectStage("welcome")
        setTimeout(() => selectStage("cv"), duration * 1000)
    }

    renderWelcomeStage(style: CSSProperties) {
        return <div style={style}>
            <span style={{animation: "blink "+duration.toString()+"s linear", fontWeight: 'bold', textAlign: "center", fontSize: 0.04*this.props.dims.height, margin: 0.03*this.props.dims.height, color: 'white'}}>
                {"Welcome to Gabriel Musat´s CV"}
            </span>
        </div>
    }

    renderTurnTheDeviceStage(style: CSSProperties) {
        return <div style={style}>
            <span style={{animation: "blink "+duration.toString()+"s linear", fontWeight: 'bold', textAlign: "center", fontSize: 0.04*this.props.dims.height, margin: 0.03*this.props.dims.height, color: 'white'}}>
                {"Turn the device for a better experience"}
            </span>
        </div>
    }

    renderCVStage(style: CSSProperties) {
        return <CV style={style}/>
    }

    selectStage() {
        const color1 = "rgb(35,136,191)" //"#96b8ff"
        const color2 = "rgb(7,33,98)" //"#273986"
        const color3 = "rgb(1,5,33)" //"#040e2b"
        const style: CSSProperties = {
            width: '100%',
            display: "flex",
            flexDirection: "column",
            overflowX: 'hidden',
        }
        if (this.props.dims.height > this.props.dims.width) {
            return this.renderTurnTheDeviceStage({
                ...style,
                height: this.props.dims.height,
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(180deg, "+color1+" 0%, "+color2+" 100%)"
            })
        }
        switch (this.props.stage) {
            case "welcome":
                return this.renderWelcomeStage({
                    ...style,
                    height: this.props.dims.height,
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(180deg, "+color1+" 0%, "+color2+" 100%)"
                })
            case "cv":
                return this.renderCVStage({
                    ...style,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    backgroundAttachment: "fixed",
                    background: "linear-gradient(180deg, "+color1+" 0%, "+color2+" 40%, "+color3+" 100%)"
                })
        }
    }

    render() {
        const {dims, notification, closeNotification} = this.props
        const {width} = dims
        return (
            <div style={{width, display: "flex", flexDirection: "column", alignItems: "stretch"}}>
                <InfoDialog/>
                <CustomSnackbar
                    open={notification != null}
                    variant={notification ? notification.variant:'info'}
                    message={notification && notification.message}
                    autoHideDuration={null}
                    onClose={closeNotification}
                />
                {this.selectStage()}
            </div>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    dims: state.dims,
    stage: state.nav.stage,
    notification: state.nav.notification,
});

const mapDispatchToProps = (dispatch: (action: actionTypes) => void ) => ({
    selectStage: (stage: IStage) => dispatch({type: "set-stage", stage}),
    closeNotification: () => dispatch({type: "notify", notification: null})
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp
