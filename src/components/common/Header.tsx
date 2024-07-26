import { Logo, SignOut } from '../../assets/Icons'
import { Button } from '../controls/Button';
import './Header.less'
import { Search } from './Search';

export function Header() {
    return (
        <header className='Header'>
            <Logo />

            <Search />

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