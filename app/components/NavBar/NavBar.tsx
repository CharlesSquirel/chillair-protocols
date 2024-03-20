export default function NavBar() {
  return (
    <nav className='pl-[300px]'>
      <ul className='flex gap-7 text-secondary text-xl'>
        <li className='hover:text-primary'>Wszystkie</li>
        {Array.from({ length: 10 }, (_, index) => (
          <li className='hover:text-primary'>{`Protokół ${index + 1}`}</li>
        ))}
      </ul>
    </nav>
  );
}
