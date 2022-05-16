import Link from 'next/link';
import classes from './main-header.module.css';
import { useSession, signOut } from 'next-auth/react'

function MainHeader() {
    const { data: session, status } = useSession();

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
                    {!session && !status.loading && (
                        <li>
                            <Link href='/auth'>Login</Link>
                        </li>
                    )}
                    {session && (
                        <>
                            <li>
                                <Link href='/profile'>Profile</Link>
                            </li>
                            <li>
                                <button onClick={logoutHandler}>Logout</button>
                            </li>
                            <li>
                                <Link href='/quiz/create'>Create</Link>
                            </li>
                            <li>
                                <Link href='/quiz'>Browse All Quiz</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;