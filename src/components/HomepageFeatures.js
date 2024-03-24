import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Decentralized Book Publishing',
    Svg: require('../../static/img/undraw_book_lover_re_rwjy.svg').default,
    description: (
      <>
     <div class="button"><a href = "https://mint.nftbookbazaar.com">Mint your written work as a V1 NFTBook today.</a></div>
      </>
      
    ),
    
  },
    {
      title: 'Web3 Publishing Standard',
      Svg: require('../../static/img/undraw_bookshelves_re_lxoy.svg').default,
      description: (
        <>
       <div class="button"><a href = "https://discord.gg/AJYAjC6gDA">Join the Web3 Publishing Standard Project.</a></div>
        </>
      ),
      
    },
    {
      title: 'Ethereum + IPFS',
      Svg: require('../../static/img/undraw_new_ideas_re_asn4.svg').default,
      description: (
        <>
        <div class="button"><a href = "https://github.com/PageDAO/Minter-Minting-DApp">See our Minter on GitHub</a></div>
  
  
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
