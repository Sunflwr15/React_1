import React from "react";

// export default function Button({
//   title,
//   color = "red",
//   onClick,
//   name,
//   id,
//   disable = false,
// }) {
//   return (
//     <React.Fragment>
//       <button
//         name={name}
//         id={id}
//         disabled={disable}
//         onClick={onClick}
//         className="button"
//         style={{ backgroundColor: color }}
//       >
//         {title}
//       </button>
//     </React.Fragment>
//   );
// }

export default function Button({ title, disabled, edit, color = "red", ...props }) {
  return (
    <React.Fragment>
      <button
        {...props}
        className={`h-fit border-2 border-neutral-800 p-3 hover:bg-neutral-800 hover:text-white transition-all ease-in-out ${edit}`}
        style={{ opacity: disabled ? 0.5 : 1 }}
      >
        {title}
      </button>
    </React.Fragment>
  );
}
