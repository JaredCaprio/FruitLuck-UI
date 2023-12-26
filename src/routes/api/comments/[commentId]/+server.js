import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments.js";

// @ts-ignore
export function POST(RequestEvent) {
  const { params } = RequestEvent;
  const { commentId } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  return json(comment);
}
