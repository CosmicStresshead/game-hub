// THIRD-PARTY COMPONENTS
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e6317496a3e94bee8f200d341c9900cb",
  }
})