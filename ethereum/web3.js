import Web3 from "web3"

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  window.ethereum.request({ method: "eth_requestAccounts" })
  web3 = new Web3(window.ethereum)
} else {
  // Handle the case where the user doesn't have MetaMask or another compatible wallet installed
  web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/e9ed25d3b8134613a21eb3589ee80581"));
}

export default web3;
