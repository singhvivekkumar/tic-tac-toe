import React from "react";

const Header: React.FC = () => {
	return (
		<div className=" flex justify-between md:justify-around items-center h-[15%] text-xl border-2  ">
			<span className=" font-bold text-red-400 ">Tic Tac Toe</span>
			<span className=" font-semibold">Design By Vivek</span>
		</div>
	);
};

export default Header;
