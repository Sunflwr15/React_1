export default function Button({title, ...props}){
    return (
        <button className="bg-violet-500 text-white px-3 py-1 rounded-lg" {...props}>{title}</button>
    )
}