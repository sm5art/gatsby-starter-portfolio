import React from "react"
import { theme } from '../../utils/constants';
import { rhythm } from '../../utils/typography';

export const SectionNumber = ({number}) =>
    <h1 style={{color: theme.numberColor, marginRight: rhythm(1) }}>{`0${number}.`}</h1>
