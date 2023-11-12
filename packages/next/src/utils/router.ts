import { NextRequest, NextResponse } from "next/server";

export type RouterRequest = NextRequest;
export type RouterResponse = typeof NextResponse;
export type RouterNext = (pre?: any) => void;

type ApiCallback = (
  req: RouterRequest,
  res: RouterResponse,
  next: RouterNext,
  pre: any,
) => NextResponse | void;

router.stack = [] as ApiCallback[];

export function router(
  args: { req: NextRequest; params: unknown },
  ...fn: ApiCallback[]
) {
  const functionsArray = [...router.stack, ...fn];

  for (const f of functionsArray) {
    var traverse = false;
    var pre;

    const result = f(
      args.req,
      NextResponse,
      (data: unknown) => {
        traverse = true;
        pre = data;
      },
      pre,
    );

    if (result) return result;
    if (!traverse) return;
  }
}

router.use = function use(...fn: ApiCallback[]) {
  this.stack.push(...fn);
};
