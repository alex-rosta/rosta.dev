import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import { links } from '@/data/dockcontent';

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 flex items-center justify-center h-[5rem] w-full z-50">
            <FloatingDock items={links} className="bg-black" />
        </div>
    );
};
export default Header;