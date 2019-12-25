import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';
import { english, chinese } from '../../language';

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <ContextConsumer>
        {value => {
          const { cn, eng } = value;
          return (
            <div className="about-page-wrapper">
              <div className="about-page">
                <h2 className="title">{cn ? chinese.aboutPageTitle : english.aboutPageTitle}</h2>
                <div className="info-box">
                  <div className="image-section">   
                    <img src="http://pic.yupoo.com/yehorlapko/e2c89cea/8f94b8a2.jpg" alt=""/>
                  </div>
                  <h2 className="about-name">| <span>Katarina</span>Blazhievskaya |</h2>
                  { cn &&
                    <h3 className="about-name cn-name">| <span>卡塔琳娜</span> |</h3>
                  }
                  <Link to="/contact"><button className="btn dark-btn">{cn ? chinese.contactPageTitle : english.contactPageTitle}</button></Link>
                  <div className="info-section">
                    { eng ?
                      <p className="bio-text">
                        <span className="abzac"/>I am a photographer from Ukraine, now based in Beijing, China. It’s a great pleasure to show you my artworks here. I do fine-art photography, my works are a mixture of classical photography, digital editing, and some particles, that were taken out of dreams.  <br/>
                        <span className="abzac"/>I`ve been working within the photographic field over 10 years. Оnce I realized that ordinary studio photography is not for me. I find it a bit boring, because It feels like some kind of neverending hunting for the fake emotion.  <br/> 
                        <span className="abzac"/>I understood that being able to create your own story, create your own character with unspoking background, and then, using the skills of post-production, embody my fantasy world in my works – that is really amazing. 
                        This way the artist can create another dreamlike reality. Here are no rules, no restrictions. 
                        <br/>
                        <span className="abzac"/>We all live in the wild rhytms of big cities, and in this chaos and continious hurry we’re forgetting about miracles. Through my artworks I’m trying to share a part of these miracles, to capture the moment, to stop this crazy flow of time, and maybe give somebody a chance to dream for a while. 
                      </p>
                      :
                      <p className="bio-text">
                        <span className="abzac"/>我是一名来自乌克兰的摄影师，目前住在中国北京。我很高兴在这里能给大家展示我的摄影作品。本人主要从事美术摄影，我的作品是古典照片、数码编辑以及我的梦想片段的混合物。 <br/>
                        <span className="abzac"/>我在摄影界工作了十多年，积累了一定的知识和经验。有一次我意识到了普通的摄影棚摄影不太适合我。对我而言，这种摄影方式有一点无聊，只不过是一种反反复复追寻虚假情感的过程而已。那一刻，我明白了，通过后期编辑技术，才可以将自己的玄幻世界体现在作品中，创造自己的故事、自己的形象和神奇的背景，从而达到不可思议的效果。这种方式让艺术家创造出另一个梦幻般的现实。这里没有任何规则，没有限制。 <br/> 
                        <span className="abzac"/>我们都生活在快节奏的城市，而在这纷扰、匆忙的生活之中，我们经常容易忽略奇迹。通过自己的摄影作品，我力求为观众呈现这些奇迹的一部分。我希望能抓住精彩的瞬间，阻止时间的快速流动，也许给某人一个梦想的机会。 <br/>
                      </p>
                    }        
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ContextConsumer>
    )
  }
}
