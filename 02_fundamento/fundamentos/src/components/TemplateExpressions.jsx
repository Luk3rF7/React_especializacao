import MyComponents from './MyComponents'


export default function TemplateExpressions() {
  const name = "Lucas Felipe"
  const date = {
    age: 29,
    job:"Programador"
  }

  return (
    <div>
      <h3>Seu nome é {name}</h3>
      <h4> idade: {date.age}</h4>
      <h4> Trabalho:{date.job}</h4>
      <h2>{4 + 4}</h2>
      <h2>{console.log('React e legal')}</h2>
       <MyComponents />
    </div>
  )
}