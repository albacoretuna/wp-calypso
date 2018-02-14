/** @format */
/**
 * External dependencies
 */
import React from 'react';
import { translate } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Stream from 'reader/stream';
import EmptyContent from './empty';
import DocumentHead from 'components/data/document-head';

const title = translate( 'Recommended Posts' );
const documentTitle = translate( '%s ‹ Reader', { args: this.title } );

class RecommendationPostsStream extends React.Component {
	render() {
		const emptyContent = <EmptyContent />;

		return (
			<Stream
				{ ...this.props }
				listName={ title }
				emptyContent={ emptyContent }
				showFollowInHeader={ true }
			>
				<DocumentHead title={ documentTitle } />
			</Stream>
		);
	}
}

export default RecommendationPostsStream;
