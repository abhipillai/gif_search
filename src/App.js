import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import styled from 'styled-components';
import { reactLogo, sofiLogo } from './images';

import { DarkGray, maxAppWidth, rhythm } from './lib';
import SearchGif from './main/SearchGif';


const AppPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: ${maxAppWidth}px;
  margin-right: auto;
  margin-left: auto;

  // non-prod CSS guardrails
  ${() => {
		if (process.env.NODE_ENV !== 'production') {
			/* Accessibility: All imgs must have an alt attribute,
       * see https://webaim.org/techniques/alttext/
       */
			return `
      img:not([alt]) {
        border: 5px dashed #c00 !important;
      }
    `;
		} else {
			return '';
		}
	}};
`;

const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${DarkGray};
  max-height: ${rhythm(4)}px;

  .react-logo-animation {
    animation: App-logo-spin infinite 20s linear;
    height: ${rhythm(2)}px;
    pointer-events: none;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const App = () => {
	return (
		<DndProvider backend={HTML5Backend}>
			<AppPageContainer>
				<AppHeader>
					<img src={sofiLogo} alt="SoFi logo" />
					<img
						src={reactLogo}
						className="react-logo-animation"
						alt="React logo"
					/>
				</AppHeader>
				<SearchGif />
			</AppPageContainer>
		</DndProvider>
	);
};

export default App;
