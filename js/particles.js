/**
 * Petals & Golden Stardust Particle Engine
 * Realistic 3D flutter rose petals and marigold flowers with gentle wind dynamics
 */

class ParticleCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = 20; // Tasteful, uncluttered density
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.wind = 0;
    this.targetWind = 0.3;
    this.mouseX = this.width / 2;
    this.mouseY = this.height / 2;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));

    // Spawn initial particles
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push(this.createParticle(true));
    }

    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  onMouseMove(e) {
    const dx = (e.clientX - this.width / 2) / (this.width / 2);
    this.targetWind = dx * 1.2;
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  createParticle(isRandomY = false) {
    // Significantly reduced red leaf frequency: 12% Rose petals, 58% Gold stardust, 30% Marigold
    const typeRand = Math.random();
    let type = 'gold_spark';
    if (typeRand < 0.12) {
      type = 'rose'; // Rare, graceful red rose petal
    } else if (typeRand < 0.42) {
      type = 'marigold'; // Auspicious marigold petal
    } else {
      type = 'gold_spark'; // Golden stardust
    }

    return {
      type: type,
      x: Math.random() * this.width,
      y: isRandomY ? Math.random() * this.height : -30,
      size: type === 'gold_spark' 
        ? Math.random() * 2.5 + 1 
        : (type === 'rose' ? Math.random() * 7 + 8 : Math.random() * 10 + 9),
      speedY: type === 'gold_spark' ? Math.random() * 1.2 + 0.8 : Math.random() * 1.4 + 1.0,
      speedX: Math.random() * 0.8 - 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.03,
      flip: Math.random() * Math.PI,
      flipSpeed: Math.random() * 0.03 + 0.01,
      opacity: type === 'rose' ? Math.random() * 0.35 + 0.5 : Math.random() * 0.45 + 0.55,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.04 + 0.02,
      color: type === 'rose' 
        ? (Math.random() > 0.4 ? '#b8142e' : '#880c1d') 
        : (type === 'marigold' ? '#ff9933' : '#ffd700')
    };
  }

  drawRosePetal(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.scale(Math.cos(p.flip), 1); // 3D flip effect

    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.opacity;

    // Elegant curved petal shape
    ctx.beginPath();
    ctx.moveTo(0, -p.size * 0.7);
    ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.9, p.size * 0.6, 0, p.size);
    ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.6, -p.size * 0.8, -p.size * 0.5, 0, -p.size * 0.7);
    ctx.fill();

    // Subtle petal vein highlight
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.25)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(0, -p.size * 0.4);
    ctx.quadraticCurveTo(p.size * 0.1, 0, 0, p.size * 0.7);
    ctx.stroke();

    ctx.restore();
  }

  drawMarigold(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.scale(Math.cos(p.flip), Math.sin(p.flip) * 0.5 + 0.5);

    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.opacity;

    // Clustered round marigold petal shape
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size * 0.7, p.size * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffcc00';
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size * 0.4, p.size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawGoldSpark(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.fillStyle = '#fff4a3';
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 8;
    ctx.globalAlpha = (Math.sin(p.wobble * 3) * 0.35 + 0.65) * p.opacity;

    ctx.beginPath();
    ctx.arc(0, 0, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Smooth wind transition
    this.wind += (this.targetWind - this.wind) * 0.05;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Update positions
      p.wobble += p.wobbleSpeed;
      p.x += Math.sin(p.wobble) * 1.2 + this.wind * 1.5 + p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      p.flip += p.flipSpeed;

      // Draw by type
      if (p.type === 'rose') {
        this.drawRosePetal(this.ctx, p);
      } else if (p.type === 'marigold') {
        this.drawMarigold(this.ctx, p);
      } else {
        this.drawGoldSpark(this.ctx, p);
      }

      // Recycle offscreen particles
      if (p.y > this.height + 40 || p.x < -60 || p.x > this.width + 60) {
        if (this.particles.length > this.maxParticles) {
          this.particles.splice(i, 1);
          i--;
        } else {
          this.particles[i] = this.createParticle(false);
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }

  // Pushpa Vrishti (Burst shower of sacred flowers)
  triggerFlowerShower(count = 20) {
    const safeCount = Math.min(count, 25);
    for (let i = 0; i < safeCount; i++) {
      const p = this.createParticle(false);
      p.x = Math.random() * this.width;
      p.y = Math.random() * -80;
      p.speedY = Math.random() * 2.5 + 2.0;
      p.speedX = (Math.random() - 0.5) * 2;
      this.particles.push(p);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.particleCanvas = new ParticleCanvas('particle-canvas');
});
