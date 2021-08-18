import {HardhatUserConfig} from "hardhat/config";

const hardhatConfig: HardhatUserConfig = {
    networks: {
        hardhat: {
            chainId: 1137
        }
    }
};
export default hardhatConfig;