
export async function GET() {
    
    return new Response(
        JSON.stringify({msg : "Hello world!"}), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    }
    );
}
export async function POST() {
    
    return new Response(
        JSON.stringify({msg : "Hello world!"}), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    }
    );
}