import { Workspace } from "../assets/Icons";
import { CircleCard } from "../components/cards/CircleCard";
import { Header } from "../components/common/Header";
import { UserCard } from "../components/cards/UserCard";
import './Homepage.less'

const user = {
    type: 'user',
    name: 'John Doe',
    workspace: 'Workspace 1',
    displayName: 'John Doe',
    avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    circles: [
        {
            name: 'Circle 1',
        },
        {
            name: 'Circle 2',
        },
    ],
}

const circle = {
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
    rolesList: []
}
export function Homepage() {
    return (
        <div className="Homepage">
            <Header />

            <div className="content">
                {/* <User user={user} /> */}
                <CircleCard {...circle} />
            </div>
        </div>
    )
}