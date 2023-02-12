// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faq, clicked, key} = props
  const {id, questionText, answerText, show} = faq
  const onclickPlusOrMinus = () => {
    clicked(id)
  }
  const imgUrl = show
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = show ? 'minus' : 'plus'
  return (
    <li className="FaqItem" key={key}>
      <div className="question">
        <h1 className="h1">{questionText}</h1>
        <img
          className="img"
          alt={altText}
          src={imgUrl}
          onClick={onclickPlusOrMinus}
        />
      </div>
      {show && (
        <>
          <hr className="hr" />
          <p className="p1">{answerText}</p>
        </>
      )}
    </li>
  )
}

export default FaqItem
