// import './index.css';

import React, { useEffect, useState } from 'react';

import { GameCore } from '../../../interactive/domain/three-js';
// import { useTranslation } from 'react-i18next';
import Template from '../../global/component/templates/template-mobile';
import { useStoreGlobal } from '../../global/store';
import initI18N from './i18n';
// import
const i18nDomainName = 'threejs';
const I18N = initI18N({ name: i18nDomainName });

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

const JSX = () => {
  const { setMenu }: any = useStoreGlobal(['setMenu']);
  const { gameCore }: any = useStoreGlobal(['gameCore']);

  // const { t } = useTranslation([i18nDomainName]);
  const [score, setScore] = useState<number>(0);

  const onClickScore = (score: number) => {
    setScore(score);
  };

  useEffect(() => {
    gameCore.setCallbackSetScore(onClickScore);
    setMenu('three.js', 2);
  }, []);
  return (
    <Template.JSX>
      <div className="flex-none h-12 pb-0.5 w-full font-bold bg-primary-hover text-white my-auto text-center flex flex-row justify-center items-center gap-x-2 text-xl">
        Score : {score}
      </div>
      <GameThreeJS gameCore={gameCore} className="flex-auto bg-blue-200" />
    </Template.JSX>
  );
};

export default { I18N, JSX };
