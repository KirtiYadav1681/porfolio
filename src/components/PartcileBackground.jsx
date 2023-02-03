import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {

     const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const options = {
        fullScreen : {
            enable : true,
            zIndex : -1
        },
        background: {
            color: {
                value: "#141414",
            },
        },
        fpsLimit: 45,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            "backgroundMask": {
                "cover": {
                  "color": {
                    "value": "#fff"
                  },
                  "opacity": 1
                },
                "enable": false
              },
            color: {
                value: "#FFD700",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.4,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }

  return (
    <div className="particle">
    <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
    />
    </div>
  )
}

export default ParticleBackground