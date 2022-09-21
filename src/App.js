import './App.css';

function App() {
 return (
	<div>
		<h1 style={{fontSize:'50px', marginLeft:'30px'}}>Getting Started</h1>
		<p style={{fontSize:'20px', marginLeft:'30px',color:'rgba(0,0,0,0.5)'}}>This page is an overview of the React documentation and related resources.</p>
		<h4 style={{margin:'30px'}}>React <small style={{color:'rgba(0,0,0,0.5)', fontSize:'15px'}}>is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</small></h4>

		<div  className="card">
		<article className="blog">
			<Blog one="Try React" two="Jane Austen"></Blog>
			<p style={{fontSize:'15px',color:'rgba(0,0,0,0.5)'}}>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.<br></br>
			If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.</p>
		</article>

		<article className="blog">
			<Blog one="Create a New React App" two="William Blake"></Blog>
			<p style={{fontSize:'15px',color:'rgba(0,0,0,0.5)'}}>When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!
			As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.</p>
		</article>

		<article className="blog">
			<Blog one="Learn React" two="Geoffrey Chaucer"></Blog>
			<p style={{fontSize:'15px',color:'rgba(0,0,0,0.5)'}}>People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.
			If you prefer to learn by doing, start with our practical tutorial.
			If you prefer to learn concepts step by step, start with our guide to main concepts.
			Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.
			</p>
		</article>

		<article className="blog">
			<Blog one="JavaScript Resources" two="John Donne"></Blog>
			<p style={{fontSize:'15px',color:'rgba(0,0,0,0.5)'}}>The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.
			We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.</p>
		</article>
		</div>

		<Footer></Footer>
	</div>
		
  );
}


function Blog(props){
	const headerStyle={
		textTransform:'uppercase',
		color: '#55779D'
	}
	return (
		<div>
			<h1 style={headerStyle}>Heading: {props.one}</h1>
			<p><i style={{color:'red'}}>Author: </i>{props.two} </p>
		</div>
	)
}

function Footer(){
	return (
		<div>
			<p style={{textAlign: 'center', backgroundColor: '#f2f2f2', padding:'20px'}}>Copywrite 2022 All right reserved</p>
		</div>
	)
}

export default App;
