import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),

    route("/entrar", "routes/entrar.tsx"),
    route("/cadastro", "routes/cadastro.api.tsx"),
    route("/login", "routes/login.api.tsx"),
    route("/termos", "routes/termos.tsx"),
    route("/privacidade", "routes/privacidade.tsx"),
    route("/contato", "routes/contato.tsx")

] satisfies RouteConfig;
