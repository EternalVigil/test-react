class Chatbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [], text: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
}