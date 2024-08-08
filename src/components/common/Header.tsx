import { Logo, SignOut } from '../../assets/Icons'
import { Button } from '../controls/Button';
import { Search } from './Search';
import './Header.less'
import { SearchResponse } from '../../generated/internal_pb';

type Props = {
    onSearch(searchResults: SearchResponse.AsObject): void
}
export function Header({ onSearch }: Props) {
    return (
        <header className='Header'>
            <Logo />

            <Search onSearch={onSearch} />

            <Button
                className="sign-out"
                variant="link"
                onClick={() => { }}
                tooltip="Sign out"
                tooltipPosition="bottom"
            >
                <SignOut aria-label="Sign Out" />
            </Button>
        </header>
    );
}