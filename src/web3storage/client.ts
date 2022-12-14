import { Web3Storage } from "web3.storage";
import { WEB3STORAGE_TOKEN } from "../constants";

function getAccessToken() {
  return WEB3STORAGE_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}
