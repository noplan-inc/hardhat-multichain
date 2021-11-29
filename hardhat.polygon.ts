import { HardhatUserConfig } from "hardhat/config";

const hardhatConfig: HardhatUserConfig = {
    networks: {
        hardhat: {
            chainId: 1137,
            mining: {
                auto: false,
                interval: 500,
            },
        },
    },
};
export default hardhatConfig;