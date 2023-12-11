import { isArray } from "lodash";
import Image from "next/legacy/image";
import { useState } from "react";

export default function TextTabs({ tabs, height = "h-[400px]", icon = false }: any) {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (index: number) => {
        setSelectedTab(index);
    }
    
    // filter out tab with empty content
    const filteredTabs = tabs.filter((tab: any) => tab.content !== '');

    return (
        <div className={`relative w-full flex flex-col ${height} shadow-[inset_0_-1px_2px_rgba(0,0,0,0.1)]`}>
            <div className="flex xl:mb-4 justify-start space-x-1 xl:space-x-6 xl:p-2">
                {
                    filteredTabs.map((tab: any, index: number) => {
                        const color = index === selectedTab ? "bg-gray-300" : "bg-gray-200";

                        return (
                            <button key={index} onClick={() => handleTabChange(index)} className={`w-1/3 text-[0.5rem] md:text-xl xl:text-xl 2xl:text-2xl font-bold text-[#1e2428] mt-4 ${color} hover:bg-gray-300 font-bold py-2 px-4 rounded`}>
                                {tab.title}
                            </button>
                        )
                    }
                    )
                }
            </div>
            {
                isArray(filteredTabs[selectedTab].content) ? (<div className={`${height} overflow-y-auto`}> {
                    filteredTabs[selectedTab].content.map((elem: any, index: number) =>
                        <div className={`flex`} key={index}>
                            {
                                icon && <Image alt={'calendar icon'} src={'/calendar.webp'} className="object-contain ml-6 w-[30px]" width={50} height={50}></Image>
                            }
                            <p className="text-black text-xl p-6">
                                {`${filteredTabs[selectedTab].content[index]}`}
                            </p>
                        </div>
                    )}
                </div>
                )
                    :
                    <p className={`text-black text-base md:text-xl xl:text-xl 2xl:text-2xl ${height} p-6 overflow-y-auto`} style={{ whiteSpace: 'pre-line' }}>
                        {filteredTabs[selectedTab].content}
                    </p>
            }
        </div>
    )
}
