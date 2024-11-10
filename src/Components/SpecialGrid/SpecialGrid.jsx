
const SpecialGrid = ({rows}) => {
  const colomns = ["", "Title", "Estimated Points", "Priority", "Tag", "Status", "Member"]

  return(
    <table className="flex-1 flex flex-col gap-4 px-4 pt-4 bg-white rounded-[8px] mb-2">
        <thead>
          <tr className="flex justify-start text-left">
          {colomns.map((title, index) => {
            return index === 0 ? (
              <th className="w-[7%] flex justify-start text-[10px] font-[400]" key={index}>
                {title}
              </th>
            ) : (
              <th className="w-[13%] flex justify-start text-[10px] font-[400] text-[#334E68]" key={index}>
                {title}
              </th>
            );
          })}
          </tr>
        </thead>
        <tbody className="flex flex-col gap-2">
            {rows.map((row,index) => {
              return (
                <tr key={index} className="flex justify-start text-left items-center">
                  {row.map((value, index) => ( 
                     index == 0 ? (
                      <td key={index} className="w-[7%] flex justify-start border-b-[1px] border-[#F0F4F8] pb-2">
                        <ImageButton img={value} ></ImageButton>
                      </td>
                    ) : index == colomns.length-1 ? (
                      <td key={index} className="w-[13%] flex justify-start border-b-[1px]
                       border-[#F0F4F8] pb-2 text-[10px] font-[400">{value}</td>
                    ) : <td key={index} className="w-[13%] flex justify-start  border-b-[1px]
                        border-[#F0F4F8] pb-2 "><TagText text={value} /></td> 
                  ))}
                </tr>
              )
            })}
        </tbody>
    </table>
  )
}

const ImageButton = ({img}) => {
  return (
    <img src={img} className="cursor-pointer rounded-full hover:bg-blue-100 duration-500">
    </img>
  )
}

const TagText = ({text}) => {
  return (
    <p className="bg-[#FFF8EA] p-2 text-[10px] h-4 font-[400] flex items-center rounded-[12px]">{text}</p>
  )
}
export default SpecialGrid