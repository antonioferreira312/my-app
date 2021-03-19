/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-types */
import { ThemeProvider } from '@material-ui/core';
import React, { Dispatch, SetStateAction } from 'react';
import { themePrimary, themeSecondary } from '../styles/theme';

interface ThemeContextProps {
  themeCurrent: boolean;
  setCurrentTheme: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
	themeCurrent: true,
} as ThemeContextProps);

export const MyThemeProvider: React.FC = ({ children }) => {
	const [currentTheme, setCurrentTheme] = React.useState<boolean>(true);
	let theme: Object;
	if (currentTheme === true) {
		theme = themePrimary;
	} else {
		theme = themeSecondary;
	}
	return (
		<ThemeContext.Provider
			value={{
				themeCurrent: currentTheme,
				setCurrentTheme,
			}}
		>
			<ThemeProvider theme={ theme }>{ children }</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export const setMyTheme = () => React.useContext(ThemeContext);
