import { ReactNode } from "react";
import { Circle } from "../../generated/web_app_grpc_pb";
import { Circle as CircleIcon } from "../../assets/Icons";
import { ColDef } from "ag-grid-community";
import MemoizedGrid from "../MemoizedGrid";
import { Avatar, GroupCell } from "../../common/table-utils";
import { formatLocaleDate } from "../../common/utils";
import './User.less'
import './Widget.less'

type Props = {
    user: {
        workspace: ReactNode;
        type: string;
        name: string;
        email: string;
        circles: Circle[];
        displayName: string;
        avatarUrl: string;
    };
}
export function UserCard({ user }: Props) {
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

    const onRowClicked = (event: { data: { circleUuid: string } }) => {
        dispatch(getWorkspaceCircleRequest(event.data.circleUuid))
    }

    return (
        <div className="User Widget">
            <div className="header">
                <Avatar profile={user} /> {user.name}
            </div>

            <div className="properties">
                <div><label>Email</label> {user.email}</div>
                <div><label>Workspace</label> {user.workspace}</div>
                <div><label># Circles</label> {user.workspace}</div>
                <div><label># Media Added</label> {user.workspace}</div>
            </div>

            <div className="circles">
                <h3><CircleIcon />  Circles</h3>
                <div className="table ag-theme-quartz">
                    <MemoizedGrid
                        key={''}
                        rowData={memoizedCirclesList}
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

const memoizedCirclesList = [
    {
        "circleUuid": "f14030b5-d883-4858-9da3-d17f014fb8e8",
        "title": "friends",
        "dateCreatedTimestamp": 1714605147226705,
        "groupUuid": "0c47a6b0-99e5-4dac-a04b-ced9d19c5e8f",
        "lastActivityTimestamp": 1714605147226705,
        "internalId": "123",
        "workspaceUuid": "f210fe73-e321-4d4d-83d0-b2e888617e78"
    },
    {
        "circleUuid": "e6b7a264-a75a-4a53-89ca-85060f94abfe",
        "title": "friends2",
        "dateCreatedTimestamp": 1714605175574009,
        "groupUuid": "0c47a6b0-99e5-4dac-a04b-ced9d19c5e8f",
        "lastActivityTimestamp": 1716119254467602,
        "internalId": "123",
        "workspaceUuid": "f210fe73-e321-4d4d-83d0-b2e888617e78",
        "lastMediaUuid": "e0dc9524-e9f5-472f-9d0c-85d12054a0ec"
    },
    {
        "circleUuid": "5c49b086-950e-471d-963d-87acff73a570",
        "title": "new2",
        "dateCreatedTimestamp": 1720535095771180,
        "groupUuid": "0c47a6b0-99e5-4dac-a04b-ced9d19c5e8f",
        "lastActivityTimestamp": 1720535095771180,
        "workspaceUuid": "f210fe73-e321-4d4d-83d0-b2e888617e78"
    },
    {
        "circleUuid": "54435678-212e-4b5b-8b63-d3fb8c70badc",
        "title": "new1",
        "dateCreatedTimestamp": 1720536019318274,
        "groupUuid": "0c47a6b0-99e5-4dac-a04b-ced9d19c5e8f",
        "lastActivityTimestamp": 1720536019318274,
        "workspaceUuid": "f210fe73-e321-4d4d-83d0-b2e888617e78"
    },
    {
        "circleUuid": "19c986fc-5696-405d-9b97-d29f6dffa688",
        "title": "new3",
        "dateCreatedTimestamp": 1720536033107278,
        "groupUuid": "0c47a6b0-99e5-4dac-a04b-ced9d19c5e8f",
        "lastActivityTimestamp": 1720536033107278,
        "workspaceUuid": "f210fe73-e321-4d4d-83d0-b2e888617e78"
    },
    {
        "circleUuid": "e9d8a230-b47b-4ccf-9fff-4b708b9224f1",
        "title": "new 5",
        "dateCreatedTimestamp": 1720651419996505,
        "groupUuid": "0c47a6b0-99e5-4dac-a04b-ced9d19c5e8f",
        "lastActivityTimestamp": 1720651419996505,
        "workspaceUuid": "f210fe73-e321-4d4d-83d0-b2e888617e78"
    },
    {
        "circleUuid": "bb2500cc-31af-4943-a41d-99a8e523e76d",
        "title": "new 6",
        "dateCreatedTimestamp": 1720651441013612,
        "groupUuid": "0c47a6b0-99e5-4dac-a04b-ced9d19c5e8f",
        "lastActivityTimestamp": 1720651441013612,
        "workspaceUuid": "f210fe73-e321-4d4d-83d0-b2e888617e78"
    },
    {
        "circleUuid": "831c9ff8-0f64-4486-b2dd-de8dd1d9b6a3",
        "title": "asd",
        "dateCreatedTimestamp": 1720651955447215,
        "groupUuid": "0c47a6b0-99e5-4dac-a04b-ced9d19c5e8f",
        "lastActivityTimestamp": 1720651955447215,
        "workspaceUuid": "f210fe73-e321-4d4d-83d0-b2e888617e78"
    },
    {
        "circleUuid": "36e7d27b-28e5-4575-bb85-1352b809d32e",
        "title": "new 8",
        "dateCreatedTimestamp": 1720653650591441,
        "groupUuid": "0c47a6b0-99e5-4dac-a04b-ced9d19c5e8f",
        "lastActivityTimestamp": 1720653650591441,
        "workspaceUuid": "f210fe73-e321-4d4d-83d0-b2e888617e78"
    },
    {
        "circleUuid": "90a07ff2-3e65-4841-8b7f-8c0ddbd05cb6",
        "title": "Semra",
        "dateCreatedTimestamp": 1715708185625554,
        "groupUuid": "0c47a6b0-99e5-4dac-a04b-ced9d19c5e8f",
        "lastActivityTimestamp": 1721337229590243,
        "internalId": "internal ID",
        "workspaceUuid": "f210fe73-e321-4d4d-83d0-b2e888617e78",
        "lastMediaUuid": "92f4fe12-66dc-4569-869a-f0a86399e225"
    }
]

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}


function getWorkspaceCircleRequest(circleUuid: string): any {
    throw new Error("Function not implemented.");
}
