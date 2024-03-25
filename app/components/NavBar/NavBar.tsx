export default function NavBar() {
  return (
    <nav className="pl-[300px]">
      <ul className="flex gap-7 text-secondary text-xl">
        {[
          'Wszystkie',
          'Zawory bezpieczeństwa',
          'Awaria urządzenia',
          'Agregaty',
          'Centrale wentylacyjne',
          'Klimatyzatory',
          'Nawilżacze',
          'Szafy',
          'Szczelność',
        ].map((str) => (
          <li className="hover:text-primary" key={str}>
            {str}
          </li>
        ))}
      </ul>
    </nav>
  );
}
