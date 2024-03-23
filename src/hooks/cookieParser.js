"use client";
import Cookies from "js-cookie";
export function useGetCookieData(cokie) {
  const data = Cookies.get(cokie);
  let parseddata;
  try {
    parseddata = JSON.parse(data || []);
  } catch (error) {
    // console.log("error from getting cookies", error);
  }
  //   console.log("the parsed cookies object", parseddata);
  return parseddata;
}

// export function useGetCookieData(cokie) {
//   const data = Cookies.get(cokie);
//   const [state, setState] = useState(null);
//   useEffect(() => {
//     try {
//       const parseddata = JSON.parse(data || []);
//       setState(parseddata);
//     } catch (error) {}
//   }, [data]);

//   return state;
// }
