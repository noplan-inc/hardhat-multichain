import {HardhatUserConfig} from "hardhat/config";

const hardhatConfig: HardhatUserConfig = {
    networks: {
        hardhat: {
            chainId: 1100
        }
    }
};
export default hardhatConfig;