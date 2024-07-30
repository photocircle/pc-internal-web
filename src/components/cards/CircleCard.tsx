import { ReactNode } from "react";
import { CircleMetadata, Role } from "../../generated/web_app_grpc_pb";
import { User as MemmberIcon } from "../../assets/Icons";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import MemoizedGrid from "../MemoizedGrid";
import { NameCellForAgGrid } from "../../common/table-utils";
import { formatLocaleDate, getMediaUrl } from "../../common/utils";
import defaultBg from "../assets/icons/circle-placeholder.png"
import './Circle.less'
import './Widget.less'

type Props = {
    coverPhotoMediaUuid: string
    lastMediaUuid: string
} & CircleMetadata.AsObject

export function CircleCard({
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
    rolesList
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
            width: 72,
            cellClass: "grid-text-align-right",
            cellStyle: { textAlign: "right" },
        },
        {
            headerName: "Last Session",
            field: "lastSessionTimestamp",
            sortable: true,
            width: 139,
            cellClass: "grid-cell-ellipsis",
            cellStyle: { textAlign: "right" },
            valueFormatter: (params) => formatLocaleDate(params.data.lastSessionTimestamp),
            sort: "desc",
        }
    ]

    const onRowClicked = (event: { data: { circleUuid: string } }) => {
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
                        rowData={users}
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

const users = [
    {
        "displayName": "Medin Nuhiji",
        "mediaCount": 0,
        "isWorkspaceMember": false,
        "memberUuid": "975c8599-20a1-4104-8498-b6326629c987",
        "userUuid": "005da4b5-5eaa-4df3-bfa3-1e04846673c3",
        "isActive": true,
        "roleId": 4,
        "targetRoleIdsList": []
    },
    {
        "displayName": "Medin test",
        "mediaCount": 67,
        "lastSessionTimestamp": 1722339262796932,
        "isWorkspaceMember": true,
        "avatarUrl": "https://avatar.dev.photocircleapp.com/3f3cf780056b490cae2b3b5f2086cc7c-20240724175424",
        "memberUuid": "aadd454f-76db-4e61-93da-ec705189e771",
        "userUuid": "3f3cf780-056b-490c-ae2b-3b5f2086cc7c",
        "isActive": true,
        "roleId": 1,
        "targetRoleIdsList": [
            1,
            2
        ]
    },
    {
        "displayName": "Alex Vasilkov",
        "mediaCount": 0,
        "lastSessionTimestamp": 1722276338590050,
        "isWorkspaceMember": true,
        "memberUuid": "0e633471-634d-4ff9-bd85-80a83705629a",
        "userUuid": "4f7375f3-3f72-422f-ae2a-89689bbf1303",
        "isActive": false,
        "roleId": 2,
        "targetRoleIdsList": [
            1,
            2
        ]
    },
    {
        "displayName": "Justin-Web",
        "mediaCount": 0,
        "lastSessionTimestamp": 1722099083476806,
        "isWorkspaceMember": true,
        "avatarUrl": "https://avatar.dev.photocircleapp.com/832d08752bb247c283a829add735e559-20240508160355",
        "memberUuid": "49c0b3d0-7edc-40e9-940a-771620344599",
        "userUuid": "832d0875-2bb2-47c2-83a8-29add735e559",
        "isActive": true,
        "roleId": 1,
        "targetRoleIdsList": [
            1,
            2
        ]
    }
]
