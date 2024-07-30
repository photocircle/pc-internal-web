import { CircleMetadata, MemberMetadata } from "../../generated/web_app_grpc_pb";
import { User as MemmberIcon } from "../../assets/Icons";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import MemoizedGrid from "../MemoizedGrid";
import { NameCellForAgGrid } from "../../common/table-utils";
import { formatLocaleDate, getMediaUrl } from "../../common/utils";
import defaultBg from "../../assets/icons/circle-placeholder.png"
import './Circle.less'
import '../Widget.less'
import { CircleType, UserType } from "../../pages/Homepage";

type Props = {
    index: number
    onSelect: (type: 'user', item: UserType, level: number) => void
    coverPhotoMediaUuid?: string
    lastMediaUuid?: string
    members: MemberMetadata.AsObject[]
} & CircleType

export function CircleCard({
    index,
    circleUuid,
    title,
    mediaCount,
    memberCount,
    lastActivityTimestamp,
    internalId,
    groupUuid,
    memberUuid,
    workspaceUuid,
    roleId,
    targetRoleIdsList,
    coverPhotoMediaUuid,
    lastMediaUuid,
    rolesList,
    members,
    onSelect
}: Props) {
    const internalIdsEnabled = false
    const coverPhoto = coverPhotoMediaUuid ? coverPhotoMediaUuid : lastMediaUuid

    const columnDefs: ColDef[] = [
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

    const onRowClicked = (event: { data: UserType }) => {
        console.log('in ciecle row click', event)
        onSelect('user', event.data, index + 1)
    }

    return (
        <div className="Circle Widget">
            <div className="header">
                <img
                    src={coverPhoto ? getMediaUrl(coverPhoto, "thumb252") : defaultBg}
                    alt={title}
                />
                {title}
            </div>

            <div className="properties">
                <div><label>Title</label> {title}</div>
                <div><label>Internal ID</label> {internalId}</div>
                <div><label>Last Activity</label> {new Date(lastActivityTimestamp || '').toDateString()}</div>
                <div><label>Members</label> {memberCount}</div>
                <div><label>Media</label> {mediaCount}</div>
            </div>

            <div className="circles">
                <h3><MemmberIcon /> Members</h3>
                <div className="table ag-theme-quartz">
                    <MemoizedGrid
                        key={''}
                        rowData={members}
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
