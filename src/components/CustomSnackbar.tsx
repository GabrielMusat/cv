import React from 'react';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar, {SnackbarProps} from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import {connect} from "react-redux";
import {IDims} from "../types";

const variantIcon = {
    "success": CheckCircleIcon,
    "warning": WarningIcon,
    "error": ErrorIcon,
    "info": InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
}));

interface CustomSnackbarProps {
    className?: string
    message: string
    onClose: any
    variant: "success" | "error" | "info" | "warning"
    dims: IDims
}


function MySnackbarContentWrapper(props: CustomSnackbarProps) {
    const classes = useStyles1();
    const { className, message, onClose, variant, dims: {width: w, height: h}, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" style={{ display: 'flex', alignItems: 'center', fontSize: 0.015*h}}>
                    <Icon style={{ fontSize: 0.03*h, opacity: 0.9, marginRight: w*0.005, }} />
                    {message}
                </span>
            }
            action={[
                <IconButton style={{padding: 0}} key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon style={{ fontSize: 0.03*h}} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}
const s2p = (state: IStore) => ({
    dims: state.dims
});

const ConnectedCustomSnackBar = connect(s2p)(MySnackbarContentWrapper)


interface ICustomSnackbarState {
    open: boolean
    message: string
    variant: "success" | "error" | "info" | "warning"
}

interface ICustomSnackbarProps extends SnackbarProps{
    variant: "success" | "error" | "info" | "warning"
}

class CustomSnackbar extends React.Component<ICustomSnackbarProps, ICustomSnackbarState>{
    constructor(props: ICustomSnackbarProps) {
        super(props);
        this.state = {
            open: false,
            message: "",
            variant: "info",
        };
    }

    shouldComponentUpdate(nextProps: Readonly<ICustomSnackbarProps>, nextState: Readonly<{}>, nextContext: any): boolean {
        if (!this.props.open && nextProps.open && nextProps.message != null) {
            this.setState({open: nextProps.open, message: nextProps.message.toString(), variant: nextProps.variant})
        } else if (this.props.open && !nextProps.open) {
            this.setState({open: false})
        } else if (this.props.open && nextProps.open && (nextProps.message != null) && (this.props.message !== nextProps.message)) {
            this.setState({open: false})
            const state = {open: nextProps.open, message: nextProps.message.toString(), variant: nextProps.variant}
            setTimeout(() => this.setState(state), 500)
        }

        return true;
    }

    render() {
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={this.state.open}
                autoHideDuration={this.props.autoHideDuration}
                onClose={this.props.onClose}
            >
                <ConnectedCustomSnackBar
                    onClose={this.props.onClose}
                    variant={this.state.variant}
                    message={this.state.message}
                />
            </Snackbar>
        );
    }
}

export default CustomSnackbar;
