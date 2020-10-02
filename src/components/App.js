import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// we can if we want to do navigation back and forth b/w the pages of our apps using traditional <a> tags but that is a bad approach. REFER README FILE FOR WHY
const PageOne = () => {
	return (
		<div>
			PageOne
			{/* <a href='/pagetwo'>navigate to page two</a> */}
			<Link to="/pagetwo">navigate to page two</Link>
		</div>
	);
};

const PageTwo = () => {
	return (
		<div>
			PageTwo
			<button>click me</button>
			{/* <a href='/'>navigate to page one</a> */}
			<Link to="/">navigate to page one</Link>
		</div>
	);
};

const App = () => {
	return (
		<BrowserRouter>
			<div>
				{/* the path is the page url 
						component is used to say display this page
						exact is used to make sure that not all components gets rendered
				*/}
				<Route path="/" exact component={PageOne} />
				<Route path="/pageTwo" component={PageTwo} />
			</div>
		</BrowserRouter>
	);
};

export default App;
