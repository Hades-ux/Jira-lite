import CustomSelect from './ui/CustomSelect';


const priorityOptions = [
    { value: "Low", label: "🟢 Low" },
    { value: "Medium", label: "🟡 Medium" },
    { value: "High", label: "🟠 High" },
    { value: "Urgent", label: "🔴 Urgent" },
  ];
const PrioritySelect = ({value, onChange}) => {
  return (
    <CustomSelect
    options={priorityOptions}
    value={value}
    onChange={onChange}/>
  )
}

export default PrioritySelect;
export {priorityOptions};