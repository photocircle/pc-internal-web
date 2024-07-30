import { ColDef, RowClassParams, RowClickedEvent } from "ag-grid-community"
import React from "react"
import { AgGridReact } from "ag-grid-react"
import { isEqual } from "lodash"
import { Circle, CircleMetadata, MemberMetadata, Profile } from "../generated/web_app_grpc_pb.js"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"

interface NemoizedGridProps {
    rowData: MemberMetadata.AsObject[] | Circle.AsObject[] | Profile.AsObject[] | CircleMetadata.AsObject[]
    columnDefs: ColDef[];
    onRowClicked?: (event: RowClickedEvent) => void;
    getRowClass?: (params: RowClassParams) => string;
    rowHeight?: number;
    suppressDragLeaveHidesColumns?: boolean;
    rowSelection?: "single" | "multiple" | undefined;
}

const MemoizedAgGridReact: React.FC<NemoizedGridProps> = React.memo(
    (props: NemoizedGridProps) => (
        <AgGridReact
            rowData={props.rowData}
            columnDefs={props.columnDefs}
            onRowClicked={props.onRowClicked}
            getRowClass={props.getRowClass}
            rowHeight={props.rowHeight}
            suppressDragLeaveHidesColumns={props.suppressDragLeaveHidesColumns}
            rowSelection={props.rowSelection}
        />
    ),
    (prevProps, nextProps) => {
        // if the row data is the same, don't re-render
        if (isEqual(prevProps.rowData, nextProps.rowData)) {
            return true
        }

        return false
    },
)

export default MemoizedAgGridReact