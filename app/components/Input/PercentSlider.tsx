'use client'

import ReactSlider from "react-slider"

export const PercentSlider = ({ percent = 0, onChange }: { percent?: number, onChange?: (percent: number) => void }) => {
  return (
    <div className="w-full mt-8">
      <ReactSlider
        min={0}
        max={100}
        defaultValue={0}
        step={1}
        ariaLabel={'Thumb'}
        ariaValuetext={state => `Thumb value ${state.valueNow}`}
        pearling
        value={percent}
        onChange={(value) => {
          onChange && onChange(value)
        }}
        className="flex items-center w-full h-[50px]"
        trackClassName="percent-range-track"
        renderThumb={(props, state) => (
          <div {...props} className="tooltip flex items-center justify-center bg-[#b6e9e6] w-8 h-8 rounded-full">
            <div className="relative border-2 border-[#2FD1C5] rounded-full w-4 h-4 bg-primary-500 cursor-pointer bg-white flex justify-center items-center text-sm font-semibold shadow-md">
              <div className="tooltiptext">{state.value}%</div>
            </div>
          </div>
        )}
      />
    </div>
  )
}