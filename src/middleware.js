export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/nn"],
  pages: {
    signIn: "/login",
    error: "/error",
  },
};
