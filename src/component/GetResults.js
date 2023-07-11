import React, { useEffect, useState } from 'react'

const GetResults = () => {
    const url = 'https://support.opensea.io/hc/en-us/articles/1500003076601-Can-I-list-an-item-without-paying-to-mint-it-'

    const [data, setData]  = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = response.json()
                console.log(data);
                setData([data]);  
            } catch (error) {
                console.log(error.stack);
            }
            
        }
        fetchData()
    }, [])

  return (
    <div>
        {
        data
        }
    </div>
  )
}

export default GetResults