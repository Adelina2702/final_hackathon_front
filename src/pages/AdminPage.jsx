import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BasicTable from "../components/BasicTable";


const AdminPage = () => {
    return (
        <div>
            <h2 style={{ color: '#131E29' }}>Admin Page</h2>
            <Link to="/add">
                <Button variant="contained" color="warning">
                    Add product
                </Button>
            </Link>
            <div>
                <BasicTable/>
            </div>
        </div>
        
    );
};

export default AdminPage;