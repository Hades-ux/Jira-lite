import CustomSelect from "./ui/CustomSelect"

const statusOptions = [
    { value: "TO DO", label: "📝 TO DO" },
    { value: "On Going", label: "🔄 On Going" },
    { value: "Complete", label: "✅ Complete" },
  ];


const StatusSelect = ({value,onChange}) => {
  return (
    <CustomSelect
    options={statusOptions}
    value={value}
    onChange={onChange}/>
  )
}

export default StatusSelect
export { statusOptions };