'use client'
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
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
        <Select options={options} styles={styles} />
        <Select options={options} styles={styles} />
        <Select options={options} styles={styles} />
        <Select options={options} styles={styles} />
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