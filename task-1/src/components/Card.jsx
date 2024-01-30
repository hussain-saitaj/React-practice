import DataContainer from "./DataContainer";
const Card =() =>{
    return (
        <div className="w-[300px] h-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2 border-slate-100 border-[2px]">
            <div className="relative h-[80%]">
                <div className="h-[50%] bg-green-200"></div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] flex flex-col items-center gap-3" >
                    <img src="../../public/profile.png" alt="" className=" w-24 h-24 rounded-full"/>
                    <DataContainer  title="Rita Corriea" description="London" />
                </div>
                <div className="h-[50%] border-slate-300 border-b-2"></div>
            </div>
            <div className=" h-[20%]  flex justify-around">
               <DataContainer title="80K" description="Followers"/>
               <DataContainer title="803K" description="Likes" />
               <DataContainer title="1.4K" description="Photos" />
            </div>
        </div>
    );
}
export default Card; 