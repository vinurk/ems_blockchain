async function main() {
  const EvidenceManager = await ethers.getContractFactory("EvidenceManager");

  // Start deployment, returning a promise that resolves to a contract object
  const EvidenceManager_ = await EvidenceManager.deploy();
  console.log("Contract address:", EvidenceManager_.address);


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });