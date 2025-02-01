const isAdmin = (req, res, next) => {
  if (req.session.user.username == "Admin") {
    return next()
  }
  res.redirect("/auth/sign-in")
}

export default isAdmin
