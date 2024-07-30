import { ColDef, ICellRendererParams } from "ag-grid-community";
import { GroupCell, NameCellForAgGrid } from "../../common/table-utils";
import { formatLocaleDate } from "../../common/utils";

export function getMemberColumnsDev(): ColDef[] {
    return [
        {
            headerName: "Name",
            field: "displayName",
            cellRenderer: NameCellForAgGrid,
            cellRendererParams: (params: ICellRendererParams) => ({
                profile: params.data,
                isDisabled: !params.data.isActive,
            }),
            sortable: true,
            resizable: false,
            flex: 1,
            minWidth: 70,
        },
        {
            headerName: "Role",
            field: "roleId",
            sortable: true,
            resizable: false,
            width: 125,
            cellClass: "row-cell-role",
        },
        {
            headerName: "Media",
            field: "mediaCount",
            sortable: true,
            resizable: false,
            width: 72,
            cellClass: "grid-text-align-right",
            cellStyle: { textAlign: "right" },
        },
        {
            headerName: "Last Session",
            field: "lastSessionTimestamp",
            sortable: true,
            resizable: false,
            width: 139,
            cellClass: "grid-cell-ellipsis",
            cellStyle: { textAlign: "right" },
            valueFormatter: (params) => formatLocaleDate(params.data.lastSessionTimestamp),
            sort: "desc",
        }
    ]
}

export function getCircleColumnsDev(internalIdsEnabled: boolean): ColDef[] {
    return [
        {
            headerName: "Title",
            cellClass: "grid-cell-ellipsis",
            field: "title",
            sortable: true,
            resizable: false,
            flex: 1,
        },
        ...(internalIdsEnabled ? [{
            headerName: "Internal ID",
            cellClass: "grid-cell-ellipsis",
            field: "internalId",
            sortable: true,
            resizable: true,
            flex: 1,
        }] : []),
        {
            headerName: "Group",
            cellClass: "grid-cell-break-word",
            field: "groupUuid",
            sortable: false,
            resizable: true,
            cellRenderer: GroupCell,
            cellRendererParams: {
                groups: [],
                path: "circles",
            },
            width: 200,
        },
        {
            headerName: "Last Activity",
            field: "lastActivityTimestamp",
            sortable: true,
            resizable: false,
            valueFormatter: ({ value }: { value: number }) => formatLocaleDate(value),
            width: 138,
            sort: "desc",
        },
    ]
}
