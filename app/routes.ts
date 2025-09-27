import { type RouteConfig, route } from "@react-router/dev/routes";

export default [route("/","routes/home.jsx"),
route("/deploy", "routes/deploy.tsx")
] satisfies RouteConfig;
