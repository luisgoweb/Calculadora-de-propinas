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
    setTip: React.Dispatch<React.SetStateAction<number>>
  }

const TipPercentageForm = ({setTip}: TipPercentageFormProps) => {
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
                      onChange={e => setTip(+e.target.value)}
                      />
                  </div>
                ))}
            </form>
        </div>
    </div>
  )
}

export default TipPercentageForm
