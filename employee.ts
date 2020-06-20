import { Employee } from "./types.ts";
import ShortUniqueId from 'https://cdn.jsdelivr.net/npm/short-unique-id@latest/short_uuid/mod.ts';
let employees:Employee[]=[
  {
    id:"1d",
    name:"Tom",
    age:24,
  },
  {
    id:"23",
    name:"Jack",
    age:84,
  },
 ];


  //获取所有员工
  const getEmlpoyees = ({ response } :{ response: any })=>{
   response.body={
      success:true,
      date:employees
    }
  }

  //获取一个员工
  const getEmlpoyee = ({params,response}:{params:{id:string},response:any})=>{
    const hadEmployee =employees.find(employee  => employee.id == params.id);
    if(hadEmployee){
      response.body={
        success:true,
        data:hadEmployee
      }
    }else{
      response.body={
        success:false,
        data:"No employee found"
    }
    }
  }

  //增加员工
  const addEmployee = async ({request,response}:{request: any,response: any}) =>{
    const body =await request.body();
    const newEmployee =body.value;
    const uid = new ShortUniqueId();
    newEmployee.id =uid();
    employees.push(newEmployee);
    response.body = {
      success:true,
      msg:newEmployee
    }

  }

  //修改员工
  const updateEmployee = async ({ request ,response }:{ request:any, response:any }) => {

    const body = await request.body();
    const updateEmployee = body.value;
    if(updateEmployee.id){
      const index =employees.findIndex(e=>e.id ===updateEmployee.id);
      if(index !== -1){     //如果员工存在
        console.log("idnex:"+index);
        employees[index] = updateEmployee;
        response.body ={
          success:true,
          data:"employee update successfull"
        }

      }else{
        response.body ={
          success:false,
          data:"No Employee found"
        }
      }
    }

  }
  export { getEmlpoyees , getEmlpoyee,addEmployee ,updateEmployee }
