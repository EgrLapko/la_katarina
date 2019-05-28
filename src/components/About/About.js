import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="about-page">
        <div className="about-header">
          <Fade>
            <h2 className="about-title">About Me</h2>
          </Fade>      
        </div>
        <div className="about-info">
          <div className="about-parallax">
            <Parallax
                blur={0}
                bgImage={require('../../images/katarina.jpg')}
                bgImageAlt="par2"
                strength={600}
                contentClassName="parallax-background fourth"
              >   
                <div className="parallax-about-section">
                  <p className="social-btn"><i className="fab fa-facebook-square"/></p>
                  <p className="social-btn"><i className="fab fa-instagram"></i></p>
                  <p className="social-btn"><i className="fab fa-weixin"></i></p>
                </div>             
            </Parallax>
          </div>
          <Fade bottom>
            <div className="about-textbox">
              <h2>Катарина Блажиевская. Фотохудожник</h2>
              <p>
              Катарина Блажиевская (La Katarina)– фотохудожник из Украины, на данный момент 
              проживает в Пекине.В самом начале творческого пути ее привлекала возможность 
              передачи нереалистичных, художественных образов, а потому работает, в основном, 
              в жанре сюрреализма, отдавая предпочтение искусной постановочной фотографии с 
              характерно богатым изобразительным языком и четкими, детальными образами. 
              Каждый образ – это технически сложный, многоэтапный процесс работы, потому как для
              Катарины недостаточно подобрать нужного человека для конкретного образа и снять его, 
              нужно передать его дух и его суть, а потому последующая обработка полученной 
              фотографии имеет, пожалуй, самое важное значение, ведь именно во время этого 
              процесса изображение принимает четкие формы, необходимую атмосферу, и целостность. 
              Это словно работа над полноценной картиной, в которой важна каждая деталь и каждое 
              движение кистью, и в этом плане Катарина – исключительный художник.За все время 
              пребывания в Украине Катарина провела множество выставок, принимала участие 
              во многих соревнованиях в своем ремесле, как локальных, так и интернациональных. 
              В данный момент, в Пекине, работает над несколькими крупными проектами, способными 
              удивить не только масштабом и глубиной, но и четкими, выверенными образами, 
              за которыми скрывается детальная, длинная история, наполненная мифами и реальностью.
              </p>
            </div>
          </Fade>   
        </div>
      </div>
    )
  }
}
