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
        <br></br><div class="button"><a href = "https://app.dework.xyz/pagedao-web3-writers">PageDAO on Dework</a></div>
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


      </>
    ),
  },
  {
    title: 'DAO',
    Svg: require('../../static/img/undraw_conference_speaker.svg').default,
    description: (
      <>
        Our decentralized autonomous organization is self-governed by $PAGE and the Membership NFTs. We work collectively to bring Web 3.0 literature to life.
        <br></br><div class="button"><a href = "https://membership.nftbookbazaar.com">Mint Your Membership NFT</a></div>

      </>
    ),
    },
    {
      title: 'Meta-Builders',
      Svg: require('../../static/img/undraw_certificate.svg').default,
      description: (
        <>
          PageDAO is proud to introduce you to our partner, Meta-Builders, a DAO for Web3 Buidlers to grow the space and help Web2 keep up. Visit PageDAO on the Meta-Builders Dework Board.
          <br></br><div class="button"><a href = "https://app.dework.xyz/meta-builders/page-dao-writers-gui">Meta-Builders Dework Board</a></div>
  
        </>
      ),
      },
      {
        title: 'Cent',
        Svg: require('../../static/img/Cent_sign.svg').default,
        description: (
          <>
            PageDAO was founded by Centians to help further the Cent mission of making it pay to be creative. Follow our Cent Page to get email updates, collectible NFTs, and more!
            <br></br><div class="button"><a href = "https://page.cent.co">Follow us on Cent</a></div>
    
          </>
        ),
        },
        {
          title: 'Cryptoversal Books',
          Svg: require('../../static/img/undraw_work_in_progress.svg').default,
          description: (
            <>
              PageDAO builds architecture that businesses like Cryptoversal Books use to attract writers and readers to the Web3 space. Visit the Cryptoversal Books NFTBook Store to see current NFTBooks!
              <br></br><div class="button"><a href = "https://nftbookstore.xyz/">Explore the NFTBook Store</a></div>
      
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
