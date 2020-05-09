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
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

interface CustomSnackbarProps {
    className?: string
    message: string
    onClose: any
    variant: "success" | "error" | "info" | "warning"
}


function MySnackbarContentWrapper(props: CustomSnackbarProps) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}


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
        }
        if (this.props.open && !nextProps.open) {
            this.setState({open: false})
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
                <MySnackbarContentWrapper
                    onClose={this.props.onClose}
                    variant={this.state.variant}
                    message={this.state.message}
                />
            </Snackbar>
        );
    }
}

export default CustomSnackbar;
