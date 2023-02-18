import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x6dC1d00D83b2cd070e0e98F5Af58db28CF99896C"
)

export default instance