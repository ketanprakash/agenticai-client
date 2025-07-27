'use server'

const url = 'https://87900323d265.ngrok-free.app/submit'

type Data = {
  type: string
  people: string
  numberOfPeople: number
  occasion: string
  inclusions: string[]
  location: string
  dateOfPlan: string
  startTime: string
}

export const getItinerary = async (data: Data) => {
  console.log('Data being sent:', data)
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  console.log('Response:', response)
}
