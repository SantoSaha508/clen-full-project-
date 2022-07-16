import React from 'react';
import DashboardSidebar from '../../components/DashboardSidebar';
import {Outlet} from 'react-router-dom';

const Dashboard = () => {
    return (
        <DashboardSidebar>
            <Outlet></Outlet>
        </DashboardSidebar>
    );
};

export default Dashboard;