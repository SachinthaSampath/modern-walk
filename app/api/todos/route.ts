import { NextResponse } from "next/server";

// const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
// const API_KEY: string = process.env.DATA_API_KEY as string;
const DATA_SOURCE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/todos`;
const API_KEY: string = process.env.NEXT_PUBLIC_AUTH_TOKEN as string;

export async function GET(request:Request) {
  const res = await fetch(DATA_SOURCE_URL);
  const todos: Todo[] = await res.json();
  const origin = request.headers.get('origin');

  // return NextResponse.json(dotos);
  return new NextResponse(JSON.stringify(todos), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}


export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();
  if (!id) return NextResponse.json({ message: "Todo id is required" });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return NextResponse.json({ message: `Todo ${id} deleted` });
}

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();
  if (!userId || !title)
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(`${DATA_SOURCE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, title, completed: false }),
  });

  const newTodo: Todo = await res.json();

  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const { userId, title, id, completed } = await request.json();
  if (!userId || !title || !id || typeof completed !== "boolean")
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, title, completed: false }),
  });

  const updatedTodo: Todo = await res.json();

  return NextResponse.json(updatedTodo);
}
