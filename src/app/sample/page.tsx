"use client";
import { useRouter } from 'next/navigation';

const Navigation = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => handleNavigation('/')}>Home</button>
                </li>
                <li>
                    <button onClick={() => handleNavigation('/about')}>About</button>
                </li>
                <li>
                    <button onClick={() => handleNavigation('/contact')}>Contact</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
