"use client";

// eslint-disable-next-line simple-import-sort/imports
import { DDashboardSidebar, DDashboardHeader } from "./Components";
const DashboardLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <DDashboardHeader className="min-h-[150px]" />
            <div className="flex  min-h-full gap-x-4">
                <DDashboardSidebar />
                <main className="bg-yellow-400 grow">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
