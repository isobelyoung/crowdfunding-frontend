import React from 'react';
import PledgeForm from "../components/PledgeForm/PledgeForm";
import { useParams } from "react-router-dom";

function PledgePage() {

    const { id } = useParams();
    const username = window.localStorage.getItem("username")

    return (
        <div>
        <h1>Hi, {username}</h1>
        <PledgeForm project_id = {id}/>
    </div>
    )
   }

export default PledgePage;