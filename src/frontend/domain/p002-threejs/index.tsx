// import './index.css';

import React, { useEffect, useState } from 'react';
import { helperI18Next } from 'universal-helper';

import { GameCore } from '../../../interactive/domain/three-js';
// import { useTranslation } from 'react-i18next';
import { getMethodStoreGlobal, useStoreGlobal } from '../../global/store';
import initI18N from './i18n';
// import
const sI18nDomainName = 'threejs';
const I18N: helperI18Next.TypeI18NDomain = initI18N({ name: sI18nDomainName });

class GameThreeJS extends React.Component<
  { gameCore: any; className?: string | undefined },
  any
> {
  mountDiv: HTMLDivElement | null = null;
  //   gameThree: GameThree | null = null;
  componentDidMount() {
    this.props.gameCore?.mount(this.mountDiv);
  }

  componentWillUnmount() {
    this.props.gameCore?.unmount();
  }
  render = () => {
    return (
      <div
        id="game-container"
        // style={{ height: '900px' }}
        className={this.props.className}
        ref={(mount) => {
          this.mountDiv = mount;
        }}
      />
    );
  };
}

// For Re Renderer Only Score
const JSXScore = () => {
  const { gameCore }: any = useStoreGlobal(['gameCore']);
  const [score, setScore] = useState<number>(0);
  useEffect(() => {
    gameCore.setCallbackSetScore(onClickScore);
  }, []);

  const onClickScore = (score: number) => {
    setScore(score);
  };

  return (
    <div className="flex-none h-12 pb-0.5 w-full font-bold bg-primary-hover text-white my-auto text-center flex flex-row justify-center items-center gap-x-2 text-xl">
      Score : {score}
    </div>
  );
};

const JSX = () => {
  const { setMenu, setI18NDomainName } = getMethodStoreGlobal();
  const { gameCore }: any = useStoreGlobal(['gameCore']);

  // const { t } = useTranslation([sI18nDomainName]);

  useEffect(() => {
    setI18NDomainName(sI18nDomainName);
    setMenu('three.js', 2);
  }, []);
  return (
    <>
      <JSXScore />
      <GameThreeJS gameCore={gameCore} className="flex-auto bg-blue-200" />
    </>
  );
};

export default { I18N, JSX };
