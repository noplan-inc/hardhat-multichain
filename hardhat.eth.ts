import {HardhatUserConfig} from "hardhat/config";

const hardhatConfig: HardhatUserConfig = {
    networks: {
        hardhat: {
            chainId: 1001
        }
    }
};
export default hardhatConfig;