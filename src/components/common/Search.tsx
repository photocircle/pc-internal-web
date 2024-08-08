import React from 'react';
import { useState } from 'react';
import { Input } from '../controls/Input';
import { Search as SearchIcon } from '../../assets/Icons';
import { User } from '../../assets/Icons';
import { Workspace } from '../../assets/Icons';
import { Group } from '../../assets/Icons';
import { Circle } from '../../assets/Icons';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { SearchRequest, SearchResponse } from '../../generated/internal_pb';
import { grpcClient, grpcMetadata } from '../../common/utils';
import './Search.less'
import { toast } from 'react-toastify';

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



let searchTimeout: NodeJS.Timeout | undefined

type Props = {
    onSearch(searchResults: SearchResponse.AsObject): void
}

export function Search({ onSearch }: Props) {
    const [search, setSearch] = useState('')
    const [showResults, setShowResults] = useState(false)
    const ref = React.createRef<any>()

    useOnClickOutside(ref, showResults, () => setShowResults(false))

    async function searchRequest(search: string) {
        console.log('searchRequest', search)
        const req = new SearchRequest()
        req.setSearchText(search)
        try {
            const resp = await grpcClient.search(req, grpcMetadata)
            console.log(resp.toObject())
            onSearch(resp.toObject())
        } catch (e: any) {
            toast.error(`Failed to search. ${e.message}`)
        }
    }

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value
        setSearch(search)
        setShowResults(true)

        if (search) {
            clearTimeout(searchTimeout)
            searchTimeout = setTimeout(
                () => searchRequest(search),
                500)
        }
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

            <div className='results' style={{ display: showResults ? 'block' : 'none' }} ref={ref}>
                {results.map((result, index) => (
                    <div key={index} className='result'>
                        {icons[result.type]}
                        <span>{result.name}</span>
                        <span> {result.type}</span>
                    </div>
                ))}
            </div>
        </div >
    );
}