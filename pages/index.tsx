import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { services } from "../Data";

const index = (services) => {
  console.log("CLIENT", services.services);

  return (
    <div className="p-5">
      <h1>About</h1>
    </div>
  );
};

export default index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("SERVER", services);

//   return {
//     props: {
//       services: data,
//     },
//   };
// };

// export const getStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("SERVER", services);

//   return {
//     props: {
//       services: data,
//     },
//   };
// };
