import Entity from '@mediamonks/temple/Entity';
import EventDispatcherComponent from '@mediamonks/temple/component/EventDispatcherComponent';
import MonetPlatformComponent from '@mediamonks/temple/component/platform/MonetPlatformComponent';
import DoubleClickPlatformComponent from '@mediamonks/temple/component/platform/DoubleClickPlatformComponent';
import ConfigComponent from '@mediamonks/temple/component/ConfigComponent';

import '@netflixadseng/pk-component-utils';
import '@netflixadseng/wc-monet-integrator';
import '@netflixadseng/wc-netflix-fonts';
import '@netflixadseng/wc-netflix-text';
import '@netflixadseng/wc-netflix-flushed-ribbon';
import '@netflixadseng/wc-netflix-video';
import '@netflixadseng/wc-netflix-img';
import '@netflixadseng/wc-netflix-brand-logo';
import '@netflixadseng/wc-netflix-cta';
import '@netflixadseng/wc-netflix-preloader';
import '@netflixadseng/wc-netflix-ratings-bug';

import config from '../.richmediarc';
import getEnabler from '@mediamonks/temple/util/getEnabler';

/*

RIBBON
INTROVIDEO / OR NOT
LOGO IN ANIMATING
VIDEO BEFORE END -> LOGO OUT ANIMATING
NEW SCENE -> LOGO IN ANIMATING
# MAIN ANIMATION

*/

class Banner extends Entity {
  hasPlayed = false;

  constructor() {
    super();

    this.addComponent(new ConfigComponent(config));
    this.addComponent(new MonetPlatformComponent());
    this.addComponent(new DoubleClickPlatformComponent());
    this.addComponent(new EventDispatcherComponent());
  }

  async init() {
    await super.init();

    this.domNetflixRibbon = document.body.querySelector('netflix-flushed-ribbon');
    this.domNetflixVideo = document.body.querySelector('netflix-video');
    this.domNetflixBrandLogo = document.body.querySelector('netflix-brand-logo');
    this.domnNetflixCta = document.body.querySelector('netflix-cta');
    this.domMainExit = document.body.querySelector('.mainExit');
    this.domSupercutOverlay = document.body.querySelector('.supercutOverlay');

    this.domMainExit.addEventListener('click', this.handleMainClick);
    this.domMainExit.addEventListener('mouseover', this.handleRollOver);
    this.domMainExit.addEventListener('mouseout', this.handleRollOut);

    this.playIntroAnimation();
  }

  handleMainClick = () => {
    const component = this.getComponent(MonetPlatformComponent);
    component.gotoExit();
  };

  handleRollOver = () => {
    this.domnNetflixCta.mouseover();
  };

  handleRollOut = () => {
    this.domnNetflixCta.mouseout();
  };

  playIntroAnimation() {
    const ribbonAnimation = this.getRibonTimeline();
    ribbonAnimation.play();

    this.domNetflixRibbon.addEventListener('leftPillarComplete', () => {
      const tl = new TimelineLite();
      tl.add(this.getNetflixVideoTimeline());
      tl.call(() => {
        this.domNetflixBrandLogo.play();
      });
    });

    this.domNetflixVideo.addEventListener('video-time', e => {
      if (!this.hasPlayed && e.detail.currentTime / e.detail.duration > 0.75) {
        this.hasPlayed = true;
        this.domNetflixBrandLogo.reverse();
      }
    });

    this.domNetflixVideo.addEventListener('video-complete', e => {
      this.playMainAnimation();


      this.domNetflixBrandLogo.play();
    });
  }

  playMainAnimation() {
    this.domSupercutOverlay.classList.add('hide');
  }

  getRibonTimeline() {
    const tl = new TimelineLite();
    tl.call(() => {
      this.domNetflixRibbon.play();
    });

    return tl;
  }

  getNetflixVideoTimeline() {
    const tl = new TimelineLite();
    tl.call(() => {
      this.domNetflixVideo.play();
    });

    return tl;
  }
}

const banner = new Banner();
banner.init();
