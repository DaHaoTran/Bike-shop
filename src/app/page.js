import Image from "next/image";
import styles from "./page.module.css";
import BikeType from "./components/bike_type";

export default function Home() {
  return (
    <div>
      {/* Types section */}
      <div className="mt-5">
        <h1 className="my-4 text-center">Khám phá sản phẩm</h1>
        <div className="row">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="col-lg-2 col-md-6 me-lg-4" key={index}>
              <BikeType />
            </div>
          ))}
        </div>
      </div>
      {/* End Types section */}
    </div>
  );
}
