import dbConnect from "@/utis/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import NoteModel from "@/models/Note";
import INote from "@/interfaces/INote";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    switch (method) {
        case "GET":
            try {
                NoteModel.find().then((posts: INote[]) => {
                    res.status(200).json({ success: true, data: posts });
                }).catch(e => {
                    res.status(400).json({ success: false });
                })
            } catch (ERROR) {
                res.status(400).json({ success: false });
            }
            break;
        case "POST":
            try {
                const createdNote: INote = new NoteModel(req.body);
                createdNote.save().then((savedPost: any) => {
                    res.status(200).json({ success: true, data: savedPost });
                }).catch(e => {
                    res.status(400).json({ success: false });
                })
            } catch (ERROR) {
                res.status(400).json({ success: false });
            }
            break;
    };
};