import React, { Component } from 'react';
import './Masthead.css';


export default class Element extends Component {

    componentDidMount() {
        require('../../js/external/twitter.js')();
    }

    render() {

        return (
            
            <div className="Masthead">
                <div className="Masthead__item">
                    <span className="Masthead__label white">Conçu, écrit et réalisé par</span>
                    <span className="Masthead__details"> Lohan Benaati, Pierre Billaud, Clément Bouynet, Marina Guibert <a href="//twitter.com/IjbaOfficiel" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label white">Développeur</span>
                    <span className="Masthead__details">Simon Deflesschouwer <a class="github-button" href="https://github.com/defless" aria-label="Follow @defless on GitHub">Github</a> </span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label white">Graphiste</span>
                    <span className="Masthead__details">Alexis Corbineau</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label white">Illustrations</span>
                    <span className="Masthead__details">Elliot Raimbeau<a href="//twitter.com/eraimbeau" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                 <div className="Masthead__item">
                    <span className="Masthead__label white">Conseillère de rédaction</span>
                    <span className="Masthead__details">Rayya Roumanos</span>
                </div>
                 <div className="Masthead__item">
                    <span className="Masthead__label white">Directeur de la publication</span>
                    <span className="Masthead__details">Arnaud Schwartz</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label"></span>
                    <span className="Masthead__details"></span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Photos :</span> Archives L’Équipe</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Vidéos :</span> Pierre Billaud, Pascal Simon, Lucas Ngouembe</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Remerciements :</span> FC Girondins de Bordeaux, FC Lorient, Boxers de Bordeaux, Institut de journalisme Bordeaux-Aquitaine, IUT Bordeaux Montaigne et ses élèves de la section Métiers du multimédia et de l’Internet, Ligue de Football Professionnel, CREPS Dijon, Félix Bénard, Marie Le Menn, Frédéric Laharie, Florian Chaaban, Paolo Philippe</span>
                </div>
            </div>
        );
    }
}
