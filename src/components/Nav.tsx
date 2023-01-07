import React, { useState, useEffect, useContext } from 'react'
import logo from '../assets/logo.svg'
import { BsSearch, BsSun } from 'react-icons/bs'
import { IoNotifications } from 'react-icons/io5'
import { AiOutlineMenu } from 'react-icons/ai'
import { Sidebar } from './Sidebar'
import { FiMoreHorizontal } from 'react-icons/fi'
import { useAccount } from 'wagmi'
import CustomSelect from './Select'
import Translate from './Translate'
import MyThemeContext from '../store/themeContext'
import styled from 'styled-components'

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ConnectWallet } from '@thirdweb-dev/react'

export function Nav() {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext)

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler()
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showSidebar, setShowSidebar] = useState(true)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => setIsOpenDropdown(!isOpenDropdown)

  const onOptionClicked = (value) => () => {
    setSelectedOption(value)
    setIsOpenDropdown(false)
    console.log(selectedOption)
  }

  const Main = styled('div')`
    font-family: sans-serif;
    background: #f0f0f0;
    height: 100vh;
  `

  const DropDownContainer = styled('div')`
    margin: 0;
  `

  const DropDownHeader = styled('div')`
    font-weight: 500;
    color: white;
  `

  const DropDownListContainer = styled('div')`
    width: 10.5em;
    position: absolute;
    z-index: 100;
  `

  const DropDownList = styled('ul')`
    padding: 3;
    margin: 0;
    width: 10.5em;
    background: #1b1324;

    box-sizing: border-box;
    color: white;

    font-weight: 500;
    &:first-child {
      padding-top: 0.8em;
    }
  `

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)

  const { address, isConnected } = useAccount()

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground)
  })
  const router = useRouter()
  return (
    <div
      className={
        navbar
          ? 'dark:bg-[#261a2fa8] bg-[#d5eef16a] z-30 flex items-center justify-between w-full fixed top-0 left-0 right-0 backdrop-blur-sm'
          : 'dark:bg-[#230c2e02] bg-[#d5eef100] z-30 flex items-center justify-between w-full fixed top-0 left-0 right-0 backdrop-blur-sm'
      }
    >
      <div
        className={
          navbar
            ? ` dark:bg-[#261a2f] bg-[#ffffff] px-2 sshadow-lg lg:hidden fixed top-0 left-0 right-0 py-0 z-30 pb-2`
            : ' dark:bg-[#230c2e02] bg-[#d5eef100] lg:hidden fixed top-0 left-0 right-0 py-0 z-30 pb-2'
        }
      >
        <div className='items-center cursor-pointer lg:hidden py-2 lg:py-0'>
          <img
            onClick={() => router.push('/')}
            src={logo.src}
            alt=''
            className='object-contain h-16 ml-5 lg:w-full'
          />
        </div>

        <div className='flex items-center fixed top-5 z-40 right-5 py-2 lg:hidden w-[80px]'>
          <div
            onClick={onOpen}
            className='h-7 w-7 dark:bg-[#1b1324] bg-[#f7ffff] border p-2 rounded-lg mr-5'
          >
            <BsSearch
              size={10}
              className='dark:text-[#E6E0FA] text-[#261a2f]'
            />
          </div>
          <h1 className='text-gray-600'>
            <AiOutlineMenu
              size={20}
              onClick={handleShowSidebar}
              className='text-center text-[#261a2f] dark:text-[#E6E0FA]'
            />
          </h1>
        </div>
      </div>
      <Sidebar
        showSidebar={showSidebar}
        handleShowSidebar={handleShowSidebar}
      />
      <div className=' w-full  bg-transparent top-0 left-0 right-0 py-6 hidden lg:flex z-20 items-center lg:px-[80px] 2xl:px-[200px] md:px-5  md:justify-between'>
        <div className='items-center hidden cursor-pointer md:flex'>
          <img
            onClick={() => router.push('/')}
            src={logo.src}
            alt=''
            className='w-40'
          />
        </div>
        <div className='flex items-center justify-around w-full md:w-5/12 lg:w-4/12 md:justify-between'>
          <form className='w-full'>
            <label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
              Search
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  ></path>
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='block p-3 pl-10 w-full text-sm text-gray-50 bg-[#f3f3f3ae] border-[1px] border-[#261a2fb5] dark:border-none dark:bg-[#221C30]  dark:placeholder:text-[#8175A7] rounded-lg '
                placeholder='Search by collection, NFT or User'
                required
              />
            </div>
          </form>
        </div>

        <div className='flex items-center justify-between md:w-4/12 lg:w-5/12'>
          <div className=' dark:text-[#E6E0FA] text-[#261a2f]'>
            <IoNotifications
              size={25}
              className='mr-2 text-center text-gray-600'
            />
          </div>

          <div className='max-w-[200px] flex items-center justify-center text-yellow-300 font-bold max-h-[60px] rounded-sm py-[3px] px-[2px] button-custom'>
            {/* <a
              href='/connect'
              className='w-full h-full relative border-[1px] dark:border-yellow-300 border-[#261a2f] text-[#261a2f] cursor-pointer dark:text-yellow-300 font-bold lg:text-xs text-[12px] rounded-xl px-[15px] py-[10px] '
            >
              {isConnected ? (
                address !== undefined ? (
                  <span className='inline-block ml-2 '>
                    {address.substring(0, 8)} ...
                    {address.substring(address.length - 4, address.length)}
                  </span>
                ) : null
              ) : (
                'Connect Wallet'
              )}
            </a> */}

            <ConnectWallet
              className='connect-wallet'
              colorMode='light'
              accentColor='#fff'
            />
          </div>
          <div className='ml-5 md:hidden lg:block'>
            {/* menu item */}

            <Menu>
              <MenuButton className='border-[1px] dark:border-yellow-300 border-[#261a2f] cursor-pointer dark:text-[#E6E0FA] text-[#261a2f] font-bold lg:text-sm text-[12px] rounded-xl px-[15px] py-[10px]'>
                {' '}
                <FiMoreHorizontal
                  size={20}
                  className='text-center dark:text-yellow-300 text-[#261a2f]'
                />
              </MenuButton>
              <MenuList border={'none'} bg={'#1b1324a1'} color={'#E6E0FA'}>
                {/* <MenuItem
                  _focus={{
                    background: "#1b1324",
                  }}
                  _hover={{
                    background: "#1b1324",
                    color: "teal.500",
                  }}
                > */}
                <Translate />
                {/* </MenuItem> */}
                <MenuItem
                  _focus={{
                    background: '#1b1324'
                  }}
                  _hover={{
                    background: '#1b1324',
                    color: 'teal.500'
                  }}
                  onClick={() => {
                    router.push('/profile')
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  _focus={{
                    background: '#1b1324'
                  }}
                  _hover={{
                    background: '#1b1324',
                    color: 'teal.500'
                  }}
                  onClick={() => {
                    router.push('/settings')
                  }}
                >
                  Settings
                </MenuItem>
                <MenuItem
                  _focus={{
                    background: '#1b1324'
                  }}
                  _hover={{
                    background: '#1b1324',
                    color: 'teal.500'
                  }}
                  onClick={() => {
                    router.push('/profile')
                  }}
                >
                  Activity
                </MenuItem>
                <MenuItem
                  _focus={{
                    background: '#1b1324'
                  }}
                  _hover={{
                    background: '#1b1324',
                    color: 'teal.500'
                  }}
                >
                  DEX
                </MenuItem>
                <MenuItem
                  _hover={{
                    background: '#1b1324',
                    color: 'teal.500'
                  }}
                >
                  $CENT
                </MenuItem>
                <MenuItem
                  _hover={{
                    background: '#1b1324',
                    color: 'teal.500'
                  }}
                >
                  WALLET
                </MenuItem>
                <MenuItem
                  _hover={{
                    background: '#1b1324',
                    color: 'teal.500'
                  }}
                >
                  Resources
                </MenuItem>
                <MenuItem
                  _hover={{
                    background: '#1b1324',
                    color: 'teal.500'
                  }}
                >
                  Help
                </MenuItem>
              </MenuList>
            </Menu>
            {/* end menu item */}
          </div>
          {/* <div className="ml-5"></div> */}

          {/* blockachain menu */}
          <DropDownContainer className='md:hidden lg:block'>
            <DropDownHeader
              onClick={toggling}
              className='w-full border-[1px] bg-transparent border-[#1b1324] dark:border-yellow-300 cursor-pointer text-yellow-300 font-bold lg:text-sm text-[12px] rounded-xl px-[15px] py-[10px]'
            >
              <p className='dark:text-yellow-300 text-[#1b1324]'>
                {' '}
                {selectedOption || 'Ethereum'}
              </p>
            </DropDownHeader>
            {isOpenDropdown && (
              <DropDownListContainer>
                <DropDownList className='p-2 rounded-lg'>
                  <li
                    onClick={onOptionClicked('Ethereum')}
                    className='dark:bg-[#1b1324] flex mb-3 items-center'
                  >
                    <img
                      src='ethereum.svg'
                      className='object-contain mr-2 h-7 '
                      alt=''
                    />
                    Ethereum
                  </li>
                  <li
                    onClick={onOptionClicked('BNB')}
                    className='dark:bg-[#1b1324] flex mb-3 items-center'
                  >
                    <img
                      src='bnb.svg'
                      className='object-contain mr-2 h-7 '
                      alt=''
                    />
                    BNB
                  </li>
                  <li
                    onClick={onOptionClicked('Polygon')}
                    className='bg-[#1b1324] flex mb-3 items-center'
                  >
                    <img
                      src='polygon.svg'
                      className='object-contain mr-2 h-7 '
                      alt=''
                    />
                    Polygon
                  </li>
                  <li
                    onClick={onOptionClicked('Avalanche')}
                    className='dark:bg-[#1b1324] flex mb-3 items-center'
                  >
                    <img
                      src='avalanche.svg'
                      className='object-contain mr-2 h-7 '
                      alt=''
                    />
                    Avalanche
                  </li>
                  <li
                    onClick={onOptionClicked('Moonriver')}
                    className='dark:bg-[#1b1324] flex mb-3 items-center'
                  >
                    <img
                      src='moonriver.png'
                      className='object-contain mr-2 h-7 '
                      alt=''
                    />
                    Moonriver
                  </li>
                  <li
                    onClick={onOptionClicked('Moonbeam')}
                    className='dark:bg-[#1b1324] flex mb-3 items-center'
                  >
                    <img
                      src='moonbeam.jpg'
                      className='object-contain mr-2 h-7 '
                      alt=''
                    />
                    Moonbeam
                  </li>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>

          {/* end blockachain menu */}
          <div>
            {' '}
            <button
              type='button'
              className='py-3 px-2 sm:px-5 mr-2 bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded-xl'
              onClick={toggleThemeHandler}
            >
              <BsSun />
            </button>
          </div>
        </div>
      </div>

      {/* modal for search on mobile */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='dark:bg-[#1b1324] dark:text-[#E6E0FA] text-[#261a2f]'>
            Search
          </ModalHeader>
          <ModalCloseButton className='dark:text-[#E6E0FA] text-[#261a2f]' />
          <ModalBody className='dark:bg-[#1b1324] bg-white'>
            <form className='w-full'>
              <label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
                Search
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    ></path>
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  className='block w-full p-3 pl-10 text-sm dark:bg-[#221C30] bg-[#f1f1f1] rounded-lg text-gray-50 '
                  placeholder='Search by collection, NFT or User'
                  required
                />
              </div>
            </form>
          </ModalBody>

          <ModalFooter className='dark:bg-[#1b1324]'>
            <button
              className='w-full rounded-xl border-[1px] border-yellow-300 px-8 py-2 dark:text-[#E6E0FA] text-[#261a2f]'
              onClick={onClose}
            >
              Search
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
