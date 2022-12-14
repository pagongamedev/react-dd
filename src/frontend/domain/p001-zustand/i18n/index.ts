import en from './en/index.json';
import th from './th/index.json';

export default function ({ name = '' }: { name: string }) {
  return {
    name: name,
    locate: { en, th },
  };
}
