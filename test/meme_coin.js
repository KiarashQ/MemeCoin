const anchor = require("@project-serum/anchor");

describe("meme_coin", () => {
  const provider = anchor.AnchorProvider.local();
  anchor.setProvider(provider);

  it("Is initialized!", async () => {
    const program = anchor.workspace.MemeCoin;

    const tx = await program.methods
      .initialize(new anchor.BN(1000000000)) // 1 billion tokens
      .accounts({
        mint: mintKey.publicKey,
        tokenAccount: tokenAccountAddress,
        authority: provider.wallet.publicKey,
      })
      .rpc();

    console.log("Your transaction signature", tx);
  });
});
