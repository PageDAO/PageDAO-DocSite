import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Metaverse Publishing DAO',
    Svg: require('../../static/img/undraw_Working.svg').default,
    description: (
      <>
        Our PageDAO community is jointly owned by its membership comprised of writers, readers and lovers of literature. 
      We are working to bring permissionless decentralized publishing to Web3.  
        <br></br><div class="button"><a href = "https://mint.nftbookbazaar.com">Mint your written work as an NFT today.</a></div>
      </>
    ),
    
  },
  {
    title: 'PAGE',
    Svg: require('../../static/img/undraw_transfer_money.svg').default,
    description: (
      <>
        Welcome to $PAGE, the writer's cryptocurrency. 
      $PAGE grants govenance weight, access to DAO member perks, and can be used to buy custom content on our <a href = "https://app.dework.xyz/pagedao-web3-writers"> Community Dework Board. </a> 
        <br></br><div class="button"><a href = "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x60e683c6514edd5f758a55b6f393bebbafaa8d5e">Trade Page on Uniswap</a></div>


      </>
    ),
  },
  {
    title: 'DAO',
    Svg: require('../../static/img/undraw_conference_speaker.svg').default,
    description: (
      <>
        Our decentralized autonomous organization is self-governed by $PAGE and the Membership NFTs. 
      We work collectively to put writers and developers in touch with each other about what really matters, and then we build together.
        <br></br><div class="button"><a href = "https://membership.nftbookbazaar.com">Mint Your Membership NFT</a></div>

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
