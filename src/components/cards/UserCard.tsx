import { CircleMetadata, MemberMetadata } from "../../generated/web_app_grpc_pb";
import { Circle as CircleIcon } from "../../assets/Icons";
import { ColDef } from "ag-grid-community";
import MemoizedGrid from "../MemoizedGrid";
import { Avatar, GroupCell } from "../../common/table-utils";
import { formatLocaleDate } from "../../common/utils";
import './User.less'
import '../Widget.less'
import { CircleType } from "../../pages/Homepage";

type Props = {
    index: number
    onSelect: (type: 'circle', item: CircleType, level: number) => void
    circles: CircleMetadata.AsObject[]
} & MemberMetadata.AsObject
export function UserCard({
    index,
    displayName,
    mediaCount,
    lastSessionTimestamp,
    isWorkspaceMember,
    avatarUrl,
    memberUuid,
    userUuid,
    isActive,
    roleId,
    targetRoleIdsList,
    circles,
    onSelect
}: Props) {
    const internalIdsEnabled = false

    const columnDefs: ColDef[] = [
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
    const onRowClicked = (event: { data: CircleType }) => {
        console.log('in ciecle row click', event)
        onSelect('circle', event.data, index + 1)
    }
    return (
        <div className="User Widget">
            <div className="header">
                <Avatar profile={{ avatarUrl, displayName }} /> {displayName}
            </div>

            <div className="properties">
                <div><label>Name</label> {displayName}</div>
                <div><label>Workspace</label> {isWorkspaceMember}</div>
                <div><label># Media Added</label> {mediaCount}</div>
            </div>

            <div className="circles">
                <h3><CircleIcon />  Circles</h3>
                <div className="table ag-theme-quartz">
                    <MemoizedGrid
                        key={''}
                        rowData={circles}
                        columnDefs={columnDefs}
                        onRowClicked={onRowClicked}
                        rowHeight={50}
                        suppressDragLeaveHidesColumns
                        rowSelection="single"
                    />
                </div>
            </div>
        </div>
    );
}
