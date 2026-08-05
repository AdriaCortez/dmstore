import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),

    route("/entrar", "routes/entrar.tsx"),
    route("/cadastro", "routes/cadastro.api.tsx"),
    route("/login", "routes/login.api.tsx")

] satisfies RouteConfig;
