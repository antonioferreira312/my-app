import { makeStyles } from '@material-ui/core';

const drawerWidth = 200;

export const myUseStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		borderBottom: `1px solid ${theme.palette.detail.main}`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginLeft: -15,
		alignItems: 'flex-start !important',
		alignSelf: 'center',
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		background: `${theme.palette.background.default} !important`,
	},
	drawerOpen: {
		borderRight: `1px solid ${theme.palette.detail.main} !important`,
		width: drawerWidth,
		background: 'inherit',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		borderRight: `1px solid ${theme.palette.detail.main} !important`,
		background: 'inherit',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(7) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 0),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
	button: {
		alignSelf: 'flex-end',
	},
	divider:{
		color: theme.palette.detail.main,
	}
}));