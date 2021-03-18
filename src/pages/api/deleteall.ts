import dbConnect from "@/utis/dbConnect";
import Note from "@/models/Note";
import { NextApiRequest, NextApiResponse } from "next";
import NoteModel from "@/models/Note";
import INote from "@/interfaces/INote";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    switch (method) {
        case "GET":
            try {
                const notes: INote[] = await Note.find();
                const qntNotes: number = notes.length;
                let cont: number = 0;
                notes.map((note: INote) => {
                    NoteModel.findByIdAndDelete(note.id).then((successResponse: INote[]) => {
                        if (successResponse) {
                            cont++;
                            if (cont === qntNotes) {
                                res.status(200).json({ success: true, message: "Todos os dados apagados" });
                            }
                        } else {
                            res.status(400).json({ success: false });
                        }
                    }).catch(e => {
                        console.log(e)
                    })
                });
            } catch (ERROR) {
                console.log(ERROR);
                res.status(400).json({ success: false });
            }
            break;
    };
};

