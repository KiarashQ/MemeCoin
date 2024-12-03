# Meme Coin on Solana

This repository contains the code and instructions to create and deploy your own meme coin on the Solana blockchain. The smart contract is built using the **Anchor Framework**, which simplifies Solana development.

## Features
- Mint your own meme coin with a configurable total supply and decimals.
- Simple and customizable Rust-based smart contract.
- Fully testable and ready for deployment on Solana's **Devnet**, **Testnet**, or **Mainnet**.

---

## Prerequisites

Before starting, ensure you have the following installed:

### 1. **Solana CLI**
Install the Solana CLI tools:
```bash
sh -c "$(curl -sSfL https://release.solana.com/v1.15.2/install)"
```
Add Solana to your PATH:

```bash
export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
```
Verify the installation:

```bash
solana --version
```
### 2. Rust
Install Rust and its package manager, Cargo:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup default stable
rustup update
```
Verify the installation:

```bash
rustc --version
```
### 3. Anchor Framework
Install the Anchor CLI, which simplifies Solana smart contract development:

```bash
cargo install --git https://github.com/coral-xyz/anchor --tag v0.26.0 anchor-cli --locked
```
Verify the installation:

```bash
anchor --version
```
## Setup Instructions
1. Clone the Repository
Clone the project and navigate into the directory:

```bash
git clone https://github.com/KiarashQ/MemeCoin.git
cd MemeCoin
```
2. Install Node.js Dependencies
Install dependencies required for testing:

```bash
npm install
```
3. Configure Solana Wallet
Create or configure your Solana wallet:

```bash
solana-keygen new --outfile ~/.config/solana/id.json
```
Set the wallet as default:

```bash
solana config set --keypair ~/.config/solana/id.json
```
Check your wallet balance:

```bash
solana balance
```
Fund your wallet with test SOL on Devnet:

```bash
solana airdrop 2
```
4. Set Solana Cluster
Set the cluster (e.g., Devnet, Testnet, or Mainnet):

```bash
solana config set --url devnet
```
Check the configuration:

```bash
solana config get
```
## Customization
1. Update the Total Supply
In test/meme_coin.js, update the initialize method to set the desired total supply of your token:

```javascript
const tx = await program.methods
  .initialize(new anchor.BN(1000000000)) // Replace with your desired total supply
  .accounts({
    mint: mintKey.publicKey,
    tokenAccount: tokenAccountAddress,
    authority: provider.wallet.publicKey,
  })
  .rpc();
```
2. Change Token Decimals
In programs/meme_coin/src/lib.rs, adjust the decimals in the Initialize struct:

```rust
#[account(init, payer = authority, mint::decimals = 9, mint::authority = authority.key(), space = 82)]
```
Change mint::decimals = 9 to the number of decimals you want.

## Build and Deploy
1. Build the Program
Compile the smart contract:

```bash
anchor build
```
2. Deploy the Program
Deploy the smart contract to Solana:

```bash
anchor deploy
```
After deployment, Anchor will output your Program ID. Update the Anchor.toml file with this ID:

```toml
[programs.localnet]
meme_coin = "YourProgramIDHere"
```
## Testing the Program
Run Tests
Run the pre-configured tests:

```bash
anchor test
```
This test will:

Deploy the smart contract locally.
Initialize a token mint with the specified total supply.
Verify that the token is minted correctly.
Debugging
If the test fails, use the following to inspect logs:

```bash
solana logs
```
## Additional Tools and Commands
Check Deployed Program
To verify your program is deployed:

```bash
solana program show <YourProgramID>
```
Interact with SPL Token
Install the SPL CLI for advanced token management:

```bash
cargo install spl-token-cli
```
Create an Associated Token Account
```bash
spl-token create-account <TOKEN_MINT_ADDRESS>
```
Mint Tokens
```bash
spl-token mint <TOKEN_MINT_ADDRESS> <AMOUNT>
```
Check Token Balance
```bash
spl-token balance <TOKEN_MINT_ADDRESS>
```
Cleanup
To free up space by removing old build files:

```bash
rm -rf target/
```
## Common Errors and Fixes
1. Out of Funds
If you see an error about insufficient funds, ensure your wallet has enough SOL:

```bash
solana airdrop 2
```
2. Program Deployment Issues
If deployment fails, try rebuilding the program:

```bash
anchor build
anchor deploy
```
3. Access Denied
Ensure your wallet and Solana configuration are correct:

```bash
solana config get
solana address
```
## Contributing
Feel free to fork this repository and customize it for your own projects. Contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Resources
Solana Documentation
Anchor Framework Documentation
SPL Token Program



