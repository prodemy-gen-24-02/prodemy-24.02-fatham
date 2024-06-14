import React from 'react';

function HeaderAdmin() {
    return (
        <div className="flex justify-between items-center bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <div className="flex items-center">
                <div className="relative mr-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="py-2 px-4 rounded-md text-black" />
                    <button className="absolute right-0 top-0 mt-2 mr-2">
                        
                    </button>
                </div>
                <div className="flex items-center">
                    <span></span>
                    <span className="ml-2">User Name</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderAdmin;