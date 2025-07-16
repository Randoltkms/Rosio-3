import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const particlesInit = async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  };

  useEffect(() => {
    if (showCard) {
      // Animar título después de 500ms
      setTimeout(() => setAnimateTitle(true), 500);
      // Mostrar fotos después de 1.5s
      setTimeout(() => setShowPhotos(true), 1500);
    }
  }, [showCard]);

  const openCard = () => {
    setShowCard(true);
  };

  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-auto">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes cardOpen {
          from { 
            opacity: 0; 
            transform: perspective(1000px) rotateY(-20deg) scale(0.9);
          }
          to { 
            opacity: 1; 
            transform: perspective(1000px) rotateY(0deg) scale(1);
          }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out; }
        .animate-cardOpen { animation: cardOpen 1s ease-out; }
        .animate-sparkle { animation: sparkle 2s infinite; }
        .animate-pulse { animation: pulse 2s infinite; }
        .photo-entrance { 
          animation: fadeInUp 0.6s ease-out both;
        }
        .photo-entrance:nth-child(odd) { 
          animation: slideInLeft 0.6s ease-out both;
        }
        .photo-entrance:nth-child(even) { 
          animation: slideInRight 0.6s ease-out both;
        }
      `}</style>

      {/* Fondo estrellado */}
      <Particles
        init={particlesInit}
        className="fixed top-0 left-0 h-full w-full z-0"
        options={{
          background: { color: "#000" },
          particles: {
            color: { value: "#e0aaff" },
            number: { value: 100 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.5 },
            opacity: { value: { min: 0.3, max: 0.8 } },
            twinkle: {
              particles: { enable: true, frequency: 0.005, opacity: 1 }
            }
          },
        }}
      />

      {/* Intro */}
      {!showCard && (
        <div className="z-10 relative h-screen flex flex-col items-center justify-center text-center">
          <div className="animate-sparkle mb-8">
            <span className="text-6xl">✨</span>
          </div>
          <h1 className="text-5xl font-bold mb-8 text-pink-300 animate-fadeInUp">
            De Randol para Rocío
          </h1>
          <p className="text-xl text-pink-200 mb-8 animate-fadeInUp opacity-80">
            Una carta especial para una persona linda 
          </p>
          <button
            className="bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300 text-white text-lg shadow-lg animate-pulse transform hover:scale-105"
            onClick={openCard}
          >
            📜 Abrir carta
          </button>
        </div>
      )}

      {/* Carta */}
      {showCard && (
        <div className="z-10 relative p-6 pt-24 max-w-5xl mx-auto animate-cardOpen">
          {/* Botón de música */}
          {!playMusic && (
            <button
              onClick={() => {
                setPlayMusic(true);
                document.getElementById("bg-music").play();
              }}
              className="fixed top-4 right-4 bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 rounded-full text-white z-20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              🎶 Reproducir música
            </button>
          )}
          <audio id="bg-music" src="/WickedGames.mp3" loop />

          {/* Título de la carta */}
          <div className="text-center mb-12">
            {animateTitle && (
              <>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4 animate-fadeInUp">
                  🌌 Mi carta para ti 🌌
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full animate-fadeInUp"></div>
              </>
            )}
          </div>

          {/* Galería con animaciones escalonadas */}
          {showPhotos && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  src: "/Imagen1.png",
                  frase: `"You're the only one I trust with my heart." — *As You Are*`,
                },
                {
                  src: "/Imagen2.png",
                  frase: `"I just wanna see you shine 'cause I know you're a stargirl." — *Stargirl Interlude*`,
                },
                {
                  src: "/Imagen3.jpg",
                  frase: `"I'm finding ways to articulate the feeling I'm goin' through." — *Die For You*`,
                },
                {
                  src: "/Imagen4.png",
                  frase: `"When I'm faded I forget, forget what you mean to me." — *Call Out My Name*`,
                },
                {
                  src: "/Imagen5.png",
                  frase: `"I’ve been the hardest to love, you try to let me go." — *Hardest To Love*`,
                },
                {
                  src: "/Imagen6.jpg",
                  frase: `"Even though we’re going through it, just know that I would die for you." — *Die For You*`,
                },
                {
                  src: "/Imagen7.jpg",
                  frase: `"Let me show you who I am, let me take you out tonight." — *As You Are*`,
                },
                {
                  src: "/Imagen8.png",
                  frase: `"This ain't no regular love, this unconditional." — *Earned It*`,
                }

              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center photo-entrance`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative group">
                    <img
                      src={item.src}
                      alt={`Foto ${index + 1}`}
                      className="rounded-2xl shadow-xl mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl object-cover"
                      style={{ width: "316px", height: "352px" }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-center text-pink-200 italic text-lg leading-relaxed max-w-sm">
                    {item.frase}
                  </p>
                </div>
              ))}
            </div>
          )}

          {showPhotos && (
            <div className="mt-20 text-center animate-fadeInUp">
              <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
                — Con cariño de tu amigo, Randol 💫
              </p>
              <div className="flex justify-center space-x-2">
                <span className="animate-sparkle">✨</span>
                <span className="animate-sparkle" style={{ animationDelay: '0.5s' }}>🌟</span>
                <span className="animate-sparkle" style={{ animationDelay: '1s' }}>💫</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
