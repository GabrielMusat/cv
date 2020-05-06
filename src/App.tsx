import React, {CSSProperties} from 'react';
import {IStore} from "./store";
import {actionTypes} from "./store/actionTypes";
import {connect} from "react-redux";
import {IDims, IStage} from "./types";
import "./animations.css"
import CV from "./sections/CV";


interface IProps {
    dims: IDims
    stage: IStage
    selectStage: (stage: IStage) => void
}

interface IState {
}

const duration: number = 0

class App extends React.Component<IProps, IState> {

    componentDidMount() {
        const {selectStage} = this.props
        selectStage("welcome")
        setTimeout(() => selectStage("cv"), duration * 1000)
    }

    renderWelcomeStage(style: CSSProperties) {
        return <div style={style}>
            <span style={{animation: "blink "+duration.toString()+"s linear", fontWeight: 'bold', fontSize: 60, color: 'white'}}>
                {"Welcome to Gabriel Musat´s CV"}
            </span>
        </div>
    }

    renderCVStage(style: CSSProperties) {
        return <CV style={style}/>
    }

    selectStage() {
        const color1 = "#96b8ff"
        const color2 = "#273986"
        const color3 = "#040e2b"
        const style: CSSProperties = {
            width: '100%',
            display: "flex",
            flexDirection: "column",
            overflowX: 'hidden',
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
        const {width} = this.props.dims;
        return (
            <div style={{width, display: "flex", flexDirection: "column", alignItems: "stretch"}}>
                {this.selectStage()}
            </div>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    dims: state.dims,
    stage: state.nav.stage
});

const mapDispatchToProps = (dispatch: (action: actionTypes) => void ) => ({
    selectStage: (stage: IStage) => dispatch({type: "set-stage", stage})
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp
