const Button = ({lable,icon , onclick}) => {
  return (
   <button
   onclick = {onclick}
   className='flex items-center gap-2 text-gray-700 font-semibold p-3 cursor-pointer hover:scale-105'>
    {icon && <span>{icon}</span>}
    <span>{lable}</span>

   </button>
  )
}

export default Button