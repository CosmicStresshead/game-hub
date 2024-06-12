// PROJECT IMPORTS
import useData from "./useData";

// INTERFACES
export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

// HOOK LOGIC
const usePlatforms = () => useData<IPlatform>("/platforms/lists/parents");

// EXPORT HOOK
export default usePlatforms;