import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    console.log(request);

    return new Response(JSON.stringify({ ok: true }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export async function POST(request: NextRequest) {
    const data = await request.json();
    return new Response(JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
