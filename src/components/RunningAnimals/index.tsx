import { Wrapper, Label, Track, Animal } from './styles';

const animals = [
  { emoji: '🐕', duration: 9,  delay: 0,   top: 10, size: 48 },
  { emoji: '🐈', duration: 7,  delay: 1.5, top: 45, size: 42 },
  { emoji: '🐶', duration: 11, delay: 3,   top: 20, size: 44 },
  { emoji: '🐱', duration: 8,  delay: 0.5, top: 55, size: 40 },
  { emoji: '🐩', duration: 6,  delay: 4,   top: 5,  size: 46 },
  { emoji: '🐈‍⬛', duration: 10, delay: 2,   top: 40, size: 44 },
  { emoji: '🐕‍🦺', duration: 7,  delay: 5,   top: 60, size: 42 },
  { emoji: '🐾', duration: 9,  delay: 6,   top: 30, size: 36 },
];

export default function RunningAnimals() {
  return (
    <Wrapper>
      <Label>Eles estão te esperando 🐾</Label>
      <Track>
        {animals.map((a, i) => (
          <Animal
            key={i}
            $duration={a.duration}
            $delay={a.delay}
            $top={a.top}
            $size={a.size}
          >
            {a.emoji}
          </Animal>
        ))}
      </Track>
    </Wrapper>
  );
}
