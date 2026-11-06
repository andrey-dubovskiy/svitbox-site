// Synthesised sounds (no audio files). Off until the visitor turns them on.
let actx: AudioContext | null = null;
let on = false;

export function isSoundOn() { return on; }

export function toggleSound(): boolean {
  on = !on;
  if (on) {
    try {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      actx = actx || new Ctx();
      actx.resume();
      gong();
    } catch { /* audio not available */ }
  }
  return on;
}

// Boxing bell: a few sine partials with exponential decay.
export function gong() {
  if (!on || !actx) return;
  const t = actx.currentTime, out = actx.createGain();
  out.gain.value = .22;
  out.connect(actx.destination);
  ([[523, 1], [1046, .5], [1412, .35], [2093, .22], [2637, .12]] as const).forEach(([f, a]) => {
    const o = actx!.createOscillator(), g = actx!.createGain();
    o.type = 'sine'; o.frequency.value = f;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(a, t + .005);
    g.gain.exponentialRampToValueAtTime(.0001, t + 2.4 * (1.1 - a * .4));
    o.connect(g); g.connect(out); o.start(t); o.stop(t + 3);
  });
}

// Low thud for a punch.
export function thud(power: number) {
  if (!on || !actx) return;
  const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(140, t);
  o.frequency.exponentialRampToValueAtTime(45, t + .18);
  g.gain.setValueAtTime(Math.min(.6, .15 + power / 1500), t);
  g.gain.exponentialRampToValueAtTime(.0001, t + .25);
  o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + .3);
}
