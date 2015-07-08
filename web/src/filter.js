function init(React){

	var Filter = React.createClass({

		dealChange:function(){
			var self = this,
				userInput = React.findDOMNode(self.refs.keywordInput).value;

			self.props.onChangeKeyword && self.props.onChangeKeyword.call(null,userInput);
		},
		setFocus:function(){
			var self = this;
			React.findDOMNode(self.refs.keywordInput).focus();
		},
		componentDidUpdate:function(){
			this.setFocus();
		},
		render:function(){
			var self = this;

			return (
				<div>
					<h4 className="subTitle">Log Filter</h4>

					<div className="filterSection">
						<form className="uk-form">
							<input className="uk-form-large" ref="keywordInput" onChange={self.dealChange} type="text" placeholder="keywords or /^regExp$/" width="300"/>
						</form>
					</div>
					<dl class="uk-description-list-horizontal">
					    <dt>wrap your RegExp between two slashes</dt>
					    <dd>
						    e.g. <br />
						    type <strong>/id=\d{3}/</strong> will give you all the logs containing <strong>id=123</strong>
					    </dd>
					</dl>
				</div>
			);
		},
		componentDidMount:function(){
			this.setFocus();
		}
	});

	return Filter;
}

module.exports.init = init;