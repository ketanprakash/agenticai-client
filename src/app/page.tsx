'use client'
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import Select from 'react-select'
import { FaLocationArrow } from "react-icons/fa";
import { KeyboardEventHandler, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const components = {
  DropdownIndicator: null,
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});

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
const optionsTime = [
  {
    value: '12am',
    label: '12 AM',
  },
  {
    value: '1am',
    label: '1 AM',
  },
  {
    value: '2am',
    label: '2 AM',
  },
  {
    value: '3am',
    label: '3 AM',
  },
  {
    value: '4am',
    label: '4 AM',
  },
  {
    value: '5am',
    label: '5 AM',
  },
  {
    value: '6am',
    label: '6 AM',
  },
  {
    value: '7am',
    label: '7 AM',
  },
  {
    value: '8am',
    label: '8 AM',
  },
  {
    value: '9am',
    label: '9 AM',
  },
  {
    value: '10am',
    label: '10 AM',
  },
  {
    value: '11am',
    label: '11 AM',
  },
  {
    value: '12pm',
    label: '12 PM',
  },
  {
    value: '1pm',
    label: '1 PM',
  },
  {
    value: '2pm',
    label: '2 PM',
  },
  {
    value: '3pm',
    label: '3 PM',
  },
  {
    value: '4pm',
    label: '4 PM',
  },
  {
    value: '5pm',
    label: '5 PM',
  },
  {
    value: '6pm',
    label: '6 PM',
  },
  {
    value: '7pm',
    label: '7 PM',
  },
  {
    value: '8pm',
    label: '8 PM',
  },
  {
    value: '9pm',
    label: '9 PM',
  },
  {
    value: '10pm',
    label: '10 PM',
  },
  {
    value: '11pm',
    label: '11 PM',
  },
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

const Page = () => {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<readonly Option[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue('');
        event.preventDefault();
    }
  };

  return (
    <div className="flex flex-col min-h-full">
      <nav className="flex items-center justify-between p-4 bg-orange-600 text-white">
        <div className="flex items-center gap-2 cursor-pointer w-fit">
          <FaLocationArrow />
        </div>
        <span className="text-lg font-semibold w-fit flex items-center justify-center">Planner</span>
        <RxAvatar className="text-2xl cursor-pointer w-fit" />
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
        <div className="flex items-center justify-center">
          <span className="w-[200px]">Type of Plan:</span>
          <Select options={optionsType} styles={styles} placeholder="Type of Plan" className="w-full" />
        </div>
        <div className="flex items-center justify-center">
          <span className="w-[200px]">Type of Plan:</span>
          <Select options={optionsPeople} styles={styles} placeholder="Type of People" className="w-full" />
        </div>
        <div className="flex items-center justify-center">
          <span className="w-[200px]">People:</span>
          <div className="border border-gray-500 rounded-xl bg-white w-full" >
            <input placeholder="Number of People" className="py-1 px-1.5 m-[2px] w-full outline-none" type="number" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="w-[200px]">Inclusions:</span>
          <CreatableSelect
            components={components}
            inputValue={inputValue}
            isClearable
            isMulti
            menuIsOpen={false}
            onChange={(newValue) => setValue(newValue)}
            onInputChange={(newValue) => setInputValue(newValue)}
            onKeyDown={handleKeyDown}
            styles={styles}
            placeholder="Press tab to add"
            value={value}
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <span className="w-[200px]">Budget (in ₹):</span>
          <div className="border border-gray-500 rounded-xl bg-white w-full" >
            <input placeholder="Budget" className="py-1 px-1.5 m-[2px] w-full outline-none" type="number" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="w-[200px]">Date:</span>
          <div className="border border-gray-500 rounded-xl bg-white w-full" >
            <input placeholder="Date" id="date" className="py-1 px-1.5 m-[2px] w-full outline-none" type="date" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="w-[200px]">Time:</span>
          <Select options={optionsTime} styles={styles} placeholder="Time" className="w-full" />
        </div>
        <button className="bg-orange-700 cursor-pointer text-white rounded-[12px] hover:bg-orange-800 transition-colors w-full p-3">
          Submit
        </button>
      </div>
    </div>
  )
}
export default Page