import { ObjectId } from "mongodb";

export default interface ShoutOut {
    _id?: ObjectId;
    to: string;
    from: string;
    content: string;
}

export interface APIResponse {
    results: ShoutOut[];
}