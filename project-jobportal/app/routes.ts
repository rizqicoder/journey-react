import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout('routes/layout-index.tsx', [
    index('routes/home.tsx'),
    route('list-job','routes/list-job.tsx'),
    route('create-job','routes/create-job.tsx'),
    route('edit-job/:id', 'routes/edit-job.tsx')
  ])
] satisfies RouteConfig;
