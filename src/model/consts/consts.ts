import { GameMods } from "../types/types";
import CSharp from '../../app/assets/svg/logo-c-sharp.svg';
import Python from '../../app/assets/svg/logo-python.svg';
import Css from '../../app/assets/svg/logo-css.svg';
import Flutter from '../../app/assets/svg/logo-flutter.svg';
import Fusion from '../../app/assets/svg/logo-fusionbd.svg';
import GraphQL from '../../app/assets/svg/logo-graphql.svg';
import HTML from '../../app/assets/svg/logo-html.svg';
import JS from '../../app/assets/svg/logo-javascript.svg';
import Php from '../../app/assets/svg/logo-php.svg';
import Ruby from '../../app/assets/svg/logo-ruby.svg';
import Swift from '../../app/assets/svg/logo-swift.svg';
import Webpack from '../../app/assets/svg/logo-webpack.svg';

export const modeCount: Record<GameMods, number> = {
    'easy' : 12,
    'normal': 18,
    'hard': 24,
}

export const cardIconsArr: string[] = [
    CSharp,
    Python,
    Css,
    Flutter,
    Fusion,
    GraphQL,
    HTML,
    JS,
    Php,
    Ruby,
    Swift,
    Webpack
]