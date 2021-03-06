import React from "react";
import "./style.scss";
import "./App.css";
import "./gallery.scss";
import kha1 from "../images/gallery/kha1.jpg";
import kha2 from "../images/gallery/kha2.jpg";
import kha3 from "../images/gallery/kha3.jpg";
import kha4 from "../images/gallery/kha4.jpg";
import kha5 from "../images/gallery/kha5.jpg";
import kha6 from "../images/gallery/kha6.jpg";
import kha7 from "../images/gallery/kha7.jpg";
import kha8 from "../images/gallery/kha8.jpg";
import kha9 from "../images/gallery/kha9.jpg";
import kha10 from "../images/gallery/kha10.jpg";
import kha11 from "../images/gallery/kha11.jpg";
import kha12 from "../images/gallery/kha12.jpg";

const imgUrls = [kha1, kha2, kha3, kha4, kha5, kha6, kha7, kha8, kha9, kha10, kha11, kha12]

// const imgUrls = [{kha1},'/gallery/kha2.jpg','/gallery/kha3.jpg','/gallery/kha4.jpg','/gallery/kha5.jpg','/gallery/kha6.jpg','/gallery/kha7.jpg','/gallery/kha8.jpg','/gallery/kha9.jpg','/gallery/kha10.jpg','/gallery/kha11.jpg','/gallery/kha12.jpg']

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closemodale = this.closemodale.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <div onClick={(e) => this.openmodale(e, index)}>
        <img src={src} key={src} handleKeyDown={(e) => this.openmodale(e, index)}/>
      </div>
    ) 
  }
  openmodale(e, index) {
    this.setState ({ currentIndex: index });
  }
  closemodale(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState ({ currentIndex: null });
  }
  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1
    }));
  }
  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }
  render() {
    return (
      <div className="gallery-container">
        <h1 className="title is-1 has-text-centered">Our food and drink</h1>
        <div className="gallery-grid">
          {imgUrls.map(this.renderImageContent)}
        </div>
        <Gallerymodale 
          closemodale={this.closemodale} 
          findPrev={this.findPrev} 
          findNext={this.findNext} 
          hasPrev={this.state.currentIndex > 0} 
          hasNext={this.state.currentIndex + 1 < imgUrls.length} 
          src={imgUrls[this.state.currentIndex]} 
        />
      </div>
    )
  }
}

class Gallerymodale extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }  
  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27)
      this.props.closemodale();
    if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }
  render () {
    const { closemodale, hasNext, hasPrev, findNext, findPrev, src } = this.props;
    if (!src) {
      console.log('whut')
      return null;
    }
    return (
      <div>
        <div className="modale-overlay" onClick={closemodale}></div>
        <div isOpen={!src} className="modale">
          <div className='modale-body'>
            <a href="/" className='modale-close' onClick={closemodale} onKeyDown={this.handleKeyDown}>&times;</a>
            {hasPrev && <a href="#" className='modale-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
            {hasNext && <a href="#" className='modale-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
            <img src={src} />
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery