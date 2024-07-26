import { Workspace } from "../assets/Icons";
import { Header } from "../components/common/Header";
import { User } from "../components/User";
import './Homepage.less'

const user = {
    type: 'user',
    name: 'John Doe',
    workspace: 'Workspace 1',
    circles: [
        {
            name: 'Circle 1',
        },
        {
            name: 'Circle 2',
        },
    ],
}

export function Homepage() {
    return (
        <div className="Homepage">
            <Header />

            <div className="content">
                <User user={user} />
            </div>
        </div>
    )
}