import { INDEXED_ROUTES, DEFAULT_ROUTE } from "../../utils/routesUtil";

export default  function sitemap() {
    const baseUrl = process.env.NEXTAUTH_URL; 
    const routes = INDEXED_ROUTES.map((route) => ({
        url: baseUrl + route, 
        priority: route===DEFAULT_ROUTE ? 1 : 0.8,
    }))
    return routes;
}