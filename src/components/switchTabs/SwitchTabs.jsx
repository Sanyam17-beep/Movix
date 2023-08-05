import React, { useState } from 'react'
import './style.scss'
function SwitchTabs({data,onTabChange}) {
    console.log(data);
    const [selectedTab,changeTab] = useState(0);
    const [left,setLeft] = useState(0);
    const activeTab = (tab,idx)=>{
        setLeft(idx*100);
        setTimeout(()=>{changeTab(idx)},300);
        onTabChange(tab,idx);
    }
  return (
    <div className='switchingTabs'>
        <div className="tabItems">
            {data.map((tab,index)=>(
                <span key={index} className={`tabItem ${selectedTab===index?'active':''}`} onClick={()=>activeTab(tab,index)}>
                    {tab}
                </span>
            ))}
            <span className="movingBg" style={{left}}></span>
        </div>
    </div>
  )
}

export default SwitchTabs