import { NextResponse } from "next/server";

export const dynamic = "force-static"

export async function GET() {
    try {
        const types = getTypes();
        if(!types) return NextResponse.json({message: 'Not found !'}, {status: 404});
        return NextResponse.json(types);
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: 500});
    }
}