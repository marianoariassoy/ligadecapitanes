const Labels = ({ labels }) => {
  return (
    <ul className='flex gap-x-2 justify-center opacity-50 flex-wrap text-xs lg:text-sm mt-3'>
      {labels
        .filter(item => item.value)
        .map((item, index) => (
          <li key={index}>
            <strong>{item.name}:</strong> {item.value}
          </li>
        ))}
    </ul>
  )
}

export default Labels
