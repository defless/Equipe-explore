import config from '../../config';
import React, { Component } from 'react';
import Edito from '../Edito/Edito';
import Element from '../Element/Element';
import StaticElement from '../StaticElement/StaticElement';
import Skew from '../Skew/Skew';
import Video from '../Video/Video';
import Masthead from '../Masthead/Masthead';
import './Board.css';


function getSizes() {
    var width = Math.min(document.documentElement.clientWidth, config.ratio.width),
		height = Math.min(document.documentElement.clientHeight, config.ratio.height),
		mobile = false,
        slideWidth = width,
        boardHeight = height,
        boardTop = 0;

	if (width < config.ratio.width) {
		mobile = true;
	}
    if (width / height < config.ratio.width / config.ratio.height) {
        boardHeight = config.ratio.height * width / config.ratio.width;
        boardTop = (document.documentElement.clientHeight - boardHeight) / 2;
	}

    return {
        slideWidth: slideWidth,
        boardHeight: boardHeight,
		boardTop: boardTop,
		mobile : mobile
    }
}

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideWidth:getSizes().slideWidth,
            boardHeight:getSizes().boardHeight,
			boardTop:getSizes().boardTop,
			mobile:getSizes().mobile
        };
    }

    componentDidMount() {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.setState({
                slideWidth:getSizes().slideWidth,
                boardHeight:getSizes().boardHeight,
				boardTop:getSizes().boardTop,
				mobile:getSizes().mobile
            });
        });

    }

    render() {
		var mobile = this.state.mobile;
        return (
            <div id="board" className="Board" style={{marginTop:this.state.boardTop, left:0,  minWidth:this.state.slideWidth, height: this.state.boardHeight}}>


                {/* CHAP 0 - Introduction */}

                 <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[0].zone_1} positionTop="65%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[0].zone_2} positionTop="27%"></Edito>
                    <Element name="SPRAY-PLAYER.png" positionLeft="-111%"></Element>
                </div>
                <div className="Board__slide">
                    <Video id="x75wut4" maxHeight="400" ratio="1.8"></Video>
                    <Element name="SPRAY0.png" positionLeft="-22%"></Element>
                </div>
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[0].zone_3} positionLeft="20%" positionTop="37%"></Edito>
                </div>
                <div className="Board__slide">
                    <Video id="x75q393" maxHeight="400" ratio="1.8"></Video>
                    <Element name="SPRAY1.png" positionLeft="-30%"  ></Element>
                </div>
                 <div className="Board__slide">
                    <Element name="PLAYER1.png" positionLeft="5%"></Element>
                    <Element name="EXERGUECHAP0.png" positionLeft="5%"></Element>
                </div>
                 <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                </div>

                {/* CHAP 1 */}
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP01-TITRE.png" bg="CHAP01-OUVERTURE.png"></Skew>
                </div>

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                </div>
                
                <div className="Board__slide Board__slide--bottom" >
                    <Element name="EXERGUECHAP1.png" positionLeft="10%"></Element>
                    <Edito content={this.props.datas.text[1].zone_1} positionBottom="15%"></Edito>
                </div>
                <div className="Board__slide  Board__slide--top">
                    <Element name="SPRAY2.png" positionLeft="45%" ></Element>
                    <Element name="PLAYER2.png" positionLeft="26%"></Element>
                </div>
                <div className="Board__slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Edito content={this.props.datas.text[1].zone_2}  positionTop="40%" positionLeft="-10%" ></Edito>
                </div>
                
                <div className="Board__slide">
                    <Video id="x75q3ed" maxHeight="400" ratio="1.8" ></Video>
                    <Element name="SPRAY3.png" positionLeft="10%" ></Element>
                </div>

                <div className="Board__slide Board__slide--top board-small-slide" style={!mobile ? {minWidth: '65vh'} : {}}>
                </div>
                <div className="Board__slide Board__slide--middle board-small-slide" style={!mobile ? {minWidth: '70vh'} : {}}>
                    <Element name="INFOG1.png" positionLeft="-50%"></Element>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Element name="PLAYER3.png" positionLeft="35%" ></Element>
                    <Element name="QUOTE2.png" positionLeft="20%"></Element>
                </div>
                <div className="Board__slide">

                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[1].zone_3}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Element name="TROPHEE.png" positionLeft="-110%"></Element>
                    <Element name="CONFETTIS.png" positionLeft="-110%" index="p1"></Element>
                    <Element name="CONFETTIS-FLOU.png" positionLeft="-110%" index="p2" ></Element>
                    <Edito content={this.props.datas.text[1].zone_4}></Edito>
                </div>

                {/* CHAP 2 */}

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP02-TITRE.png" bg="CHAP02-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide Board__slide--middle red white board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="SPRAY4.png" ></Element>
                    <Element name="EXERGUECHAP2.png" positionLeft="10%"></Element>
                    
                </div>
                <div className="Board__slide Board__slide--middle red white">
                    <Edito content={this.props.datas.text[2].zone_1} positionTop="20%"> positionLeft="20%"</Edito>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="SPRAY5.png" positionLeft="0%"></Element>
                    <Element name="QUOTE4.png" positionLeft="0%"></Element>

                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="SPRAY-BG3.png" positionLeft="55%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Video id="x75q3ih" maxHeight="400" ratio="1.8" ></Video>
                </div>
                <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_2} positionTop="20%" ></Edito>
                </div>
                <div className="Board__slide red">
                    <Video id="x75q3jt" maxHeight="400" ratio="1.8" ></Video>
                </div>
                <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_3} positionTop="20%"  ></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Video id="x75zedn" maxHeight="400" ratio="1.8" ></Video>
                </div>
                <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_4} positionTop="20%" ></Edito>
                 </div>
                 <div className="Board__slide Board__slide--middle red white board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>

                {/* CHAP 3 */}

                <div className="Board__slide red board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP03-TITRE.png" bg="CHAP03-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide Board__slide--top">
                    <Element name="SPRAY6.png" positionLeft="25%" ></Element>
                    <Element name="EXERGUECHAP3.png" positionLeft="25%" ></Element>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[3].zone_1}></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="VIDEO-SPRAY.png"></Element>
                    <Element name="VIDEO-EXERGUE.png"></Element>
                    <Video id="x75q3n2" maxHeight="400" ratio="1.8" ></Video>
                </div>
                 <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide ">
                    <Element name="PHOTO1.png" positionTop="18%" positionLeft="-20%" ></Element>
                    <Edito content={this.props.datas.text[3].zone_2}  positionBottom="15%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="PHOTO2.png" positionBottom="35%" positionLeft="-20%" ></Element>
                    <Edito content={this.props.datas.text[3].zone_3} positionTop="28%"></Edito>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[3].zone_4} positionTop="12%"></Edito>
                    <Element name="GANTS.png" positionRight="-12%" positionBottom="3%"></Element>
                </div>
                <div className="Board__slide">
                    <Video id="x75zax3" maxHeight="400" ratio="1.5" ></Video>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Edito content={this.props.datas.text[3].zone_5} positionBottom="25%"></Edito>
                    <Element name="SPRAY-BG.png" positionLeft="-20%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Element name="PLAYER4-TAG.png" positionLeft="-70%"></Element>
                    <Element name="PLAYER4.png" positionLeft="0vh"></Element>
                </div>
                 <div className="Board__slide">
                    <Video id="x75q3oh" maxHeight="400" ratio="1.8" ></Video>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[3].zone_6}></Edito>
                </div>
                <div className="Board__slide">
                    <Video id="x75q3pi" maxHeight="400" ratio="1.8" ></Video>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[3].zone_7} ></Edito>
                </div>
                <div className="Board__slide Board__slide--top">
                    <Element name="PLAYER5-TAG.png" positionLeft="-90%" positionTop="-15%"></Element>
                    <Element name="PLAYER5.png" positionLeft="-90%" ></Element>
                </div>
                <div className="Board__slide Board__slide--top">
                    <Element name="INFOG2.png" positionLeft="15"></Element>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>

                {/* CHAP04 - Conclusion */}

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP04-TITRE.png" bg="CHAP04-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide only_blue board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide Board__slide--bottom">
                    <Element name="SPRAY7.png" ></Element>
                    <Element name="EXERGUECHAP4.png" ></Element>
                    <Element name="PLAYER6.png" ></Element>
                    <Edito content={this.props.datas.text[4].zone_1}> positionBottom="30%" </Edito>
                </div>
                <div className="Board__slide only_blue board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide Board__slide--bottom only_blue">
                    <Video id="x75zeja" maxHeight="400" ratio="1.8" ></Video>
                </div>
                <div className="Board__slide only_blue board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide Board__slide--top white only_blue">
                    <Element name="SPRAY-BG2.png" positionLeft="-20%"></Element>
                    <Edito content={this.props.datas.text[4].zone_2} positionTop="12%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white only_blue">
                    <Element name="PLAYER7.png" positionLeft="-90%"></Element>
                    <Edito content={this.props.datas.text[4].zone_3} positionTop="17%"></Edito>
                    <Element name="BALL.png" positionLeft="-150%" index="p2" ></Element>
                </div>
                <div className="Board__slide">
                    <Video id="x75zf2a" maxHeight="400" ratio="1.8" ></Video>
                </div>
                <div className="Board__slide Board__slide--bottom only_blue white">
                    <Edito content={this.props.datas.text[4].zone_4} positionBottom="40%" ></Edito>
                    <Element name="CORNER.png" positionRight="-55%"></Element>
                </div>
                <div className="Board__slide">
                    <Video id="x75zfd9" maxHeight="400" ratio="1.8" ></Video>
                </div>
                <div className="Board__slide Board__slide--middle only_blue white">
                    <Edito content={this.props.datas.text[4].zone_5} ></Edito>
                </div>
                <div className="Board__slide only_blue">
                    <Skew position="left" bg="OURS.png" ></Skew>
                </div>
                <div className="Board__slide only_blue black">
                    <Masthead />
                </div>
            </div>
        )
    }
}

