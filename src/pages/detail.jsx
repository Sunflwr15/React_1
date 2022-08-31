import { useParams, NavLink } from "react-router-dom";
function Detail() {
  let { id } = useParams();

  return (
    <div>
      <section className="font-bold mb-10 space-x-10">
        <NavLink to={"/about"} className={({isActive}) => isActive ? "underline font-bold" : undefined}>
          about
        </NavLink>
        <NavLink to={"/about/1"} className={({isActive}) => isActive ? "underline font-bold" : undefined}>
          detail_1
        </NavLink>
        <NavLink to={"/about/2"} className={({isActive}) => isActive ? "underline font-bold" : undefined}>
          detail_2
        </NavLink>
        <NavLink to={"/about/3"} className={({isActive}) => isActive ? "underline font-bold" : undefined}>
          detail_3
        </NavLink>
      </section>
      <p className="text-3xl text-violet-600 font-bold">Detail {id}</p>
    </div>
  );
}

export default Detail;
