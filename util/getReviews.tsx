import { DataStore } from "aws-amplify";
import { Review } from "../src/models";

async function getReviews(vendorID: string | undefined, setReviews) {
    try {
        const reviews = await DataStore.query(Review, 
                                review => review.vendor_id.eq(vendorID));
        setReviews(reviews); 
    } catch (e) {
        console.warn(e);
    }
    
}

export default getReviews;