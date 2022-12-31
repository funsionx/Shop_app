import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { cartActions } from '../store/cartSlice'
import { useMemo } from 'react'

export const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators({...cartActions},dispatch) ,[dispatch])
}