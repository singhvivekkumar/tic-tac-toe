import React, { useState } from "react";
import Block from "./Block";

function checkWinner(array: any[]) {
	const win = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 5],
	];
	for (let index = 0; index < win.length; index++) {
		const [x, y, z] = win[index];
		if (array[x] && array[x] === array[y] && array[x] === array[z]) {
			return true;
		}
	}
	return false;
}

const Board: React.FC = () => {
	const [value, setValue] = useState(Array(9).fill(null));
	const [currentTurn, setCurrentTurn] = useState("X");

	const handleBlockOnclick = (index: number) => {
		console.log("handleBlockOnclick: " + index);
		if (value[index] === null) {
			const stateCopy = Array.from(value);
			stateCopy[index] = currentTurn;
			setCurrentTurn(currentTurn === "X" ? "O" : "X");
			setValue(stateCopy);
			if (checkWinner(stateCopy)) {
				setTimeout(() => {
					alert(`winner ${currentTurn}`);
				}, 200);
			}
		} else {
			alert("Please select remaining space");
			return;
		}
	};

	console.log("workspace", value);
	return (
		<div className=" flex justify-center h-full w-full">
			<table className=" table-fixed  lg:w-1/2 h-[60vh] text-center text-2xl md:text-4xl lg:text-5xl ">
				<caption className="caption-top py-3 text-2xl">
					Tic Tac Toe.
				</caption>
				<tbody className="">
					<tr>
						<td className=" border-b-2 border-r-2 border-slate-600">
							<Block
								onClick={() => handleBlockOnclick(0)}
								value={value[0]}
							/>
						</td>
						<td className=" border-b-2 border-r-2 border-slate-600">
							<Block
								onClick={() => handleBlockOnclick(1)}
								value={value[1]}
							/>
						</td>
						<td className=" border-b-2 border-slate-600">
							<Block
								onClick={() => handleBlockOnclick(2)}
								value={value[2]}
							/>
						</td>
					</tr>
					<tr>
						<td className=" border-b-2 border-r-2 border-slate-600">
							<Block
								onClick={() => handleBlockOnclick(3)}
								value={value[3]}
							/>
						</td>
						<td className=" border-b-2 border-r-2 border-slate-600">
							<Block
								onClick={() => handleBlockOnclick(4)}
								value={value[4]}
							/>
						</td>
						<td className=" border-b-2 border-slate-600">
							<Block
								onClick={() => handleBlockOnclick(5)}
								value={value[5]}
							/>
						</td>
					</tr>
					<tr>
						<td className="  border-r-2 border-slate-600">
							<Block
								onClick={() => handleBlockOnclick(6)}
								value={value[6]}
							/>
						</td>
						<td className=" border-r-2 border-slate-600">
							<Block
								onClick={() => handleBlockOnclick(7)}
								value={value[7]}
							/>
						</td>
						<td className=" ">
							<Block
								onClick={() => handleBlockOnclick(8)}
								value={value[8]}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Board;
