import Head from 'next/head'
import { renderPaperCheckoutLink } from "@paperxyz/js-client-sdk"

export default function Home() {
  return (
    <>
      <Head>
        <title>Paper Embedded NFT Checkout Link Demo</title>
        <meta name="description" content="Paper NFT checkout link embedded inside button" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-100 w-screen h-screen flex items-center justify-center'>
        <button className='bg-gray-700 text-white rounded-full px-4 py-1' onClick={async () => {
          const { claimedTokens } = await renderPaperCheckoutLink({
            checkoutLinkUrl: "https://withpaper.com/checkout/70e08b7f-c528-46af-8b17-76b0e0ade641",
          });
          console.log("Purchase completed! Txn hash:", claimedTokens?.tokens[0]?.transferHash);
        }}>Buy with Paper</button>
      </div>
    </>
  )
}
