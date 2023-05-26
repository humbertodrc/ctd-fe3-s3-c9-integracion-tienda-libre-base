import type { NextApiRequest, NextApiResponse } from 'next'
import { Product, products } from '../db'

type Message = {
  message: string
}

type DataProduct = Product[] | Message

export default function handler(req: NextApiRequest, res: NextApiResponse< DataProduct>) {
  res.status(200).json(products)
}