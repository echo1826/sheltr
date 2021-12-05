import React from "react";
import Cardrender from "../components/Cardrender";
import {useQuery} from '@apollo/client';
import {QUERY_ALL_DOGS, QUERY_SETTINGS} from '../utils/queries';
import './Cards.css';

export default function Cards() {
    // const {loading, data} = useQuery(QUERY_SETTINGS, {
    //     variables: // give user id here to get user settings
    // });
    // let settings;
    // if(loading) {
    //     return <div>Loading settings...</div>
    // } else {
    //     settings = data?.settings;
    // }

    return(<div className='cards'>
        <Cardrender/>
    </div>);
}