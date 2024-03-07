import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GroupWork } from '@material-ui/icons';
import Carousel from 'react-bootstrap/Carousel';

const shopifyHeroHTML = `<div id='product-component-1706711854584'></div>
<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'story-5219.myshopify.com',
      storefrontAccessToken: 'f6bcf4ff1829aeca974f075eb19b8576',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '8990986010936',
        node: document.getElementById('product-component-1706711854584'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#0a0a0a",
        ":hover": {
          "background-color": "#111111"
        },
        ":focus": {
          "background-color": "#111111"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#0a0a0a",
        ":hover": {
          "background-color": "#111111"
        },
        ":focus": {
          "background-color": "#111111"
        }
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "background-color": "#0a0a0a",
        ":hover": {
          "background-color": "#111111"
        },
        ":focus": {
          "background-color": "#111111"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#0a0a0a",
        ":hover": {
          "background-color": "#111111"
        },
        ":focus": {
          "background-color": "#111111"
        }
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
</script>`;

import { useRef, useEffect } from 'react';

function ShopifyBuyNowElementUnused(props) {
  const divRef = useRef();

  const htmlString = shopifyHeroHTML;

  useEffect(() => {
    const fragment = document.createRange().createContextualFragment(htmlString);
    divRef.current.append(fragment);
  }, []);

  return <div ref={divRef} />;
}

function ShopifyBuyNowElement(props) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div><p className={styles.contents}>PageDAO ETHDenver 2024<br/>**Limited Time Only**<br/>Unisex Softstyle T-Shirt</p><br/>
      <img width="250px" src="./img/ETHDenverShirt.png" alt="PageDAO ETHDenver 2024 T-Shirt" />
      <Link to="https://story-5219.myshopify.com/discount/ETHDENVER2024?redirect=/products/pagedao-ethdenver-2024-limited-time-only-unisex-softstyle-t-shirt">
      <button className="button button--secondary button--block">Buy Now</button>
      </Link>
    </div>
  );
}

function HomepageCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className={styles.CarouselImage} src="./img/ethdenver/dylan_at_frictionless.jpg"/>
          <Carousel.Caption>
            <h3>Dylan speaks at Frictionless</h3>
            <p>Sharing the vision of creators getting paid for their work.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.CarouselImage} src="./img/ethdenver/PageDAO_ETHDenver_2024_billboard.png"/>
          <Carousel.Caption>
            <h3>Our mobile billboard</h3>
            <p>PageDAO got to roll through Denver in style!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.CarouselImage} src="./img/ethdenver/team_at_secret_booth.jpg"/>
          <Carousel.Caption>
            <h3>Dylan, Robbie, and Phil and company</h3>
            <p>
              We had a blast at the Secret Network booth!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
 }


function HomepageActions() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.actionsRow)}>
    <div className={clsx('row')}>
    <div className="card">
      <div className="card__header">
        <h3>New Bridging Guide</h3>
      </div>
      <div className="card__body">
        <p>
          Have $PAGE on Polygon or Ethereum and want to bridge? Check out our quick bridging guide.
        </p>
      </div>
      <div className="card__footer">
        <a href="/docs/bridge">
          <button className="button button--secondary button--block">Read More</button>
        </a>
      </div>
    </div>
    <div className="card">
      <div className="card__header">
        <h3>PageDAO and Secret Network</h3>
      </div>
      <div className="card__body">
        <p>
          PageDAO is a recent Q1 2024 grant recipient from Secret Network. Our goal is to build the next generation of privacy-first publishing. We'll see you at Eth Denver!
        </p>
      </div>
      <div className="card__footer">
        <a href="/docs/press-release-q1-2024">
          <button className="button button--secondary button--block">Read More</button>
        </a>
      </div>
      </div>
      <div className="card">
      <div className="card__header">
        <h3>Stake your $PAGE to Vote</h3>
      </div>
      <div className="card__body">
        <p>
          We need your voice! If you are a reader, writer, or publisher interested in the direction, design, economics, and future of PageDAO, stake your tokens in our DAODAO governance platform to vote and create proposals.
        </p>
      </div>
      <div className="card__footer">
        <a href="/docs/governance">
          <button className="button button--secondary button--block">Read More</button>
        </a>
      </div>
      </div>
    </div>
    </div>

  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className={clsx(styles.heroText)}>{siteConfig.tagline}</p>
          </div>
          <div className={clsx(styles.shopifyBuy)}><h1>EthDenver Deal</h1><ShopifyBuyNowElement/></div>
        </div>
      </div>
    </header>
  );
}

function HomepageBooks() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="container padding-vert--md">
      <h1>Publications by PageDAO Authors</h1>
      <div className="row">
        <div className="card">
          <div className="card__image">
            <img
              src="https://ipfs.nftbookbazaar.com/ipfs/QmSMkX9oEZTdcaC2BbxYCzfrsL9kUT2qv69VhMotfXo33w"
              alt="Vagobond Magazine"
              title="Vagobond Magazine" />
          </div>
          <div className="card__body">
            <h4>Vagobond Magazine</h4>
            <small>
              A Web3 Lifestyle Magazine with tons of great articles created by CD Vagobond.
            </small>
          </div>
          <div className="card__footer">
            <a href="https://opensea.io/assets/matic/0x931204fb8cea7f7068995dce924f0d76d571df99/193">
              <button className="button button--primary button--block">View</button>
            </a>          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img
              src="https://ipfs.nftbookbazaar.com/ipfs/QmVA6QMb3nNTT4KfSLuawfqx1wPuR24F6NctPQJxL2xvfB"
              alt="Fraud: A How-To Guide"
              title="Fraud: A How-To Guide" />
          </div>
          <div className="card__body">
            <h4>Fraud: A How-To Guide</h4>
            <small>
              One of many legal analysis publications by cryptoversalbooks.eth
            </small>
          </div>
          <div className="card__footer">
            <a href="https://opensea.io/assets/matic/0x931204fb8cea7f7068995dce924f0d76d571df99/191">
              <button className="button button--primary button--block">View</button>
            </a>          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img
              src="https://ipfs.nftbookbazaar.com/ipfs/QmZKpMrE2j45bL7qgLd1Nw8G4jfnQLZnEPLxvz51tVFv85"
              alt="Effective Cybernetic Coordination"
              title="Effective Cybernetic Coordination" />
          </div>
          <div className="card__body">
            <h4>Effective Cybernetic Coordination</h4>
            <small>
              T. Dylan Daniel, philosopher, makes sense of the emergent intersection of technology and collective consciousness
            </small>
          </div>
          <div className="card__footer">
            <a href="https://opensea.io/assets/matic/0x931204fb8cea7f7068995dce924f0d76d571df99/132">
              <button className="button button--primary button--block">View</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomepageTimeline() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div><h1 className={clsx(styles.TimelineTitle)}>PageDAO Milestones</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="August 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GroupWork />}
        >
          <h3 className="vertical-timeline-element-title">DAO Inception</h3>
          <p>
            PageDAO launches to build decentralized Library of Alexandria, starting with interactive pilot books on Polygon blockchain
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2021"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GroupWork />}
        >
          <h3 className="vertical-timeline-element-title">On-Chain Book Minter</h3>
          <p>
            Readme Books opens 1st ever user-created beta collection w/DAO governance
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GroupWork />}
        >
          <h3 className="vertical-timeline-element-title">Community Growth</h3>
            <ul>
              <li>100+ live writing events on discord</li>
              <li>100+ original published books</li>
              <li>Mountains of user feedback acquired</li>
            </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2023"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GroupWork />}
        >
          <h3 className="vertical-timeline-element-title">Core Team and Reseaerch</h3>
          <p>
            PageDAO Core Team re-forms for new vision, Web3 Books Standards Group wraps communal research project, new direction takes shape.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2023"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<GroupWork />}
        >
          <h3 className="vertical-timeline-element-title">Strategic Consulting Sessions</h3>
          <p>
            Platform Cooperatives signs on for strategic planning sessions & long-term guidance
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="December 2023"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<GroupWork />}
        >
          <h3 className="vertical-timeline-element-title">PageDAO moves to Cosmos</h3>
          <p>
            $PAGE token launches on Osmosis DEX, DAODAO Governance launches
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

function HomepageImportant() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="hero hero--dark">
      <div className="container">
        <h1 className="hero__title">Partner with us!</h1>
        <p className="hero__subtitle">PageDAO welcomes organizations with a shared mission of supporting decentralized literature. Is your org helping to publish work in Web3? We'd love to have your voice heard in our operations!</p>
        <div>
          <a href="/docs/partner">
            <button className="button button--primary button--outline button--lg">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function HomepageMisc() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="hero hero--dark">
      <div className="container">
        <h1 className="hero__title">The Genesis of PageDAO</h1>
        <p className="hero__subtitle">PageDAO's journey began with a simple yet powerful vision: to revolutionize the world of storytelling by integrating the innovative capacities of Web3 technology. Our founders, united by their passion for literature and belief in the potential of blockchain, embarked on this journey to create a space where writers and readers could thrive in a decentralized, equitable, and forward-thinking ecosystem.</p>
        <div>
          <a href="/docs/vision">
            <button className="button button--primary button--outline button--lg">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function HomepageTeam() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="hero hero--primary" >
      <div className="container">
        <div className="row">
          <h1 className="hero__title">PageDAO Core Team</h1>
        </div>
        <div className="row">
          <div className="avatar avatar--vertical col col--3">
            <img
              className="avatar__photo avatar__photo--xl"
              src="https://cent-media.mypinata.cloud/ipfs/QmXz3iSX2rvhviaAaFPxiotLmKbeXByDuryofz5gtDaKRD" />
            <div className="avatar__intro">
              <div className="avatar__name">T. Dylan Daniel</div>
              <small className="avatar__subtitle">
                With a background in philosophy and a passion for blockchain technology, Dylan brings a unique perspective to the world of digital storytelling. His journey from academia to Web3 innovator has been foundational in shaping PageDAO's mission.
              </small>
            </div>
          </div>

          <div className="avatar avatar--vertical col col--3">
            <img
              className="avatar__photo avatar__photo--xl"
              src="https://cent-resources-prod.s3.us-west-2.amazonaws.com/f0c101f7-418d-404d-abba-198e0ba331d7.png" />
            <div className="avatar__intro">
              <div className="avatar__name">Rionna Morgan</div>
              <small className="avatar__subtitle">
                Rionna's expertise in community building and her deep understanding of the literary world are instrumental in fostering the collaborative and supportive environment that PageDAO is known for.
              </small>
            </div>
          </div>

          <div className="avatar avatar--vertical col col--3">
            <img
              className="avatar__photo avatar__photo--xl"
              src="https://aib-resources-prod.s3.us-west-2.amazonaws.com/de6622a8-029c-43bf-a79e-ac31fdab059e.png" />
            <div className="avatar__intro">
              <div className="avatar__name">Robbie Pollock</div>
              <small className="avatar__subtitle">
                Robbie's creative vision and dedication to the intersection of storytelling and technology have ensured that PageDAO becomes a vibrant and inspiring space for writers and readers alike. His contributions have been key to cultivating this platform.
              </small>
            </div>
          </div>

          <div className="avatar avatar--vertical col col--3">
            <img
              className="avatar__photo avatar__photo--xl"
              src="https://cent-resources-prod.s3.us-west-2.amazonaws.com/c4d935c9-a642-4fd2-839b-90a20c398004.png" />
            <div className="avatar__intro">
              <div className="avatar__name">Greg Fishbone</div>
              <small className="avatar__subtitle">
              Greg’s extensive experience in blockchain and his innovative approach to technology have been crucial in developing PageDAO's platform, making it both user-friendly and cutting-edge.
              </small>
            </div>
          </div>

          <div className="avatar avatar--vertical col col--3">
            <img
              className="avatar__photo avatar__photo--xl"
              src="https://static.wixstatic.com/media/e6a454_ea8063a035ba4a07a644c920bd46fe54~mv2.jpg" />
            <div className="avatar__intro">
              <div className="avatar__name">DragoNate</div>
              <small className="avatar__subtitle">
              DragoNate is a Discord wizard. He has helped build, run and moderate multiple servers & is a strong support role for many projects. His expertise with all things Discord & helpful attitude will be invaluable for PageDAO's mission.              </small>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="We are a DAO founded to empower writers, readers, and publishers using Web3 technology.">
      
      <HomepageCarousel />
      <HomepageImportant />
      <HomepageActions />
      <HomepageBooks />
      <main>
        <HomepageTimeline />
        <HomepageMisc />
        <HomepageTeam />
      </main>
    </Layout>
  );
}
//<HomepageHeader />
