const DataContainer = ({title, description}) =>{
    return(<div className="flex flex-col items-center">
        <div className="text-xl font-bold">{title}</div>
        <div className="text-gray-400">{description}</div>
    </div>);
}
export default DataContainer;