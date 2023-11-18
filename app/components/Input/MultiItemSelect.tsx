'use client';

import CreatableSelect from 'react-select/creatable';

export type MultiSelectValue = {
  label?: string;
  value?: string;
}

interface MultiSelectProps {
  value?: MultiSelectValue[];
  onChange: (value: MultiSelectValue[]) => void;
  options: MultiSelectValue[];
  placeholder?: string;
  hasSelectAll?: boolean;
}

const MultiItemSelect: React.FC<MultiSelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
  hasSelectAll = false
}) => {
  return (
    <CreatableSelect
      placeholder={placeholder}
      options={options}
      value={value?.length ? value : undefined}
      instanceId="multi-select"
      // formatOptionLabel={(option: any) => (
      //   <div className="flex flex-row items-center gap-3">
      //     <div>
      //       {option?.label}
      //     </div>
      //   </div>
      // )}
      classNames={{
        container: () => 'w-full text-sm',
        control: () => 'border-2',
        input: () => 'text-lg',
        option: () => 'text-lg'
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: 'black',
          primary25: '#ffe4e6'
        }
      })}
      isClearable
      isMulti
      closeMenuOnSelect={false}
      styles={{
        control: (baseStyles, { isDisabled }) => ({
          ...baseStyles,
          backgroundColor: isDisabled ? 'white' : 'white',
          border: '1px solid #e5e7eb',
        }),
      }}
    />
  );
}

export default MultiItemSelect;