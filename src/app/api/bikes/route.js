import { NextResponse } from "next/server";
export const dynamic = "force-static"

export async function GET() {
    try {
        const bike = getBikes();
        if(!bike) return NextResponse.json({message: 'Not Found !'}, {status: 404});
        return NextResponse.json(bike);
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: 500});
    }
}