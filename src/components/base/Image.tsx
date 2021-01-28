import * as React from 'react';
import styled from 'styled-components';
interface IRecipeProps {
	src?: string;
	height?: string;
	width?: string;
  }
  

export default class Image extends React.Component<IRecipeProps> {

	render() {

		const {src, height, width} = this.props;
		const ImageBox = styled.div`
		background-image: url(${src}); 
		width: ${width}px;
		height: ${height}px
		`;
		return (
			<>
			<ImageBox/>
			</>
		);
	}
	
};
