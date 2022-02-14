import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particle-config';

const ParticleBackground = () => {
    return (
        <Particles params={particlesConfig}>
        </Particles>
    )
}

export default ParticleBackground;