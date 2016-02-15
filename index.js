"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Canvas = function (_React$Component) {
	_inherits(Canvas, _React$Component);

	function Canvas(props) {
		_classCallCheck(this, Canvas);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Canvas).call(this, props));

		_this.state = {
			id: "C0"
		};
		return _this;
	}

	_createClass(Canvas, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			this.setState({ id: this.makeRandomId() });
		}
	}, {
		key: "makeRandomId",
		value: function makeRandomId() {
			var next = Math.floor(Math.random() * Math.pow(10, 20));
			while (next == this.state.id) {
				next = Math.floor(Math.random() * Math.pow(10, 20));
			}
			return "C" + next;
		}
	}, {
		key: "getFrame",
		value: function getFrame() {
			this.setState({ id: this.makeRandomId() });
			return this.refs["Canvas" + this.state.id].toDataURL();
		}
	}, {
		key: "get",
		value: function get() {
			return this.refs["Canvas" + this.state.id].getContext("2d");
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"a-entity",
				null,
				_react2.default.createElement("canvas", { style: { display: "none" }, width: this.props.resolution * this.props.width, height: this.props.resolution * this.props.height, ref: "Canvas" + this.state.id }),
				_react2.default.createElement("img", { style: { display: "none" }, src: this.props.frame, id: this.state.id }),
				_react2.default.createElement("a-entity", {
					material: "src: #" + this.state.id + "; color: #FFFFFF",
					geometry: "primitive: box; depth: " + this.props.depth + "; width: " + this.props.width + "; height: " + this.props.height,
					position: this.props.position
				})
			);
		}
	}]);

	return Canvas;
}(_react2.default.Component);

Canvas.propTypes = {
	frame: _react2.default.PropTypes.string,
	width: _react2.default.PropTypes.number,
	height: _react2.default.PropTypes.number,
	depth: _react2.default.PropTypes.number,
	resolution: _react2.default.PropTypes.number,
	position: _react2.default.PropTypes.string
};
Canvas.defaultProps = {
	frame: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAIAAADytinCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iUGl4ZWxtYXRvciAzLjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjM2OTJDNzk5NkNDMTFFNUE1QzNCNDg4OTI4MUM2QkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjM2OTJDN0E5NkNDMTFFNUE1QzNCNDg4OTI4MUM2QkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MzY5MkM3Nzk2Q0MxMUU1QTVDM0I0ODg5MjgxQzZCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MzY5MkM3ODk2Q0MxMUU1QTVDM0I0ODg5MjgxQzZCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsAjUf0AACAcSURBVHja7N1rXxznfcbx4bBYtesqcWqndg7+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",
	width: 1,
	height: 1,
	depth: 0,
	resolution: 100,
	position: "0 0 -1"
};
exports.default = Canvas;
