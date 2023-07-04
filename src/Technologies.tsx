type TechnologiesProps = {
    title: Number
}

function Technologies(props: TechnologiesProps) {
  console.log('PageTitle is rendering ')
  return (
    <ul>
      <li>{ props.title}</li>
      <li>{ props.title}</li>
       <li>{ props.title}</li>
    </ul>
  )
}

export default Technologies;