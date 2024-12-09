import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { fetchWowInfo } from '@/data/fetchWowInfo';
import wowUrl from '@/data/fetchWowInfo';
import CharacterInfo from '@/data/CharacterInfo';

const WowPage = () => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadWowInfo() {
            setLoading(true);
            const characterData = await fetchWowInfo(wowUrl);
            setCharacter(characterData);
            setLoading(false);
        }
        loadWowInfo();
    }, []);

    return (
            <div className="relative z-10 container mx-auto p-4">
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                character && (
                    <div className="flex justify-center">
                        <div className="w-full md:w-2/3 lg:w-1/2">
                            <CharacterInfo character={character} />
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
    
    export default WowPage;