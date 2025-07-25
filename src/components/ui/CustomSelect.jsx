import Select from 'react-select'

const CustomSelect = ({options, value, onChange}) => {
  return (
    <Select
    options={options}
    value={(options.find((opt)=> opt.value === value))}
    onChange={(selected)=> onChange(selected.value)}
    placeholder="Select..."
    className="outline-none text-sm"/>
  )
}

export default CustomSelect