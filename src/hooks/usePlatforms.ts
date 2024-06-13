// PROJECT IMPORTS
import useData from "./useData";
import platformData from "../data/platforms";

// INTERFACES
export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

// HOOK LOGIC
const usePlatforms = (live:boolean = false) => {
  if (live) return useData<IPlatform>("/platforms/lists/parents")
    // unless specified, use cached data
  else return { data: platformData, isLoading: false, error: null }
}
// EXPORT HOOK
export default usePlatforms;