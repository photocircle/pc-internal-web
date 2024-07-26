import React from "react"
import { Link } from "react-router-dom"
import { Group, Profile, Role } from "../generated/web_app_grpc_pb.js"
import IconExternalAccount from "../assets/icons/icon-account-external.svg"
import IconLogo from "../assets/icons/icon-logo.svg"
import { getRoleIcon, GroupTreeNode, renderDefaultAvatar } from "./utils.js"
import { IProfileWithColor } from "../types/types.js"

export const renderAvatar = (member: IProfileWithColor) => React.useMemo(() => {
    if (member.avatarUrl) {
        return (
            <img
                className="member-avatar"
                src={member.avatarUrl}
                alt={`${member.displayName} avatar`}
                loading="lazy"
            />
        )
    }
    return renderDefaultAvatar(member.displayName, member.color)
}, [])

export function Avatar({ profile }: { profile: IProfileWithColor }) {
    if (profile.avatarUrl) {
        return (
            <img
                className="member-avatar"
                src={profile.avatarUrl}
                alt={`${profile.displayName} avatar`}
                loading="lazy"
            />
        )
    }
    return renderDefaultAvatar(profile.displayName, profile.color)
}

export function NameCell({ profile }: { profile: IProfileWithColor }) {
    if (profile) {
        return (
            <>
                <Avatar profile={profile} />
                <div data-tag="allowRowEvents">{profile.displayName}</div>
                {profile.isGroupAdmin && <div className="pill table-cell-pill">ADMIN</div>}
            </>
        )
    }
    return null
}

export function AccountBadge({ isWorkspaceMember }: { isWorkspaceMember: boolean }) {
    if (isWorkspaceMember) return <span className="pill workspace-pill"><IconLogo /> Workspace</span>
    return <span className="pill external-pill"><IconExternalAccount /> External</span>
}

export function RoleCell({ roleId, roles }: { roleId: number, roles: Role.AsObject[] }) {
    const currentRole = roles.find((role) => role.roleId === roleId)

    return (
        <div className={`role-cell-${roleId}`}>
            {getRoleIcon(roleId)}<p>{currentRole?.name}</p>
        </div>
    )
}

export const renderNameCell = (profile: Profile.AsObject) => (
    <>{renderAvatar(profile)}<div data-tag="allowRowEvents">{profile.displayName}</div></>
)

export const renderEmailCell = ({ row }: { row: Profile.AsObject }) => (
    <>{ }<a href={`mailto:${row.email}`} target="_blank" rel="noreferrer">{row.email}</a></>
)

export function NameCellForAgGrid({ profile, isDisabled }: { profile: IProfileWithColor, isDisabled?: boolean }) {
    return (
        <div className={"ag-grid-namecell"}>
            <NameCell profile={profile} />
        </div>

    )
}

export function GroupCell({
    data, groups, path,
}: { data: GroupTreeNode, groups: Group.AsObject[], path: string }) {
    if (data.groupUuid) {
        const group = groups?.find((g: Group.AsObject) => g.groupUuid === data.groupUuid)
        if (group) {
            return (<Link to={`/admin/${path}/${data.groupUuid}`}>{group.name}</Link>)
        }
        // Note: this can happen if a user has circles that come from other workspaces
        return <div className="groupless-member">Group not found</div>
    }
    return <div className="groupless-member">No Group Assigned</div>
}

export const renderGroupCell = ({ row, groups }: { row: GroupTreeNode, groups: Group.AsObject[] }) => {
    if (row.groupUuid) {
        const group = groups?.find((g: Group.AsObject) => g.groupUuid === row.groupUuid)
        if (group) {
            return (<>{ }<Link to={`/admin/users/${row.groupUuid}`}>{group.name}</Link></>)
        }
        // Note: this can happen if a user has circles that come from other workspaces
        return "Group not found"
    }
    return "No Group Set"
}
