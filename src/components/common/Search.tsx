import { useState } from 'react';
import { Input } from '../controls/Input';
import { Search as SearchIcon } from '../../assets/Icons';
import './Search.less'

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
        </div >
    );
}