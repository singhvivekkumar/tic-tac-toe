import React from "react";

interface BlockProps {
	value?: string | null ;
	onClick?: () => void;
}

const Block: React.FC<BlockProps> = (props) => {
	return (
		<button className=" cursor-pointer w-full h-full " onClick={props?.onClick} >
			{ props?.value }
		</button>
	);
};

export default Block;
