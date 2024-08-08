import { useEffect, useState } from "react";
import { CircleCard } from "../components/cards/CircleCard";
import { Header } from "../components/common/Header";
import { UserCard } from "../components/cards/UserCard";
import { CircleMetadata, MemberMetadata } from "../generated/web_app_grpc_pb";
import { WorkspaceCard } from "../components/cards/WorkspaceCard";
import { SearchResponse } from "../generated/internal_pb";
import './Homepage.less'

export type UserType = MemberMetadata.AsObject & { circles: CircleType[] }

const user: UserType = {
    displayName: 'John Doe',
    avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    mediaCount: 10,
    lastSessionTimestamp: 1632720000000,
    isWorkspaceMember: true,
    memberUuid: '1234',
    userUuid: '1234',
    isActive: true,
    roleId: 1,
    targetRoleIdsList: [1, 2, 3],
    circles: [
        {
            circleUuid: '1234',
            title: 'Circle 1',
            mediaCount: 10,
            memberCount: 5,
            lastActivityTimestamp: 1632720000000,
            internalId: '1234',
            groupUuid: '1234',
            memberUuid: '1234',
            workspaceUuid: '1234',
            roleId: 1,
            targetRoleIdsList: [1, 2, 3],
            rolesList: [],
        },
        {
            circleUuid: '1234',
            title: 'Circle 2',
            mediaCount: 10,
            memberCount: 5,
            lastActivityTimestamp: 1632720000000,
            internalId: '1234',
            groupUuid: '1234',
            memberUuid: '1234',
            workspaceUuid: '1234',
            roleId: 1,
            targetRoleIdsList: [1, 2, 3],
            rolesList: [],
        }
    ]
}

export type CircleType = CircleMetadata.AsObject & { members: UserType[] }

const circle: CircleType = {
    circleUuid: '1234',
    title: 'Circle 1',
    mediaCount: 10,
    memberCount: 5,
    lastActivityTimestamp: 1632720000000,
    internalId: '1234',
    groupUuid: '1234',
    memberUuid: '1234',
    workspaceUuid: '1234',
    roleId: 1,
    targetRoleIdsList: [1, 2, 3],
    rolesList: [],
    members: [
        {
            "displayName": "Medin Nuhiji",
            "mediaCount": 0,
            "isWorkspaceMember": false,
            "memberUuid": "975c8599-20a1-4104-8498-b6326629c987",
            "userUuid": "005da4b5-5eaa-4df3-bfa3-1e04846673c3",
            "isActive": true,
            "roleId": 4,
            "targetRoleIdsList": [],
            circles: user.circles
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
            ],
            circles: user.circles
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
            ],
            circles: user.circles
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
            ],
            circles: user.circles
        }
    ]
}

const workspace = {
    name: 'Workspace 1',
    members: [
        user
    ],
    circles: [
        circle
    ]
}

export type WorkspaceType = {
    name: string,
    members: UserType[]
    circles: CircleType[]
}

export function Homepage() {
    const [selected, setSelected] = useState([{
        type: 'workspace',
        item: workspace,
    }])

    useEffect(() => {
        window.scrollTo({ left: selected.length * 1000, behavior: 'smooth' });
    }, [selected])

    const handleSelect = (type: 'circle' | 'user' | 'workspace', item: CircleType | UserType | WorkspaceType, level: number) => {
        if (type == "user") {
            item.circles = user.circles
        } else {
            item.members = circle.members
        }
        setSelected([...selected.slice(0, level), {
            type,
            item,
        }])
    }

    const onSearch = (searchResults: SearchResponse.AsObject) => {
        console.log('In Homepage',searchResults)
    }

    return (
        <div className="Homepage">
            <Header onSearch={onSearch} />

            <div className="content">
                {selected.map((item, index) => {
                    const focused = index === selected.length - 1
                    if (item.type === 'user') {
                        return <UserCard
                            key={index}
                            {...(item.item as UserType)}
                            onSelect={handleSelect}
                            index={index}
                            focused={focused}
                        />
                    } else if (item.type === 'circle') {
                        return <CircleCard
                            key={index}
                            {...(item.item as CircleType)}
                            onSelect={handleSelect}
                            index={index}
                            focused={focused}
                        />
                    } else if (item.type === 'workspace') {
                        return <WorkspaceCard
                            key={index}
                            {...(item.item as WorkspaceType)}
                            onSelect={handleSelect}
                            index={index}
                            focused={focused}
                        />
                    }
                })}
            </div>
        </div>
    )
}
