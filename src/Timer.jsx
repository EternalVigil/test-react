import React from 'react';
class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { seconds:0, totalSeconds:0, minutes:0 };
	}

	tick() {
		this.setState(prevState => ({
			seconds: (prevState.seconds + 1)%60,
			totalSeconds: prevState.totalSeconds + 1,
			minutes: Math.floor(prevState.totalSeconds/60)
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div className='timerContainer'>
				Count Up Timer: {this.state.minutes}:{this.state.seconds}
			</div>
			);
	}
}

export default Timer;