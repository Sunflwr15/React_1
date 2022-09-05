export default function Button({title, ...props}){
    return (
        <button className="bg-violet-500 text-white p-3 rounded-xl" {...props}>{title}</button>
    )
}