import Link from 'next/link';
import classes from './main-header.module.css';
import { useSession, signOut } from 'next-auth/client'

function MainHeader() {
    const [session, loading] = useSession();

    function logoutHandler() {
        signOut();
    }
    return (
        <header className={classes.header}>
            <Link href='/'>
                <a>
                    <div className={classes.logo}>Schwizz</div>
                </a>
            </Link>
            <nav className={classes.navigation}>
                <ul>
                    {!session && !loading && (
                        <li>
                            <Link href='/auth'>Login</Link>
                        </li>)}
                    {session &&
                        <li>
                            <Link href='/profile'>Profile</Link>
                        </li>}
                    {session &&
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>}
                    {session &&
                        <li>
                            <Link href='/quiz'> Browse All Quiz</Link>
                        </li>}
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;