// Create a variable to hold your NFTs
const NFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _eyeColor, _shirtType, _bling) {
    const NFT = {
        name: _name,
        eyeColor: _eyeColor,
        shirtType: _shirtType,
        bling: _bling
    };
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Eye Color: \t" + NFTs[i].eyeColor);
        console.log("Shirt Type: \t" + NFTs[i].shirtType);
        console.log("Bling: \t\t" + NFTs[i].bling);
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Supply: " + NFTs.length);
}

// Call your functions below this line
mintNFT("Bob", "Blue", "Hoodie", "Gold Chain");
mintNFT("Sue", "Green", "T-Shirt", "Silver Bracelet");
mintNFT("Tim", "Brown", "Jacket", "Platinum Ring");
mintNFT("John", "Hazel", "Sweater", "Diamond Necklace");

listNFTs();
getTotalSupply();
