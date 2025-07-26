'use client'
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import Select from 'react-select'

const optionsType = [
  {
    value: 'fullDay',
    label: 'Full Day',
  },
  {
    value: 'morning',
    label: 'Morning',
  },
  {
    value: 'afternoon',
    label: 'Afternoon',
  },
  {
    value: 'evening',
    label: 'Evening',
  },
  {
    value: 'night',
    label: 'Night',
  }
]
const optionsPeople = [
  {
    value: 'family',
    label: 'Family',

  },
  {
    value: 'friends',
    label: 'Friends',
  },
  {
    value: 'colleagues',
    label: 'Colleagues',
  },
  {
    value: 'solo',
    label: 'Solo',
  },
  {
    value: 'couple',
    label: 'Couple',
  }
]

const styles = {
  control: (baseStyles) => ({
    ...baseStyles,
    borderRadius: '12px',
    borderColor: 'gray',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'gray',
    },
  }),
}

const page = () => {
  return (
    <div className="flex flex-col min-h-full">
      <nav className="flex items-center justify-between p-4 bg-orange-600 text-white">
        <h1>Logo</h1>
        <RxAvatar className="text-2xl cursor-pointer" />
      </nav>
      <h1 className="text-3xl font-medium pt-4 px-2">
        Select your preferences
      </h1>
      <div className="flex justify-center items-center pt-4 px-2">
        <Image
          width={400}
          height={400}
          src="/images/dining.jpg"
          alt="Illustration"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col pt-4 px-2 gap-4">
        <Select options={optionsType} styles={styles} placeholder="Type of Plan" />
        <Select options={optionsPeople} styles={styles} placeholder="Type of People" />
        <div className="border border-gray-500 rounded-xl bg-white w-full" >
          <input placeholder="Number of People" className="py-1 px-1.5 m-[2px] w-full outline-none" type="number"/>
        </div>
        <div className="border border-gray-500 rounded-xl bg-white w-full" >
          <input placeholder="Date" id="date" className="py-1 px-1.5 m-[2px] w-full outline-none" type="date"/>
        </div>
        <div className="border border-gray-500 rounded-xl bg-white w-full" >
          <input placeholder="Time" id="time" className="py-1 px-1.5 m-[2px] w-full outline-none" type="time"/>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 shadow-md">
        <button className="bg-orange-700 cursor-pointer text-white rounded-[12px] hover:bg-orange-800 transition-colors w-full p-3">
          Submit
        </button>
      </div>
    </div>
  )
}
export default page