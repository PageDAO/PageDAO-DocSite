import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Metaverse Writers Guild',
    Svg: require('../../static/img/undraw_Working.svg').default,
    description: (
      <>
        Our community is comprised of writers, readers and all creatives working to bring permissionless decentralized literature to Web3. 
        <br></br><div class="button"><a href = "https://bit.ly/pagedao-discord">Join PageDAO Discord</a></div>
        <br></br><div class="button"><a href = "https://page.cent.co">Follow our Cent Page for email updates!</a></div>
        <br></br><div class="button"><a href = "https://mint.nftbookbazaar.com">Mint your book to the Polygon blockchain</a></div>

      </>
    ),
    
  },
  {
    title: 'PAGE',
    Svg: require('../../static/img/undraw_transfer_money.svg').default,
    description: (
      <>
        Welcome to $PAGE, the writer's cryptocurrency. $PAGE grants govenance weight, access to DAO member perks, and can be used to pay for writing on our Dework Board.
        <br></br><div class="button"><a href = "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x60e683c6514edd5f758a55b6f393bebbafaa8d5e">Trade on Uniswap</a></div>
        <br></br><div class="button"><a href = "https://app.dework.xyz/pagedao-web3-writers">PageDAO on Dework</a></div>

      </>
    ),
  },
  {
    title: 'DAO',
    Svg: require('../../static/img/undraw_conference_speaker.svg').default,
    description: (
      <>
        Our decentralized autonomous organization is self-governed by $PAGE and the Membership NFTs. We work collectively to bring Web 3.0 literature to life.
        <br></br><div class="button"><a href = "https://vote.pagedao.org/#/pagedao.eth">Snapshot Governance</a></div>
        <br></br><div class="button"><a href = "https://membership.nftbookbazaar.com">Mint Your Membership NFT</a></div>
        <br></br><div class="button"><a href = "https://opensea.io/collection/readme-books">ReadMe Books NFTBooks on Opensea</a></div>

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
