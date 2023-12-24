// @ts-nocheck
import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments.js";

export function GET() {
  return json(comments);
}

export async function POST(RequestEvent) {
  const { request } = RequestEvent;

  const { text } = await request.json();
  const newComment = {
    id: comments.length + 1,
    text,
  };
  comments.push(newComment);
  return json(newComment, { status: 201 });
}

export async function PUT(RequestEvent) {
  const { request } = RequestEvent;

  const { text, id } = await request.json();

  const newComment = {
    id,
    text,
  };
  comments.push(newComment);
  return json(newComment, { status: 200 });
}
