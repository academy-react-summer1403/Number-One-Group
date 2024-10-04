import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ParticlesOptions } from "./ParticlesOptions";
import { useSelector } from "react-redux";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const theme = useSelector(state => state.DarkMode)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [])

  if (init) {
    return (
      <Particles id="tsparticles" options={ParticlesOptions(theme)} />
    );
  }

  return <></>
}

export default ParticlesBackground
