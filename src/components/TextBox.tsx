import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows, borders } from '../styles/variables'

const StyledTextBox = styled.div`
    font-size: 90%;

    .box {
        max-width: 75rem;
        margin: 10rem auto;
        padding: 8rem 5rem;
        background: var(--white);
        box-shadow: ${shadows.light};
    }

    h1 {
        margin-bottom: 6rem;
    }

    h2 {
        margin: 6rem 0 5rem;
    }

    h3 {
        margin-top: 4rem;
    }

    li + li {
        margin-top: 2rem;
    }

    .model {
        padding: 2rem 3rem;
        border: ${borders.light};
        font-size: 95%;
    }

`

const TextBox: React.SFC<{}> = ({ children }) => (
    <StyledTextBox>
        <div className="box">
                { children }
        </div>
    </StyledTextBox>
)

export default TextBox
