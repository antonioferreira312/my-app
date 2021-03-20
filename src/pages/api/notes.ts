/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import dbConnect from '@/utils/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import NoteModel from '@/models/Note';
import INote from '@/interfaces/INote';

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;
	switch (method) {
	case 'GET':
		try {
			NoteModel.find().then((posts: INote[]) => {
				res.status(200).json({ success: true, data: posts });
			}).catch(() => {
				res.status(400).json({ success: false });
			});
		} catch (ERROR) {
			res.status(400).json({ success: false });
		}
		break;
	case 'POST':
		try {
			const createdNote: INote = new NoteModel(req.body);
			createdNote.save().then((savedPost: any) => {
				res.status(200).json({ success: true, data: savedPost });
			}).catch(() => {
				res.status(400).json({ success: false });
			});
		} catch (ERROR) {
			res.status(400).json({ success: false });
		}
		break;
	}
};