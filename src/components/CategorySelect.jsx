import CustomSelect from "./ui/CustomSelect";

 const categoryOptions = [
  { value: "Bug", label: "🐞 Bug" },
  { value: "Feature", label: "✨ Feature" },
  { value: "Improvement", label: "🛠️ Improvement" },
  { value: "Research", label: "🔍 Research" },
  { value: "Task", label: "📋 Task" },
];

const CategorySelect = ({value,onChange}) => {
  return (
   
    <CustomSelect
    options={categoryOptions}
    value={value}
    onChange={onChange}/>

  )
}

export default CategorySelect;
export {categoryOptions};