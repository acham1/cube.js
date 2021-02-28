import { Button } from 'antd';
import React from 'react';

import styles from './styles.module.scss';
import cubeJsLogo from './cube.js-logo.svg';
import cubeCloudLogo from './cube-cloud-logo.svg';
import cubeCloudLogoSmall from './cube-cloud-logo-sm.svg';


interface Props {
  isSmall: boolean;
  isCloud: boolean;
  onCubeClick: () => void;
  onCloudClick: () => void;
}

export const DocsSwitcher = ({ 
  isCloud,
  isSmall, 
  onCloudClick,
  onCubeClick,
}: Props) => {

  //@TODO This might have to be responsive and not only check once
  const cloudLogo = React.useMemo(() => 
    isSmall ? cubeCloudLogoSmall : cubeCloudLogo
  , [isSmall]);

  const cubeStyle = React.useMemo(() => {
    return isCloud ? {} : {borderColor: '#e5e3fd'};
  }, [isCloud]);

  const cloudStyle = React.useMemo(() => {
    return isCloud ? {borderColor: '#e5e3fd'} : {};
  }, [isCloud]);

  return (
      <div className={styles.docsSwitcher}>
        <Button style={cubeStyle} onClick={onCubeClick}>
          <img src={cubeJsLogo} alt="Cube.js Logo"  />
        </Button>
        <Button style={cloudStyle} onClick={onCloudClick}>
          <img src={cloudLogo} alt="Cube Cloud Logo" />
        </Button>
      </div>
  );
};
