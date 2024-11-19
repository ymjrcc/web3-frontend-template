'use client'

import { LayoutTemplate } from 'lucide-react';
import { Button, Divider, Code } from '@nextui-org/react';
import { Bitcoin, BadgeDollarSign, Gem } from 'lucide-react';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

function Page() {

  return (
    <>
      <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 h-16 px-4 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold text-gray-200 flex items-center">
          <LayoutTemplate className='pr-4' size={40}/>
          Frontend Template
        </div>
      </div>
      <div className='p-4'>
        <div className="text-xl font-bold mb-4 text-gray-500">
          Dependencies
        </div>
        <ul className='ml-4'>
          <li className="mb-2">Base on <Code>React</Code> and <Code>Next.js</Code></li>
          <li className="mb-2">Use <Code>Tailwindcss</Code> for styling</li>
          <li className="mb-2">Use <Code>NextUI</Code> for UI Components</li>
          <li className="mb-2">Use <Code>Lucide</Code> for Icons</li>
          <li className="mb-2">Use <Code>react-hot-toast</Code> for Toast</li>
        </ul>
        <Divider className='my-4'/>
        <div className="text-xl font-bold underline text-blue-400 mb-4">
          Hello Tailwindcss!
        </div>
        <div className="flex ">
          <Button color="success" variant='flat' onClick={() => toast.success('Toast from react-hot-toast!')}>Click to show a toast</Button>
        </div>
        <div className='mt-4 flex text-orange-400'>
          <Bitcoin size={40} className='mr-4'/>
          <BadgeDollarSign size={40} className='mr-4'/>
          <Gem size={40} className='mr-4'/>
        </div>
      </div>
    </>
  );
}

export default Page;
