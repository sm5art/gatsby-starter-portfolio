import React from "react"
import { blue } from '../../utils/colors';
import { rhythm } from '../../utils/typography';

export const SectionNumber = ({number}) =>
    <h1 style={{color: blue[8], marginRight: rhythm(1) }}>{`0${number}.`}</h1>