import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Content from './components/content/Content';
import { useDarkMode } from './styles/darkMode';
import Toggle from './components/toggle/Toggle';
import { darkTheme, GlobalStyles, lightTheme } from './styles/globalStyles';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SingleBlog } from './components/blogs/SingleBlog';
import { CreateBlog } from './components/blogs/CreateBlog';

const Container = styled.div`
	max-width: 50%;
	margin: 8rem auto 2rem;
	@media screen and (max-width: 786px) {
		max-width: 90%;
		margin: 6rem auto 2rem;
	}
`;

function App() {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	console.log(theme);
	return (
		// <Navbar />
		<Router>
			<ThemeProvider theme={themeMode}>
				<Container>
					<GlobalStyles />
					<Toggle theme={theme} toggleTheme={toggleTheme} />
					<Switch>
						<Route exact path="/">
							<Content />
							<Footer />
						</Route>
                        <Route path="/blogs/:slug" component={SingleBlog} />
						<Route path="/blog/create" component={CreateBlog} />
					</Switch>
				</Container>
			</ThemeProvider>
		</Router>
	);
}

export default App;
