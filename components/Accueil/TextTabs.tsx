import { isArray } from "lodash";
import Image from "next/legacy/image";
import { useState } from "react";

export default function TextTabs({ tabs, height = "400px", icon = false }: any) {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (index: number) => {
        setSelectedTab(index);
    }

    const formattedHeight = 'h-[' + height + ']'
    console.log('icon')
    console.log(icon)
    
    return (
        <div className={`relative w-full flex flex-col ${formattedHeight} shadow-[inset_0_-1px_2px_rgba(0,0,0,0.1)]`}>
            <div className="flex xl:mb-4 justify-start space-x-1 xl:space-x-6 xl:p-2">
                {
                    tabs.map((tab: any, index: number) => {
                        const color = index === selectedTab ? "bg-gray-300" : "bg-gray-200";

                        return (
                            <button key={index} onClick={() => handleTabChange(index)} className={`w-1/3 text-xs md:text-xl xl:text-xl 2xl:text-2xl font-bold text-[#1e2428] mt-4 ${color} hover:bg-gray-300 font-bold py-2 px-4 rounded`}>
                                {tab.title}
                            </button>
                        )
                    }
                    )
                }
            </div>
            {
                isArray(tabs[selectedTab].content) ? (<div className={`${formattedHeight} overflow-y-scroll`}> {
                    tabs[selectedTab].content.map((elem: any, index: number) =>
                        <div className={`flex`} key={index}>
                            {
                                icon && <Image alt={'calendar icon'}  src={'/calendar.webp'}  className="object-contain ml-6 w-[30px]" width={50} height={50}></Image>
                            }
                            <p className="text-black text-xl p-6">
                                {`${tabs[selectedTab].content[index]}`}
                            </p>
                        </div>
                    )}
                </div>
                )
                    :
                    <p className={`text-black text-base md:text-xl xl:text-xl 2xl:text-2xl ${formattedHeight} p-6 overflow-y-scroll`}  style={{ whiteSpace: 'pre-line' }}>
                        {tabs[selectedTab].content}
                    </p>
            }
        </div>
    )
}
