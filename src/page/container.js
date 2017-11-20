import React, { Component } from 'react'

export default class Container extends Component {
	render(){
		const { extraText } = this.props;
	    return (
	      	<div>
	        	<h1>{extraText ? extraText : '缺省的一级标题'}</h1>
	        	{this.props.children}
	      	</div>
	    )
  	}
}