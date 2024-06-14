import React from "react";
import ProductTableSWR from './ProductTableSWR'
import NavbarAdmin from './NavbarAdmin'
import HeaderAdmin from "./HeaderAdmin";

function Dashboard (){

    return(
        <div className="flex">
            <NavbarAdmin />
            {/* <HeaderAdmin/> */}
            <div className="ml-44">
            <ProductTableSWR />
            </div>
        </div>
    )
}

export default Dashboard