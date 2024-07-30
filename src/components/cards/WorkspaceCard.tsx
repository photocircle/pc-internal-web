import { CircleMetadata, MemberMetadata } from "../../generated/web_app_grpc_pb";
import { User as MemmberIcon, Circle as CircleIcon } from "../../assets/Icons";
import MemoizedGrid from "../MemoizedGrid";
import { UserType, WorkspaceType } from "../../pages/Homepage";
import { getCircleColumnsDev, getMemberColumnsDev } from "./columns";
import './Circle.less'
import '../Widget.less'

type Props = {
    index: number
    onSelect: (type: 'user' | 'circle', item: UserType, level: number) => void
    coverPhotoMediaUuid?: string
    lastMediaUuid?: string
    circles: CircleMetadata.AsObject[]
    members: MemberMetadata.AsObject[]
    focused: boolean
} & WorkspaceType

const membersColumnDefs = getMemberColumnsDev()
const circleColumnDefs = getCircleColumnsDev(true)

export function WorkspaceCard({
    index,
    name,
    circles,
    members,
    focused,
    onSelect
}: Props) {

    const onRowClicked = (event: { data: UserType }, type: 'user' | 'circle') => {
        onSelect(type, event.data, index + 1)
    }

    return (
        <div className={`Workspace Widget ${focused ? 'focused' : ''}`}>
            <div className="header">
                {name}
            </div>

            <div className="properties">
                <div><label>Name</label> {name}</div>
            </div>

            <div className="members">
                <h3><CircleIcon />  Circles</h3>
                <div className="table ag-theme-quartz">
                    <MemoizedGrid
                        key={''}
                        rowData={circles}
                        columnDefs={circleColumnDefs}
                        onRowClicked={(event) => onRowClicked(event, 'circle')}
                        rowHeight={50}
                        suppressDragLeaveHidesColumns
                        rowSelection="single"
                    />
                </div>
            </div>

            <div className="circles">
                <h3><MemmberIcon /> Members</h3>
                <div className="table ag-theme-quartz">
                    <MemoizedGrid
                        key={''}
                        rowData={members}
                        columnDefs={membersColumnDefs}
                        onRowClicked={(event) => onRowClicked(event, 'user')}
                        rowHeight={50}
                        suppressDragLeaveHidesColumns
                        rowSelection="single"
                    />
                </div>
            </div>
        </div>
    );
}
