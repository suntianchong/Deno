import { Router,Context } from "https://deno.land/x/oak/mod.ts";
import { getEmlpoyees, getEmlpoyee,addEmployee,updateEmployee } from "./employee.ts";
const router = new Router();

router.get("/hello",(context:Context)=>{
  context.response.body="hello world";
})
router.get("/employees",getEmlpoyees);
router.get("/employee/:id",getEmlpoyee);
router.post("/employee",addEmployee);
router.put("/employee",updateEmployee);
export default router;
