const React = require('react'),
	ReactDOM = require('react-dom')

const app = function() {

	const HomeView = React.createClass({
		render: function() {
			return (
				<div id="wrapper">
					<Header />
					<Content />
					<Sticky />
				</div>
				)
		}
	})

	const Header = React.createClass({
		render: function(){
			return (
				<div id="header">
					<img id="hero-img" src="http://magentanova.github.io/html-intro-1/images/houston.jpg"/>
					<img id="logo"src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
				</div>
				)
		}
	})


	const Content = React.createClass({
		render: function(){
			return(
				<div id="content">
					<div id="leftCol">
						<h3> The Iron Yard | Houston </h3>
				        <p> Happenings and updates from The Iron Yard in Houston, TX </p>
				        <hr/>
				        <p> SEARCH </p>
				        <input type="text" name="search" placeholder="Search Keywords"/>
				    </div>
				    <div id="rightCol">
						<h2> September 22 Starts a New Class of The Iron Yard Houston Students </h2>
				        <p> By Brian Dorton, Campus Director at The Iron Yard Houston </p>
				        <img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
				        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reiciendis natus architecto nostrum aperiam repudiandae possimus a delectus expedita atque commodi aliquam corrupti voluptas nemo voluptate vero minus, voluptatibus fugiat.</p>
				    </div>
				</div>
				)

		}
	})

	const Sticky = React.createClass({
		render: function(){
			return (
				<div id="sticky-box">
					<div id="sticky-title">
					    <strong> Never miss a post!</strong> <hr/>
					  </div>
					<div id="twitter">
						<div id="stick-logo">
							<img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
						</div>
						<div id="twitter-account">
						<p><strong>tiyhouston</strong><br/><span id="sticky-name">The Iron Yard | Houston </span></p>
						</div>
						<div id="twitter-button">
						<a href="https://twitter.com/TheIronYard" class="twitter-follow-button" data-show-count="false" data-show-screen-name="false">Follow @TheIronYard</a>
						</div>
					</div>
				</div>
				)
			
		}
	})

	ReactDOM.render(<HomeView/>,document.querySelector('.container'))
}

app()