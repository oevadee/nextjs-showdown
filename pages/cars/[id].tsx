import { useRouter } from "next/router";
import Head from "next/head";

const Car = ({ car }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>
          {car.color} {car.id}
        </title>
      </Head>
      <div>
        <h1>Hello {id}</h1>
        <img src={car.image} alt={car.id} />
      </div>
    </>
  );
};

export const getServerSideProps = async ({params}) => {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
} 

// export const getStaticProps = async ({ params }) => {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { car: data },
//   };
// };

// export const getStaticPaths = async () => {
//   const req = await fetch(`http://localhost:3000/cars.json`);
//   const data = await req.json();

//   const paths = data.map((car) => {
//     return {
//       params: { id: car },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default Car;
