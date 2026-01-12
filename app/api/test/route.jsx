import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    message: 'haii'
  })
}

// export function GET() {
//   return new Response('API WORKING')
// }
