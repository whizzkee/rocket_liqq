'use client';

import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const Game = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !gameRef.current?.children.length) {
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: gameRef.current || undefined,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { x: 0, y: 300 },
            debug: false,
          },
        },
        scene: {
          preload: function(this: Phaser.Scene) {
            // Load assets here
          },
          create: function(this: Phaser.Scene) {
            // Create game objects here
            this.add.text(400, 300, 'Hello Phaser!', {
              color: '#ffffff',
            }).setOrigin(0.5);
          },
          update: function(this: Phaser.Scene) {
            // Game loop updates here
          },
        },
      };

      const game = new Phaser.Game(config);

      return () => {
        game.destroy(true);
      };
    }
  }, []);

  return <div ref={gameRef} />;
};

export default Game;
