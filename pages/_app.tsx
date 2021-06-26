import "../styles/globals.css";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg+:px-12 my-14">
      <div className="col-span-12 p-4 text-center bg-white rounded-lg lg:col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-12 bg-white rounded-lg lg:col-span-9">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
