import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const candyPriceUsd = priceData ? parseFloat(priceData.prices.Candy) : 0

  const candyPriceUsdString =
    Number.isNaN(candyPriceUsd) || candyPriceUsd === 0
      ? ''
      : ` - $${candyPriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `CandySwap${candyPriceUsdString}`
  }, [candyPriceUsdString])
}
export default useGetDocumentTitlePrice
