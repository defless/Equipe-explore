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
                    <Edito content={this.props.datas.text[0].zone_1} positionTop="50%"></Edito>
                    <Element name="TITLE1.png" ></Element>
                </div>
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[0].zone_2} positionTop="27%"></Edito>
                    <Element name="SPRAY1.png" positionLeft="-10%"  ></Element>
                </div>
                <div className="Board__slide">
                    <Video id="x75q393" maxHeight="400" ratio="1.8"></Video>
                </div>
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[0].zone_3} positionLeft="20%" positionTop="37%"></Edito>
                </div>
                 <div className="Board__slide">
                    <Element name="PLAYER1.png" index="p2" positionLeft="-40%"></Element>
                </div>

                {/* CHAP 1 */}
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP01-TITRE.png" bg="CHAP01-OUVERTURE.png"></Skew>
                </div>

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                </div>
                
                <div className="Board__slide Board__slide--bottom" >
                    <Edito content={this.props.datas.text[1].zone_1} positionBottom="15%"></Edito>
                </div>
                <div className="Board__slide  Board__slide--top">
                    <Element name="PLAYER2.png" positionLeft="20%" index="p1"></Element>
                    <Element name="SPRAY2.png" positionLeft="40%" ></Element>
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
                    <Element name="INFOG1.png" positionRight="-30%"></Element>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Element name="PLAYER3.png" positionLeft="35%" ></Element>
                    <Element name="QUOTE2.png" positionLeft="20%" index="p1"></Element>
                </div>
                <div className="Board__slide">

                </div>
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[1].zone_3} positionTop="13%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[1].zone_4} positionTop="25%"></Edito>
                </div>

                {/* CHAP 2 */}

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP02-TITRE.png" bg="CHAP02-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide Board__slide--middle red white board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="SPRAY4.png"  ></Element>
                    <Element name="QUOTE3.png" positionLeft="10%"></Element>
                    
                </div>
                <div className="Board__slide Board__slide--middle red white">
                    <Edito content={this.props.datas.text[2].zone_1} positionTop="20%"> positionLeft="20%"</Edito>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="SPRAY5.png" index="p2" positionLeft="0%"></Element>
                    <Element name="QUOTE4.png" index="p2" positionLeft="0%"></Element>

                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="BACKGROUND1.png" positionLeft="55%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Video id="x75q3ih" maxHeight="400" ratio="1.8" ></Video>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Edito content={this.props.datas.text[2].zone_2} positionBottom="15%"></Edito>
                </div>
                <div className="Board__slide red">
                    <Video id="x75q3jt" maxHeight="400" ratio="1.8" ></Video>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Edito content={this.props.datas.text[2].zone_3}  positionBottom="28%"></Edito>
                    <Element name="BACKGROUND2.png" positionLeft="33%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Video id="x75q3jt" maxHeight="400" ratio="1.8" ></Video>
                </div>
                <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_4} positionTop="20%"></Edito>
                 </div>

                {/* CHAP 3 */}

                <div className="Board__slide red board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP03-TITRE.png" bg="CHAP03-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide Board__slide--top">
                    <Element name="SPRAY6.png" positionLeft="15%" index="m1"></Element>
                    <Element name="QUOTE5.png" positionLeft="15%" index="m1"></Element>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[3].zone_1} positionTop="30%"></Edito>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '65vh'} : {}}>
                    <Element name="VIDEO-SPRAY.png" ></Element>
                    <Video id="x75q3n2" maxHeight="400" ratio="1.8" ></Video>
                </div>
                 <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide ">
                    <Element name="PHOTO1.png" positionTop="18%" positionLeft="-20%" ></Element>
                    <Edito content={this.props.datas.text[3].zone_2}  positionBottom="18%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="PHOTO2.png" positionBottom="30%" positionLeft="-20%" ></Element>
                    <Edito content={this.props.datas.text[3].zone_3} positionTop="30%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[3].zone_3} positionTop="12%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[3].zone_4} positionTop="30%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Edito content={this.props.datas.text[3].zone_7} positionBottom="25%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Edito content={this.props.datas.text[3].zone_8} positionBottom="20%"></Edito>
                </div>
                 <div className="Board__slide js-board-doubleslide">
                    <Video id="k6nQH9clutLjhlqxEZX" maxHeight="800" ratio="0.561"></Video>
					<Element name="FOND9.png" positionLeft="-80vh" index="p1"></Element>
                </div>

                {/* CHAP04 - Conclusion */}

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP04-TITRE.png" bg="CHAP04-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide only_blue board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide Board__slide--top white only_blue">
                    <Edito content={this.props.datas.text[4].zone_1} positionTop="11%"></Edito>
                    <Element name="FOND19-CHALET.png" positionLeft="-5%"></Element>
                </div>
                <div className="Board__slide Board__slide--middle only_blue">
                    <Element name="CHAP04-PHOTO1.png" index="p1" positionLeft="-1%"></Element>
                    <Element name="CHAP04-PHOTO1A.png" index="p2" positionLeft="-1%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom only_blue">
                    <Element name="CHAP04-CITATION1.png" positionLeft="10%"></Element>
                </div>
                <div className="Board__slide Board__slide--top white only_blue">
                    <Element name="FOND21.png" index="m1" positionLeft="-20%"></Element>
                    <Edito content={this.props.datas.text[4].zone_2} positionTop="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white only_blue">
                    <Element name="FOND16-ALLIANCESINV.png" positionLeft="-15vh"></Element>
                    <Edito content={this.props.datas.text[4].zone_3} positionTop="17%"></Edito>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '65vh'} : {}}>
                    <StaticElement bg="AP-CHAP04-CITATIONGERD.png" name="CHAP04-CITATION2.png" size="simple"></StaticElement>
                </div>
                <div className="Board__slide Board__slide--bottom only_blue white">
                    <Element name="FOND12.png" index="m1" positionLeft="-10%"></Element>
                    <Edito content={this.props.datas.text[4].zone_4} positionBottom="15%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom only_blue white board-small-slide" style={!mobile ? {minWidth: '80vh'} : {}}>
                    <Element name="FOND20-FIN.png" index="p1" positionLeft="-76%" ></Element>
                    <Element name="CHAP04-PHOTO2.png" index="p1" positionLeft="0%"></Element>
                </div>
                <div className="Board__slide Board__slide--top only_blue white">
                    <Edito content={this.props.datas.text[4].zone_5} positionTop="15%"></Edito>
                    <Element name="FOND23-medaille.png" positionRight="50vh" index="p1"></Element>
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

