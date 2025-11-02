import { notFound } from "next/navigation";

const catogory =({params}:{params:{categoryId:number}})=>{
    if (params.categoryId>= 100){
       return notFound()
    }
    return <div>
        <p>the catagory has id of {params.categoryId}</p>
    </div>
}

export default catogory;