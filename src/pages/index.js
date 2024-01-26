import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GroupWork } from '@material-ui/icons';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://story-5219.myshopify.com/collections/pagedao-community-coming-soon">
            Get PageDAO Merch and Support Our Cause!
          </Link>
        </div>

        <div class="row">
        <div class="card">
          <div class="card__header">
            <h3>New Bridging Guide</h3>
          </div>
          <div className="card__body">
            <p>
              Have $PAGE on Polygon or Ethereum and want to bridge? Check out our quick bridging guide.
            </p>
          </div>
          <div className="card__footer">
            <a href="/docs/bridge">
              <button class="button button--secondary button--block">Read More</button>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card__header">
            <h3>PageDAO and Secret Network</h3>
          </div>
          <div class="card__body">
            <p>
              PageDAO is a recent Q1 2024 grant recipient from Secret Network. Our goal is to build the next generation of privacy-first publishing. We'll see you at Eth Denver!
            </p>
          </div>
          <div class="card__footer">
            <a href="/docs/press-release-q1-2024">
              <button class="button button--secondary button--block">Read More</button>
            </a>
          </div>
          </div>
          <div class="card">
          <div class="card__header">
            <h3>Stake your $PAGE to Vote</h3>
          </div>
          <div class="card__body">
            <p>
              We need your voice! If you are a reader, writer, or publisher interested in the direction, design, economics, and future of PageDAO, stake your tokens in our DAODAO governance platform to vote and create proposals.
            </p>
          </div>
          <div class="card__footer">
            <a href="/docs/governance">
              <button class="button button--secondary button--block">Read More</button>
            </a>
          </div>
          </div>
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
    <div><h1 className="hero__title">PageDAO Milestones</h1>
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
      <HomepageHeader />
      <HomepageBooks />
      <main>
        <HomepageTimeline />
        <HomepageMisc />
        <HomepageTeam />
      </main>
    </Layout>
  );
}
