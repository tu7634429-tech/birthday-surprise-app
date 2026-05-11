function ParticleBackground() {
  const particles = Array.from({ length: 26 }, (_, index) => {
    const size = Math.floor(Math.random() * 8) + 6;
    const left = Math.floor(Math.random() * 100);
    const delay = Math.random() * 8;
    const duration = Math.random() * 8 + 8;

    return {
      id: index,
      size,
      left,
      delay,
      duration,
    };
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle-float absolute bottom-[-40px] rounded-full bg-pink-300/30"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default ParticleBackground;