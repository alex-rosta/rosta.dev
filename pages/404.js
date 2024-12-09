import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/');
        }, 5000);

        // Cleanup the timeout if the component unmounts
        return () => clearTimeout(timeout);
    }, [router]);

    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl">Page Not Found</h1>
            <p className="text-lg">Redirecting to home page in 5 seconds...</p>
        </div>
    );
};

export default Custom404;