import Image from "next/image";

const Sidebar = () => {
    return (
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                    <Image src="/assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" width={32} height={32} />
                        <span className="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
                </a>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
                <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white " href="../pages/dashboard.html">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">dashboard</i>
                                </div>
                                <span className="nav-link-text ms-1">First page</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " href="../pages/tables.html">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">table_view</i>
                                </div>
                                <span className="nav-link-text ms-1">Second Page</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
        </aside>
    )
}

export default Sidebar;