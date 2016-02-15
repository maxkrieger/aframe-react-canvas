//Draws a blue square. Fully compatible with ngokevin/aframe-react-boilerplate
import AFrame from "aframe-core";
import {Scene, Entity} from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";
import Canvas from "../index";

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			frame: ""
		};
	}
	componentDidMount() {
		let ctx = this.refs.canvas.get();
		ctx.fillStyle = "blue";
		ctx.fillRect(100, 50, 100, 100);
		this.setState({frame: this.refs.canvas.getFrame()});
	}
	render() {
		return (
			<Scene>
				<Entity geometry={{
					primitive: "sphere",
					radius: 5000
				}} material={{
					color: "#E8E8E8",
					shader: "flat"
				}} scale="1 1 -1"/>

				<Canvas ref="canvas" width={3} height={2} resolution={100} position="0 1 0" frame={this.state.frame} />
			</Scene>
		);
	}
}

ReactDOM.render(<Square/>, document.querySelector(".scene-container"));
