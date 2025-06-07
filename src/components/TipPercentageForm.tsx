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

const TipPercentageForm = () => {
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
                      />
                  </div>
                ))}
            </form>
        </div>
    </div>
  )
}

export default TipPercentageForm
