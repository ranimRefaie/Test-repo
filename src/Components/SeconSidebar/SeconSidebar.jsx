import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import profile_1 from '../../assets/secsidebar/profile.png'
import profile_2 from '../../assets/secsidebar/profile2.png'
import { useState } from 'react';
import { MdEdit } from "react-icons/md";

import { BtnCheckbox } from "../BtnCheckbox/BtnCheckbox";

export const Sidebar = () => {
    const [currentComponent, setCurrentComponent] = useState('page1');

    const handlePrevious = () => {
      setCurrentComponent('page1');
    };
  
    const handleNext = () => {
      setCurrentComponent('page2');
    };
    return (

        <>
        <div className="flex gap-5 text-xl mt-5">
          <button 
            onClick={handlePrevious} 
            disabled={currentComponent === 'page1'} 
            className={`flex items-center justify-center p-2 rounded ${currentComponent === 'page1' ? 'text-gray-400 cursor-not-allowed' : 'text-[#000]'}`}
          >
            <IoIosArrowBack />
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentComponent === 'page2'} 
            className={`flex items-center justify-center p-2 rounded ${currentComponent === 'page2' ? 'text-gray-400 cursor-not-allowed' : 'text-[#000]'}`}
          >
            <IoIosArrowForward />
          </button>
        </div>
        {currentComponent === 'page1' ? <Page1 /> : <Page2 />}
      </>
    )
}




export const Comment = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-5"> <img src={profile_2} alt="" />
                <p className="text-[14px] text-[#141718]">Fatima Suliman</p></div>
            <p className="ml-14 text-[#353945] text-[16px]">I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
            <div className=" bg-[#EBECF2] w-[100%] h-[1px] mx-auto my-6"></div>
        </div>
    )
}



const Page1 = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState('You Can Edit The Description Here');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setDescription(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };
  return    <div className="flex flex-col gap-4 mt-10 w-[30%]">
  <div className="flex gap-3">
      <div className="bg-[#FFF8EA] text-[#111111] rounded-xl px-3 py-1 text-xs"><p>UX Design</p></div>
      <div className="bg-[#DEEDFF] text-[#111111] rounded-xl px-3 py-1 text-xs"><p>UX Research</p></div>
  </div>


  <div className="w-full"><h3 className="text-xl text-[#111111] ">Ovserall UX Process of full product for first version</h3>
      <div className=" bg-[#EBECF2] w-[100%] h-[1px] mx-auto"></div></div>

  <div className="flex flex-col gap-4">
      <div className="flex gap-5 items-center">
          <h4 className="text-xs text-[#5A5A5A]">Assigned to</h4>
          <div className="flex border-[1px] border-[#EBECF2] p-1 rounded-2xl gap-2">
              <img src={profile_1} alt="" />
              <p className="text-xs text-[#111111]">Kelan Arm</p>
          </div>
      </div>

      <div className="flex gap-5 items-center">
          <h4 className="text-xs text-[#5A5A5A]">Estameted Points</h4>
          <p className="text-xs text-[#111111]">30 min</p>
      </div>

      <div className="flex gap-5 items-center">
          <h4 className="text-xs text-[#5A5A5A]">priority</h4>
          <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#DC28FA] rounded-[50%]"></div>
              <p className="text-xs text-[#111111]">Medium</p>
          </div>
      </div>

      <div className="flex gap-5 items-center">
          <h4 className="text-xs text-[#5A5A5A]">Status</h4>
          <p className="text-xs text-[#111111]">TO DO</p>
      </div>

      <div className="flex flex-col">
          <h4 className="text-xs text-[#5A5A5A]">Description:</h4>
          <div className=" h-[133px]  bg-[#F9F9FF] border-[1px] border-[#D2D2D2] rounded-[11px] mt-[17px]">
              <div className="flex justify-between items-center text-[#2D3748] p-3">
                  {isEditing ? (
                      <input
                          type="text"
                          value={description}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className="w-full border border-gray-300 rounded p-1 bg-white  text-[#2D3748]"
                      />
                  ) : (
                      <span className="text-xs">{description}</span>
                  )}
                  <button onClick={handleEditClick} className="text-[#737791]">
                      <MdEdit size={20} />
                  </button>
              </div>
          </div>
      </div>

      <div className="flex flex-col">
          <p className="my-4 text-[#606C80] text-xs">Comments: (3)</p>
          <Comment />
          <Comment />
          <Comment />
      </div>
  </div>
</div>;
};

const Page2 = () => {
  const cases=[{case:false,description:'S-211'},
    {case:true,description:'Create overall ux process of full product include user esults.Create overall ux process of full product include user esults.'},
    {case:false,description:'Create overall ux process of full product include user esults.'},
    {case:true,description:'Create overall ux process of full product include user esults.'},
    {case:false,description:'Create overall ux process of full product include user esults.'},
    {case:true,description:'Create overall ux process of full product include user esults.'},
    {case:false,description:'Create overall ux process of full product include user esults.'},
    {case:true,description:'Create overall ux process of full product include user esults.'},
    {case:false,description:'Create overall ux process of full product include user esults.'},
    {case:true,description:'Create overall ux process of full product include user esults.'},
    {case:false,description:'Create overall ux process of full product include user esults.'},
    {case:true,description:'Create overall ux process of full product include user esults.'},
  ]

  return  <div className="w-[30%]">
  <div className="mt-5"><h3 className="text-xl text-[#111111] ">Critical Test Cases</h3>
  <div className=" bg-[#EBECF2] w-[100%] h-[1px] mx-auto"></div></div>


  <div className="py-2">
    {cases.map((item)=>(
        <div className="flex gap-5 items-center border-b-[1px] border-[#EBECF2]"> 
        <BtnCheckbox caseBtn={item.case}/>
            <p className="p-2 text-xs text-[#5A5A5A]">{item.description}</p>
            </div>
    ))}
    
  </div>
 </div>;
};

