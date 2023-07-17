import { DataStore } from "aws-amplify";
import { API } from "aws-amplify";

import { VendorInfo } from "../src/models";

async function fetchVendors(setVendorData: any) {
    try {
        const vendors = await DataStore.query(VendorInfo); 
        // console.log("Here: " + JSON.stringify(vendors))
        console.log(vendors)
        setVendorData(vendors)
    } catch (e) {
        console.warn(e)
    }

}

export default fetchVendors; 