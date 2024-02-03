import Link from 'next/link';
import React from 'react';

// Define the type for each menu item
interface MenuItem {
  title: string;
  href: string;
}

// Define the props type for the component
interface NestedDropdownProps {
  menuItems: MenuItem[];
}

const NestedDropdown: React.FC<NestedDropdownProps> = ({ menuItems }) => {
  return (
    <div className="absolute ml-[130px]  top-0 z-[10000000] w-[250px] min-h-[350px] underwtop">
      <div className="mt-7 py-3 flex px-4 w-[180px] ml-[20px] min-h-[300px] border border-1 border-t-[#ddd] bg-[#fff]">
        <div className="font-semibold">
          {menuItems?.map((item, index) => (
            <Link key={index} className="flex justify-between hover:text-[blue] py-2 text-[14px]" href={item?.href}>
              {item?.title} 
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NestedDropdown;
