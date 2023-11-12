import {
  router,
  RouterRequest,
  RouterResponse,
  RouterNext,
} from "@cleanbits/next";

const authChecker = (
  req: RouterRequest,
  res: RouterResponse,
  next: RouterNext,
) => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    next();
  }
  return res.json({
    error: "You are not authenticated",
  });
};

const function1 = (
  req: RouterRequest,
  res: RouterResponse,
  next: RouterNext,
) => {
  next("htmujahid");
};

const getUser = (
  req: RouterRequest,
  res: RouterResponse,
  next: RouterNext,
  pre: string,
) => {
  return res.json({
    username: pre,
    email: "htmujahid@gmail.com",
    access:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  });
};

export const GET = (req: RouterRequest, { params }) =>
  router({ req, params }, authChecker, function1, getUser);
