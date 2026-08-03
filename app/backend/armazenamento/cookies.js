//cookies para persistencia de login

export function Cookies (req) {
  return req.cookies["cookie-auth"];
}

export function LimparCookies(req, res) {
  const cookie = req.cookies["cookie-auth"];

  res.clearCookie("cookie-auth", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
  });
}