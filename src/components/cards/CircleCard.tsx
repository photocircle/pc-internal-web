import { MemberMetadata } from "../../generated/web_app_grpc_pb";
import { User as MemmberIcon } from "../../assets/Icons";
import MemoizedGrid from "../MemoizedGrid";
import { getMediaUrl } from "../../common/utils";
import defaultBg from "../../assets/icons/circle-placeholder.png"
import { CircleType, UserType } from "../../pages/Homepage";
import { getMemberColumnsDev } from "./columns";
import './Circle.less'
import '../Widget.less'

type Props = {
    index: number
    onSelect: (type: 'user', item: UserType, level: number) => void
    coverPhotoMediaUuid?: string
    lastMediaUuid?: string
    members: MemberMetadata.AsObject[]
    focused: boolean
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
    focused,
    onSelect
}: Props) {
    const columnDefs = getMemberColumnsDev()
    const coverPhoto = coverPhotoMediaUuid ? coverPhotoMediaUuid : lastMediaUuid

    const onRowClicked = (event: { data: UserType }) => {
        onSelect('user', event.data, index + 1)
    }

    return (
        <div className={`Circle Widget ${focused ? 'focused' : ''}`}>
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
