import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Metaverse Writers Guild',
    Svg: require('../../static/img/undraw_Working.svg').default,
    description: (
      <>
        Our community is comprised of writers, readers and all creatives working to bring literature to blockchain. 
        <div class="button"><a href = "https://discord.com/invite/MTWhQjnMVh">Join the discord</a></div>
      </>
    ),
    
  },
  {
    title: 'PAGE',
    Svg: require('../../static/img/undraw_transfer_money.svg').default,
    description: (
      <>
        Our $PAGE utility token serves as a currency within the PAGE Network to reward literary creatives and supporters for their contributions in the DAO.
        <div class="button"><a href = "https://v2.info.uniswap.org/pair/0x9a25d21e204f10177738edb0c3345bd88478aaa2">Trade on Uniswap</a></div>
      </>
    ),
  },
  {
    title: 'DAO',
    Svg: require('../../static/img/undraw_conference_speaker.svg').default,
    description: (
      <>
        Our decentralized autonomous organization is self-governing and works collectively to further our vision to bring Web 3.0 literature to life.
        <div class="button"><a href = "https://vote.pagedao.org/#/pagedao.eth">Snapshot Governance</a></div>
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
