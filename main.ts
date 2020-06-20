import { Application } from "https://deno.land/x/oak/mod.ts";
import {viewEngine,engineFactory,adapterFactory} from "https://deno.land/x/view_engine/mod.ts";
import router from "./router.ts";
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port:8000});
