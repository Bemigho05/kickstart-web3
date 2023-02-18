import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xD4405cd8847aa9c7e4599589fC37be9C80d3FCc5"
)

export default instance