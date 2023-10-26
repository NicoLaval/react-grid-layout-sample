import { useMemo } from "react";
import { layout } from "./layout";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./grid.css";

const Grid = ({ bLabel, resizeHandles }) => {
	const ReactGridLayout = useMemo(() => WidthProvider(RGL), []);
	return (
		<ReactGridLayout
			layout={layout}
			width={"100%"}
			cols={12}
			rowHeight={20}
			margin={[0, 0]}
			resizeHandles={resizeHandles}
		>
			<div key="A" className="box">
				A
			</div>
			<div key="B" className="box">
				{bLabel}
			</div>
		</ReactGridLayout>
	);
};

export default Grid;
