import type { NextApiRequest, NextApiResponse } from 'next'
import { TyCsAPIResponse } from '../../../types'
import { tycs } from '../db'

interface Message {
  message: string
}

type DataTycs = TyCsAPIResponse | Message

export default function handler(req: NextApiRequest, res: NextApiResponse<DataTycs>) {
  res.status(200).json(tycs)
}