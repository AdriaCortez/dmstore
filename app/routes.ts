import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),

    route("/entrar", "routes/entrar.tsx")

] satisfies RouteConfig;
