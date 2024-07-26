import { useState } from 'react';
import { Input } from '../controls/Input';
import { Search as SearchIcon } from '../../assets/Icons';
import { User } from '../../assets/Icons';
import { Workspace } from '../../assets/Icons';
import { Group } from '../../assets/Icons';
import { Circle } from '../../assets/Icons';
import './Search.less'

const results = [
    {
        type: 'user',
        name: 'John Doe',
    },
    {
        type: 'circle',
        name: 'Circle 1',
    },
    {
        type: 'workspace',
        name: 'Workspace 1',
    },
]

const icons: any = {
    user: <User />,
    workspace: < Workspace />,
    group: <Group />,
    circle: <Circle />,
}

export function Search({ }) {
    const [search, setSearch] = useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div className="Search">
            <Input
                value={search}
                onChange={handleSearch}
                type='text'
                iconRight={<SearchIcon />}
                placeholder='Search email address, name, domain, user_uuid, circle_uuid etc...'
            />

            <div className='results'>
                {results.map((result, index) => (
                    <div key={index} className='result'>
                        {icons[result.type]}
                        <span>{result.name}</span>
                        <span>{result.type}</span>
                    </div>
                ))}
            </div>
        </div >
    );
}