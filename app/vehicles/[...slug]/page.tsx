const vehicles = ({params}:{params:{slug:string[]}})=>{
return (
    <>
    <p>{params.slug[0]}and {params.slug[2]}</p>
    </>
)
}
export default vehicles