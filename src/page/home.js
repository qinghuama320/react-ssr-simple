import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
	componentWillMount() {
		if (!__NODE__) {
			this.extraText = window.__initState__.extraText;
		} else {
			this.extraText = this.props.extraText; // react-router不支持给组件直接传递状态，所以在服务端取不到extraText
		}
	}

	render() {
		const extraText = this.extraText;

		return (
			<div>
				<h2>我是home页 {extraText}</h2>
				<Link to='/about'>
				    点我进about页
				</Link> 
			</div>
		);
	}
}

