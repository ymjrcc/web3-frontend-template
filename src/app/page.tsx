'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { LayoutTemplate } from 'lucide-react';
import { Button, Divider, Code } from '@nextui-org/react';
import { Bitcoin, BadgeDollarSign, Gem } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAccount, useBalance, useBlockNumber, useChainId } from 'wagmi';
import { useEffect } from 'react';

function Page() {
  const chainId = useChainId()
  const { data: blockNumber} = useBlockNumber()
  const { address } = useAccount()
  const { data: balance} = useBalance({ address })

  useEffect(() => {
    console.log('chainId', chainId)
    console.log('blockNumber', blockNumber)
    console.log('address', address)
    console.log('balance', balance)
  }, [chainId, blockNumber, address, balance])

  return (
    <>
      <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 h-16 px-4 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold text-gray-200 flex items-center">
          <LayoutTemplate className='pr-4' size={40}/>
          Web3 Frontend Template
        </div>
        <ConnectButton />
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
          <li className="mb-2">Use <Code>Rainbowkit</Code> for connecting to web3</li>
          <li className="mb-2">Use <Code>viem</Code> and <Code>wagmi</Code> for interacting with web3</li>
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
        <Divider className='my-4'/>
        <div>
          <div className="text-xl font-bold mb-4 text-gray-500">
            Web3 Information
          </div>
          <div className='ml-4'>
            <div className="mb-2 flex">
              <div className="text-gray-400 w-32 font-bold">Chain ID:</div>
              <div>{chainId}</div>
            </div>
            <div className="mb-2 flex">
              <div className="text-gray-400 w-32 font-bold">Block Number:</div>
              <div>{blockNumber && Number(blockNumber)}</div>
            </div>
            <div className="mb-2 flex">
              <div className="text-gray-400 w-32 font-bold">Address:</div>
              <div>{address}</div>
            </div>
            <div className="mb-2 flex">
              <div className="text-gray-400 w-32 font-bold">Balance:</div>
              {
                balance &&
                  <div>{(Number(balance.value) / 10 ** balance?.decimals).toFixed(6)} {balance.symbol}</div>
              }
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Page;
