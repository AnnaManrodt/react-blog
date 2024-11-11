import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <div>
            <h1>My blog</h1>
            <nav>
                <ul>
                    <li><Link to="/form">Go to Form</Link></li>
                    <li><Link to="/post">Go to BlogPost</Link></li>
                </ul>
            </nav>
        </div>
    )
}