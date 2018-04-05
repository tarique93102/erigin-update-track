// fetching mock data
import clientData from '../assets/mock-data/client-data.json';

export const FETCH_DATA = 'fetch_data';
export const FETCH_CLIENT = 'fetch_client';
export const FETCH_SINGLE_CLIENT = 'fetch_single_client';

// default function to display redux action format
export function defaultFunction() {
    let testVar = 'Hello';

    // action object format being return to a reducer
    return {
        type: FETCH_DATA,
        payload: testVar
    };
}

// function to fetch client data
export function fetchClientData() {

    return {
        type: FETCH_CLIENT,
        payload: clientData
    };
}

// function to fetch a specific client
export function fetchSpecificClient(id) {

    let client = clientData.find((item) => { if (item._id === id) { return item; } });

    return {
        type: FETCH_SINGLE_CLIENT,
        payload: client
    };
}