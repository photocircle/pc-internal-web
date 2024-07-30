import { CircleMetadata, MemberMetadata } from "../../generated/web_app_grpc_pb";
import { Circle as CircleIcon } from "../../assets/Icons";
import MemoizedGrid from "../MemoizedGrid";
import { CircleType } from "../../pages/Homepage";
import { getCircleColumnsDev } from "./columns";
import { Avatar } from "../../common/table-utils";
import './User.less'
import '../Widget.less'

const columns = getCircleColumnsDev(true)

type Props = {
    index: number
    onSelect: (type: 'circle', item: CircleType, level: number) => void
    circles: CircleMetadata.AsObject[]
    focused: boolean
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
    focused,
    onSelect,
}: Props) {
    const onRowClicked = (event: { data: CircleType }) => {
        onSelect('circle', event.data, index + 1)
    }
    
    return (
        <div className={`User Widget ${focused ? 'focused' : ''}`}>
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
                        columnDefs={columns}
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
