import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct, products } from '../db'

type Message = {
  message: string
}

type DataProduct = IProduct[] | Message

export default function handler(req: NextApiRequest, res: NextApiResponse<DataProduct>) {
  res.status(200).json(products)
}