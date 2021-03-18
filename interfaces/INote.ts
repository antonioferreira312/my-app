import { Document} from "mongoose";

export default interface INote extends Document{
    title: string,
    description: string,
};