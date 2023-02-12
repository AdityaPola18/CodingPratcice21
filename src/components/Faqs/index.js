// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
    show: false,
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
    show: false,
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
    show: false,
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
    show: false,
  },
]

class Faqs extends Component {
  state = {finalList: faqsList}

  changeState = id => {
    const {finalList} = this.state
    const isShow = finalList[id].show
    const newShow = !isShow
    const newList = finalList
    newList[id].show = newShow
    this.setState({finalList: newList})
  }

  render() {
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">FAQs</h1>
          <ul className="faqlist">
            {faqsList.map(eachValue => (
              <FaqItem
                faq={eachValue}
                clicked={this.changeState}
                key={eachValue.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
