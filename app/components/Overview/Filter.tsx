'use client'

import { prioritiesTest, statusTest, tagsTest } from "@/testData/testData"
import ItemSelect from "../Input/ItemSelect"
import MultiItemSelect from "../Input/MultiItemSelect"

export const Filter = () => {
  return (
    <details open>
      <summary className="flex items-center hover:cursor-pointer select-none">
        <img src="/icons/angle_down.svg" alt="filter" className="w-5 h-5 mr-2" />
        <span>Filter</span>
        <hr className="flex-1 ml-4"/>
      </summary>
      <div className="px-8 py-4 grid grid-cols-1 lg:grid-cols-2 gap-y-4">
        <div className="w-96 flex items-center gap-4">
          <span className="w-20 flex-shrink-0">Trạng thái</span>
          <ItemSelect options={statusTest} onChange={(value) => { }} />
        </div>

        <div className="w-96 flex items-center gap-4">
          <span className="w-20 flex-shrink-0">Nhãn</span>
          <MultiItemSelect options={tagsTest} onChange={(value) => { }} />
        </div>

        <div className="w-96 flex items-center gap-4">
          <span className="w-20 flex-shrink-0">Priority</span>
          <ItemSelect options={prioritiesTest} onChange={(value) => { }} />
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex gap-2 items-center">
          <img src="/icons/ic_check_mark.svg" alt="apply" height={16} width={16}/>
          <span className="text-absolute-blue underline">Apply</span>
        </button>
        <button className="flex gap-2 items-center">
          <img src="/icons/ic_arrow_rotate_right.svg" alt="clear" height={16} width={16}/>
          <span className="text-absolute-blue underline">Clear</span>
        </button>
        <button className="flex gap-2 items-center">
          <img src="/icons/ic_save.svg" alt="save" height={16} width={16}/>
          <span className="text-absolute-blue underline">Save</span>
        </button>
      </div>
    </details>
  )
}