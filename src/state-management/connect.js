import React from 'react';
import Context from './context';
import bindActionCreators from './bindActionCreators';

const connect = (
	mapStateToProps,
	mapDispatchToProps
) => ConnectedComponent => props => (
	<Context.Consumer>
		{context => {
			if (mapStateToProps != null && typeof mapStateToProps !== 'function') {
				throw new Error(
					'mapStateToProps should be either function or null/undefined'
				);
			}

			const propsFromContext = mapStateToProps ? mapStateToProps(context) : {};

			const actions = mapDispatchToProps
				? bindActionCreators(mapDispatchToProps, context.dispatch)
				: {};

			return (
				<ConnectedComponent {...props} {...propsFromContext} {...actions} />
			);
		}}
	</Context.Consumer>
);

export default connect;
