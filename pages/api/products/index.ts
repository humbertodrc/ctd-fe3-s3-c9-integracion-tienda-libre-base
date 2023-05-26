import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductsAPIResponse } from '../../../types';
import { products } from '../db';

interface Message {
  message: string
}

type DataProduct = ProductsAPIResponse | Message

export default function handler(req: NextApiRequest, res: NextApiResponse<DataProduct>) {
  res.status(200).json(products)
}