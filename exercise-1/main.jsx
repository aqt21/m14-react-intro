// Main.jsx file

// Create a simple component
var MyComponent = React.createClass({
    // In your render function...
    render:function() {
        // Set variables `name` and `interest`

        // Return div with two paragraphs
        return(
        	<div>
        		<p>Hi my name is {this.props.name}</p>
        		<p>I am interested in {this.props.interest}</p>
    		</div>
        )
    }
});

// Render your component in the `main` section
ReactDOM.render(<MyComponent name="Andrew Tran" interest="Bouldering"/>, document.querySelector("main"));