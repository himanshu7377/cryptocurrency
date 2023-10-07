import React from 'react'
import {Select,Typography,Row,Col,Avatar,Card} from 'antd'
import moment from 'moment'

import { useGetCryptoListQuery, useGetCryptoNewsQuery } from '../services/cryptoNewApi'

const {Tittle,Text}=Typography;
const {Option}=Select;

const News = ({simplifield}) => {

  const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count:simplifield? 10:100})
  return (
    <div>
      News
    </div>
  )
}

export default News
