import type { Dispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPercentageFormProps = {
    dispatch: Dispatch<OrderActions>
    tip: number
  }

const TipPercentageForm = ({tip, dispatch}: TipPercentageFormProps) => {
  return (
    <div>
        <div>
            <h3 className="text-2xl font-bold">Propina</h3>

            <form>
                {tipOptions.map(tips => (
                  <div key={tips.id} className="flex gap-3">
                      <label htmlFor={tips.id} >{tips.label}</label>
                      <input 
                      id={tips.id}
                      type="radio"
                      name="tip"
                      value={tips.value}
                      onChange={e => dispatch({type: 'add-tip', payload: {value: +e.target.value}})}
                      checked={tips.value === tip}
                      />
                  </div>
                ))}
            </form>
        </div>
    </div>
  )
}

export default TipPercentageForm
