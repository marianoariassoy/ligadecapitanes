const Header = ({ title, subtitle = '', description = '', emoji = '' }) => {
  return (
    <header className='text-center flex flex-col gap-y-1'>
      {emoji && <div className='text-2xl'>{emoji}</div>}
      <h1 className='font-bold text-primary px-4 text-center text-lg'>
        {title} {subtitle}
      </h1>
      <div className='font-medium text-sm mt-2'>{description}</div>
    </header>
  )
}

export default Header
