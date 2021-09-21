// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  return res.status(200).json(
    {
      author: 'Bruno da Silva Barros',
      secretMessage: process.env.VERCEL_SECRET_KEY
    }
  )
}
