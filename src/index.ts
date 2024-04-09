import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare <T extends AllType, K extends AllType> (top: Pick <T, keyof AllType>, bottom: Pick <K, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

let first = {name: 'Alice',
  position: 10,
  color: 'Yello',
  weight: 15,
}

let second = {name: 'Cooper',
  position: 12,
  color: 'Green',
  weight: 20,
}

compare(first, second);

export {};