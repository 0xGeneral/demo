const Forwarder = artifacts.require("Forwarder");


module.exports = async function (deployer,network, addresses) {
    deployer.then(async () => {

    await deployer.deploy(Forwarder);

})
};
