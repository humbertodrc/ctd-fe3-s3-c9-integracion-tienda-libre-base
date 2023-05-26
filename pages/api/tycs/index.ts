import type { NextApiRequest, NextApiResponse } from 'next'
import { TycsData, tycs } from '../db'
import { type } from 'os'

type Message = {
  message: string
}

type DataTycs = TycsData | Message

export default function handler(req: NextApiRequest, res: NextApiResponse<DataTycs>) {
  res.status(200).json(tycs)
}